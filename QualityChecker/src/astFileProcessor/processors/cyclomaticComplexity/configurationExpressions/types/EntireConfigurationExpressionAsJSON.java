package astFileProcessor.processors.cyclomaticComplexity.configurationExpressions.types;

import java.io.IOException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import astFileProcessor.astObjects.cyclomaticComplexity.ASTConditionalStatement;
import astFileProcessor.astObjects.cyclomaticComplexity.ASTConditionalStatementReduced;
import astFileProcessor.processors.cyclomaticComplexity.ExpressionsForCyclomaticComplexityManipulationSettings;


public class EntireConfigurationExpressionAsJSON implements ConfigurationExpressionType {

	private ExpressionsForCyclomaticComplexityManipulationSettings expressionsForCyclomaticComplexityManipulationSettings;
	
	
	public EntireConfigurationExpressionAsJSON(
			ExpressionsForCyclomaticComplexityManipulationSettings expressionsForCyclomaticComplexityManipulationSettings) {
		this.expressionsForCyclomaticComplexityManipulationSettings = expressionsForCyclomaticComplexityManipulationSettings;
	}

	@Override
	public JSONObject transformConfigurationExpressionIntoConditionalStatement(
			JSONObject innnerConfigurationExpressionAst, String decoratorName, 
			JSONArray methodStatements) throws ParseException, IOException, InterruptedException {
		String astObjectString;
		if (expressionsForCyclomaticComplexityManipulationSettings.useReducedFormInJSONExpressions()) {
			astObjectString = ASTConditionalStatementReduced.getAstConditionalExpressionStatement(
					innnerConfigurationExpressionAst.get("properties").toString(), decoratorName, 
					(JSONArray) new JSONParser().parse(methodStatements.toString()));
		} else {
			astObjectString = ASTConditionalStatement.getAstConditionalExpressionStatement(
					innnerConfigurationExpressionAst.get("properties").toString(), decoratorName, 
					(JSONArray) new JSONParser().parse(methodStatements.toString()));
		}
		JSONObject conditionalStatement = (JSONObject) new JSONParser().parse(astObjectString);
		return conditionalStatement;
	}
	
	@Override
	public JSONObject transformConfigurationExpressionIntoConditionalStatement(
			JSONObject innnerConfigurationExpressionAst, String decoratorName, 
			JSONObject methodStatement) throws ParseException, IOException, InterruptedException {
		String astObjectString;
		if (expressionsForCyclomaticComplexityManipulationSettings.useReducedFormInJSONExpressions()) {
			astObjectString = ASTConditionalStatementReduced.getAstConditionalExpressionStatement(
					innnerConfigurationExpressionAst.get("properties").toString(), decoratorName, 
					methodStatement.toString());
		} else {
			astObjectString = ASTConditionalStatement.getAstConditionalExpressionStatement(
					innnerConfigurationExpressionAst.get("properties").toString(), decoratorName, 
					methodStatement.toString());
		}
		JSONObject conditionalStatement = (JSONObject) new JSONParser().parse(astObjectString);
		return conditionalStatement;
	}
	
	@Override
	public JSONObject transformConfigurationExpressionIntoConditionalStatementWithElsePart(
			JSONObject innnerConfigurationExpressionAst, String decoratorName, JSONObject astElement, 
			JSONArray methodStatements) throws ParseException, IOException, InterruptedException {
		String astObjectString;
		if (expressionsForCyclomaticComplexityManipulationSettings.useReducedFormInJSONExpressions()) {
			astObjectString = ASTConditionalStatementReduced.getAstConditionalExpressionStatementWithElsePart(
					innnerConfigurationExpressionAst.get("properties").toString(), decoratorName, astElement.toString(),
					(JSONArray) new JSONParser().parse(methodStatements.toString()));
		} else {
			astObjectString = ASTConditionalStatement.getAstConditionalExpressionStatementWithElsePart(
					innnerConfigurationExpressionAst.get("properties").toString(), decoratorName, astElement.toString(),
					(JSONArray) new JSONParser().parse(methodStatements.toString()));
		}
		JSONObject conditionalStatement = (JSONObject) new JSONParser().parse(astObjectString);
		return conditionalStatement;
	}
}
