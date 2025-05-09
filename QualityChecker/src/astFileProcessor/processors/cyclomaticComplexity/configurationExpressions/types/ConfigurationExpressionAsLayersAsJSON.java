package astFileProcessor.processors.cyclomaticComplexity.configurationExpressions.types;

import java.io.IOException;
import java.util.Set;
import java.util.Map.Entry;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import astFileProcessor.astObjects.cyclomaticComplexity.ASTConditionalStatement;
import astFileProcessor.processors.ASTTextExtractorTools;
import astFileProcessor.processors.cyclomaticComplexity.ExpressionsForCyclomaticComplexityManipulationSettings;


public class ConfigurationExpressionAsLayersAsJSON implements ConfigurationExpressionType {
	
	private ExpressionsForCyclomaticComplexityManipulationSettings expressionsForCyclomaticComplexityManipulationSettings;
	
	public ConfigurationExpressionAsLayersAsJSON(
			ExpressionsForCyclomaticComplexityManipulationSettings expressionsForCyclomaticComplexityManipulationSettings) {
		this.expressionsForCyclomaticComplexityManipulationSettings = expressionsForCyclomaticComplexityManipulationSettings;	
	}
	

	public enum Operator {
	    AND("AND", "&&"),
	    OR("OR", "||")
	    ;

	    private final String text;
	    private final String sign;

	    Operator(final String text, final String sign) {
	        this.text = text;
	        this.sign = sign;
	    }

	    @Override
	    public String toString() {
	        return text;
	    }
	}
	   
	
	private String recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(JSONObject configurationExpression, Operator operator, int depth) {
		String buildString = "";
		JSONObject buildObject = new JSONObject();
		for (Entry<Object, Object> configurationExpressionEntry: (Set<Entry<Object, Object>>) configurationExpression.entrySet()) {
			String key = (String) configurationExpressionEntry.getKey();
			Object value = configurationExpressionEntry.getValue();
			if (value instanceof JSONObject) {
				Operator innerOperator = Operator.AND; //defaults to AND
				if (key.strip().equals(Operator.OR.text)) { innerOperator = Operator.OR; }
				//if (!buildString.equals("")) { buildString = buildString + " " + operator.sign + " "; }
				if (buildString.equals("")) {
					buildString = "" + this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(
							(JSONObject) value, innerOperator, depth + 1) + "";
				} else {
					buildString = buildString + "  " + innerOperator.sign + " " + this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(
							(JSONObject) value, innerOperator, depth + 1) + "  ";
				}
			} else if (value instanceof String) {
				buildObject.put(key, value);
			}
		}
		if (buildObject.keySet().size() == 0) { return buildString; }
		
		//reduced form - start
		if (this.expressionsForCyclomaticComplexityManipulationSettings.useReducedFormInJSONExpressions()) {
			if (buildString.equals("")) { return buildObject.toString(); }
			return "( "  + buildObject.toString() + " " + operator.sign + " " + buildString + " )";
		}
		//reduced form - end
		if (buildString.equals("")) { return "{ \"layer" + operator.text + String.valueOf(depth) + "\": "  + buildObject.toString() + " }.layer" + operator.text
				+ String.valueOf(depth); }
		return "({ \"layer" + operator.text + String.valueOf(depth) + "\": "  + buildObject.toString() + " }.layer" + operator.text
				+ String.valueOf(depth) + " " + operator.sign + " " + buildString + " )";

	}
	
	@Override
	public JSONObject transformConfigurationExpressionIntoConditionalStatement(
			JSONObject innnerConfigurationExpressionAst, String decoratorName, JSONArray methodStatements) throws ParseException, IOException, InterruptedException {
		JSONObject configurationExpression = ASTTextExtractorTools.getJSONObjectFromVariable(innnerConfigurationExpressionAst);
		String transformedConfigurationExpression = this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(configurationExpression, Operator.AND, 1);
		JSONObject expressionFromMadeCondition = ASTTextExtractorTools.getExpressionFromMadeCondition(transformedConfigurationExpression);
		String astObjectString = ASTConditionalStatement.getAstConditionalExpressionStatementEntirelyChangedExpression(
						expressionFromMadeCondition, (JSONArray) new JSONParser().parse(methodStatements.toString()));
		JSONObject conditionalStatement = (JSONObject) new JSONParser().parse(astObjectString);
		return conditionalStatement;
	}
	
	@Override
	public JSONObject transformConfigurationExpressionIntoConditionalStatement(
			JSONObject innnerConfigurationExpressionAst, String decoratorName, JSONObject methodStatement) throws ParseException, IOException, InterruptedException {
		JSONObject configurationExpression = ASTTextExtractorTools.getJSONObjectFromVariable(innnerConfigurationExpressionAst);
		String transformedConfigurationExpression = this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(configurationExpression, Operator.AND, 1);
		JSONObject expressionFromMadeCondition = ASTTextExtractorTools.getExpressionFromMadeCondition(transformedConfigurationExpression);
		String astObjectString = ASTConditionalStatement.getAstConditionalExpressionStatementEntirelyChangedExpression(
						expressionFromMadeCondition, methodStatement.toString());
		JSONObject conditionalStatement = (JSONObject) new JSONParser().parse(astObjectString);
		return conditionalStatement;
	}
	
	
	@Override
	public JSONObject transformConfigurationExpressionIntoConditionalStatementWithElsePart(
			JSONObject innnerConfigurationExpressionAst, String decoratorName, JSONObject astElement, 
			JSONArray methodStatements) throws ParseException, IOException, InterruptedException {
		JSONObject configurationExpression = ASTTextExtractorTools.getJSONObjectFromVariable(innnerConfigurationExpressionAst);
		String transformedConfigurationExpression = this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(configurationExpression, Operator.AND, 1);
		JSONObject expressionFromMadeCondition = ASTTextExtractorTools.getExpressionFromMadeCondition(transformedConfigurationExpression);
		String astObjectString = ASTConditionalStatement.getAstConditionalExpressionStatementWithElsePart(
						expressionFromMadeCondition, astElement, (JSONArray) new JSONParser().parse(methodStatements.toString()));
		JSONObject conditionalStatement = (JSONObject) new JSONParser().parse(astObjectString);
		return conditionalStatement;
	}
}
