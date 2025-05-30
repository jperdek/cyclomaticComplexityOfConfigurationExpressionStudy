package astFileProcessor.processors.cyclomaticComplexity.configurationExpressions.types;

import java.io.IOException;
import java.util.Map.Entry;
import java.util.Set;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import astFileProcessor.astObjects.cyclomaticComplexity.ASTConditionalStatement;
import astFileProcessor.processors.ASTTextExtractorTools;


public class NativeConfigurationExpression implements ConfigurationExpressionType {

	public NativeConfigurationExpression() {	
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
	   
	
	private String recursivelyTransformConfigurationExpressionIntoConditions(JSONObject configurationExpression, Operator operator) {
		String buildString = "";
		for (Entry<Object, Object> configurationExpressionEntry: (Set<Entry<Object, Object>>) configurationExpression.entrySet()) {
			String key = (String) configurationExpressionEntry.getKey();
			Object value = configurationExpressionEntry.getValue();
			if (value instanceof JSONObject) {
				Operator innerOperator = Operator.AND; //defaults to AND
				if (key.strip().equals(Operator.OR.text)) { innerOperator = Operator.OR; }
				if (!buildString.equals("")) { buildString = buildString + " " + operator.sign + " "; }
				buildString = buildString + "( " + this.recursivelyTransformConfigurationExpressionIntoConditions(
						(JSONObject) value, innerOperator) + " )";
			} else if (value instanceof String) {
				if (!buildString.equals("")) { buildString = buildString + " " + operator.sign + " "; }
				String stringValue = (String) value;
				if (stringValue.strip().equals("false")) {
					buildString = buildString + "\"" + key + "\" != " + value;
				} else if (stringValue.strip().equals("true")) {
					buildString = buildString + "\"" + key + "\" == " + value;
				} else {
					if (value.toString().indexOf(']') > 0) {
						buildString = buildString + value + ".indexOf(" + key + ") > -1";
					} else {
						buildString = buildString + "\"" + key +"\" == " + value;

					}
				}
			} else {
				if (!buildString.equals("")) { buildString = buildString + " " + operator.sign + " "; }
				buildString = buildString + value.toString();
			}
		}
		return buildString;
	}
	
	@Override
	public JSONObject transformConfigurationExpressionIntoConditionalStatement(
			JSONObject innnerConfigurationExpressionAst, String decoratorName, JSONArray methodStatements) throws ParseException, IOException, InterruptedException {
		JSONObject configurationExpression = ASTTextExtractorTools.getJSONObjectFromVariable(innnerConfigurationExpressionAst);
		String transformedConfigurationExpression = this.recursivelyTransformConfigurationExpressionIntoConditions(configurationExpression, Operator.AND);
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
		String transformedConfigurationExpression = this.recursivelyTransformConfigurationExpressionIntoConditions(configurationExpression, Operator.AND);
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
		String transformedConfigurationExpression = this.recursivelyTransformConfigurationExpressionIntoConditions(configurationExpression, Operator.AND);
		JSONObject expressionFromMadeCondition = ASTTextExtractorTools.getExpressionFromMadeCondition(transformedConfigurationExpression);
		String astObjectString = ASTConditionalStatement.getAstConditionalExpressionStatementWithElsePart(
						expressionFromMadeCondition, astElement, (JSONArray) new JSONParser().parse(methodStatements.toString()));
		JSONObject conditionalStatement = (JSONObject) new JSONParser().parse(astObjectString);
		return conditionalStatement;
	}
}
