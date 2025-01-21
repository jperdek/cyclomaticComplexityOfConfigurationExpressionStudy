package astFileProcessor.processors.cyclomaticComplexity.configurationExpressions.types;

import java.io.IOException;
import java.util.Set;
import java.util.HashMap;
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
	   
	
	private void recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(
			JSONObject configurationExpression, Operator operator, String hierarchicalObjectName, int depth, Map<String, JSONObject> introducedGroupsMap) {
		JSONObject buildObject = new JSONObject();
		JSONObject buildObjectParent;
		if (introducedGroupsMap.containsKey(hierarchicalObjectName)) {
			buildObjectParent = introducedGroupsMap.get(hierarchicalObjectName);
			buildObjectParent.put(operator.text, buildObject);
		} else {
			buildObject = new JSONObject();
			introducedGroupsMap.put(hierarchicalObjectName, buildObject);
		}
		
		for (Entry<Object, Object> configurationExpressionEntry: (Set<Entry<Object, Object>>) configurationExpression.entrySet()) {
			String key = (String) configurationExpressionEntry.getKey();
			Object value = configurationExpressionEntry.getValue();
			if (value instanceof JSONObject) {
				if (!key.equals(Operator.AND.text) && !key.equals(Operator.OR.text)) {
					this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(
							(JSONObject) value, operator, key + "#" + String.valueOf(depth + 1) + "#" + operator.sign, depth + 1, introducedGroupsMap);
				} else {
					Operator innerOperator = Operator.AND;
					if (key.equals(Operator.OR.text)) { innerOperator = Operator.OR; }
					this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(
							(JSONObject) value, innerOperator, key, depth + 1, introducedGroupsMap);
				}	
			} else {
				buildObject.put(key, value);
			}
		}
	}
	
	private String createConfigurationExpressionFromPredefinedGroups(Map<String, JSONObject> introducedGroupsMap) {
		String buildString = "";
		String groupName, groupNameIdentifier;
		String[] groupNameParts;
		JSONObject configurationExpressionPart;
		String hierarchicalObjectName;
		int bracketsPosition, previousBracketsPosition;
		String operatorToUse;
		previousBracketsPosition = 1;
		for (Entry<String, JSONObject> configurationExpressionGroup: introducedGroupsMap.entrySet()) {
			groupName = configurationExpressionGroup.getKey();
			configurationExpressionPart = configurationExpressionGroup.getValue();
			groupNameParts = groupName.split("#");
			hierarchicalObjectName = groupNameParts[0];
			bracketsPosition = Integer.parseInt(groupNameParts[1]);
			operatorToUse = groupNameParts[2];
			if (buildString.equals("")) {
				buildString = "{ \"" + hierarchicalObjectName + "\": "  + configurationExpressionPart.toString() + " }." + hierarchicalObjectName;
			} else {
				if (previousBracketsPosition < bracketsPosition) {
					buildString = "(" + buildString;
				}
				if (previousBracketsPosition > bracketsPosition) {
					buildString = buildString + ")";
				}
				buildString = "{ \"" + hierarchicalObjectName + "\": "  + configurationExpressionPart.toString() + " }." + hierarchicalObjectName + " " + operatorToUse + " " + buildString; 
			}
			previousBracketsPosition = bracketsPosition;
		}
		return buildString;
	}
	
	@Override
	public JSONObject transformConfigurationExpressionIntoConditionalStatement(
			JSONObject innnerConfigurationExpressionAst, String decoratorName, JSONArray methodStatements) throws ParseException, IOException, InterruptedException {
		JSONObject configurationExpression = ASTTextExtractorTools.getJSONObjectFromVariable(innnerConfigurationExpressionAst);
		Map<String, JSONObject> introducedGroupsMap = new HashMap<String, JSONObject>();
	    this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(configurationExpression, Operator.AND, "base", 1, introducedGroupsMap);
	    String transformedConfigurationExpression = this.createConfigurationExpressionFromPredefinedGroups(introducedGroupsMap);
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
		Map<String, JSONObject> introducedGroupsMap = new HashMap<String, JSONObject>();
		this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(configurationExpression, Operator.AND, "base", 1, introducedGroupsMap);
		String transformedConfigurationExpression = this.createConfigurationExpressionFromPredefinedGroups(introducedGroupsMap);
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
		Map<String, JSONObject> introducedGroupsMap = new HashMap<String, JSONObject>();
		this.recursivelyTransformConfigurationExpressionIntoLayerSensitiveConditions(configurationExpression, Operator.AND, "base", 1, introducedGroupsMap);
		String transformedConfigurationExpression = this.createConfigurationExpressionFromPredefinedGroups(introducedGroupsMap); 
		JSONObject expressionFromMadeCondition = ASTTextExtractorTools.getExpressionFromMadeCondition(transformedConfigurationExpression);
		String astObjectString = ASTConditionalStatement.getAstConditionalExpressionStatementWithElsePart(
						expressionFromMadeCondition, astElement, (JSONArray) new JSONParser().parse(methodStatements.toString()));
		JSONObject conditionalStatement = (JSONObject) new JSONParser().parse(astObjectString);
		return conditionalStatement;
	}
}
