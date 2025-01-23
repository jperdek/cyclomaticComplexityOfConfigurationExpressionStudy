package astFileProcessor.processors.cyclomaticComplexity.configurationExpressions.types;

import java.io.IOException;
import java.util.Set;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import astFileProcessor.astObjects.cyclomaticComplexity.ASTConditionalStatement;
import astFileProcessor.processors.ASTTextExtractorTools;



public class CustomConfigurationExpressionAsJSON implements ConfigurationExpressionType {

	public CustomConfigurationExpressionAsJSON() {
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
	
	private String recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(
			JSONObject configurationExpression, Operator operator, String hierarchicalObjectName,
			int depth, JSONObject buildObject, boolean createNew) {
		String buildString = "";
		
		for (Entry<Object, Object> configurationExpressionEntry: (Set<Entry<Object, Object>>) configurationExpression.entrySet()) {
			String key = (String) configurationExpressionEntry.getKey();
			Object value = configurationExpressionEntry.getValue();
			String newGroupIdentifier; 
			if (value instanceof JSONObject) {
				if (!key.equals(Operator.AND.text) && !key.equals(Operator.OR.text)) {
					JSONObject extendedObjectNew = new JSONObject();
					newGroupIdentifier = key + "I" + String.valueOf(depth + 1) + "I" + operator.text;
					if (buildString.equals("")) {
						buildString = "" + this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(
								(JSONObject) value, operator, newGroupIdentifier, depth + 1, extendedObjectNew, true);
					} else {
						buildString = this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(
								(JSONObject) value, operator, newGroupIdentifier, depth + 1, extendedObjectNew, true) 
								+ " " + operator.sign + " " + buildString;
					}
				} else {
					Operator innerOperator = Operator.AND;
					if (key.equals(Operator.OR.text)) { innerOperator = Operator.OR; }
					JSONObject extendedObjectNew = new JSONObject();
					buildObject.put(innerOperator.text, extendedObjectNew);
					if (buildString.equals("")) {
						buildString = "" + this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(
								(JSONObject) value, innerOperator, innerOperator.text, depth + 1, extendedObjectNew, false);
					} else {
						buildString =  this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(
								(JSONObject) value, innerOperator, innerOperator.text, depth + 1, extendedObjectNew, false);
					}
				}	
			} else {
				buildObject.put(key, value);
			}
		}
		if (!createNew) { return buildString; }
		if (buildObject.keySet().size() == 0) { return buildString; }
		if (buildString.equals("")) { return "{ \"" + hierarchicalObjectName + "\": "  + buildObject.toString() + " }." + hierarchicalObjectName; }
		return "({ \"" + hierarchicalObjectName + "\": "  + buildObject.toString() + " }." + hierarchicalObjectName + " " + operator.sign + " " + buildString + " )";
	}
	
	@Override
	public JSONObject transformConfigurationExpressionIntoConditionalStatement(
			JSONObject innnerConfigurationExpressionAst, String decoratorName, JSONArray methodStatements) throws ParseException, IOException, InterruptedException {
		JSONObject configurationExpression = ASTTextExtractorTools.getJSONObjectFromVariable(innnerConfigurationExpressionAst);
		String transformedConfigurationExpression = this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(configurationExpression, Operator.AND, "base", 1, new JSONObject(), true);
		
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
		String transformedConfigurationExpression = this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(configurationExpression, Operator.AND, "base", 1, new JSONObject(), true);
		
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
		String transformedConfigurationExpression = this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(configurationExpression, Operator.AND, "base", 1, new JSONObject(), true);
				
		JSONObject expressionFromMadeCondition = ASTTextExtractorTools.getExpressionFromMadeCondition(transformedConfigurationExpression);
		String astObjectString = ASTConditionalStatement.getAstConditionalExpressionStatementWithElsePart(
						expressionFromMadeCondition, astElement, (JSONArray) new JSONParser().parse(methodStatements.toString()));
		JSONObject conditionalStatement = (JSONObject) new JSONParser().parse(astObjectString);
		return conditionalStatement;
	}
}
