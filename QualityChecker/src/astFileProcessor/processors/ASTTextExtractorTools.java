package astFileProcessor.processors;

import java.io.IOException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import astFileProcessor.ASTLoader;
import codeConstructsEvaluation.transformation.ASTConverterClient;


/**
 * Tools to extract text from AST
 * 
 * @author Jakub Perdek
 *
 */
public class ASTTextExtractorTools {

	/**
	 * Extracts the text from AST - especially from the name element (declaration name - field "name") and nested expressions 
	 * (objects with key (field) "expression" that occur inside another field "expression")
	 * 
	 * @param astPart - actually/currently processed part of AST
	 * @return extracted text from the AST, especially from the name element and nested expressions
	 */
	public static String getTextFromAstIncludingNameAndExpressions(JSONObject astPart) {
		JSONObject astPartRecursive = astPart;
		while (astPartRecursive.containsKey("expression")) {
			JSONObject firstExpression = (JSONObject) astPart.get("expression");
			if (firstExpression.containsKey("expression")) {
				return ASTTextExtractorTools.getTextFromAstIncludingOptionallyName((JSONObject) ((JSONObject) astPart.get("expression")).get("expression"));
			}
			return ASTTextExtractorTools.getTextFromAstIncludingOptionallyName(firstExpression);
		}
		return ASTTextExtractorTools.getTextFromAstIncludingOptionallyName(astPart);
	}
	
	/**
	 * Extracts the text from AST - especially from nested expressions 
	 * (objects with key (field) "expression" that occur inside another field "expression")
	 * 
	 * @param astPart - actually/currently processed part of AST
	 * @return extracted text from nested expressions (objects with key (field) "expression" that occur inside another field "expression")
	 */
	public static String getFullTextFromAstExpressions(JSONObject astPart) {
		String fullName = "";
		if (astPart.containsKey("expression")) {
			fullName = ASTTextExtractorTools.getFullTextFromAstExpressions((JSONObject) ((JSONObject) astPart.get("expression")));
		} else {
			return (String) astPart.get("escapedText");
		}
		if (astPart.containsKey("name")) {
			fullName = fullName + "." + ASTTextExtractorTools.getTextFromAst((JSONObject) astPart.get("name"));
			
			if (fullName.startsWith(".")) {
				fullName = fullName.substring(1);
			} 
		}
		return fullName;
	}

	/**
	 * Extracts the text from declaration name
	 * 
	 * @param astDeclaration - actually/currently processed part of AST
	 * @return extracted text from declaration name
	 */
	public static String getTextFromDeclarationName(JSONObject astDeclaration) {
		if (astDeclaration.containsKey("name")) {
			return ASTTextExtractorTools.getTextFromAst((JSONObject) astDeclaration.get("name"));
		}
		return ASTTextExtractorTools.getTextFromAst(astDeclaration);
	}

	/**
	 * Extracts the text from the declaration list (field "declarationList") and declarations (field "declarations")
	 * 
	 * @param astPart - actually/currently processed part of AST
	 * @return extracted text from the declaration list and declarations
	 */
	public static String getTextFromTheDeclarationObject(JSONObject astPart) {
		JSONObject declarationList = astPart;
		if (astPart.containsKey("declarationList")) {
			declarationList = (JSONObject) astPart.get("declarationList");
		}
	
		return ASTTextExtractorTools.getTextFromTheDeclarations(declarationList);
	}
	
	/**
	 * Extracts the text from the declarations - concatenates the declared names together separated with "|+|"
	 * 
	 * @param declarationList - actually/currently processed part of AST
	 * @return concatenated names from declarations together and separated with "|+|"
	 */
	public static String getTextFromTheDeclarations(JSONObject declarationList) {
		String wholeDeclarationsIdentifier = null;
		String declarationIdentifier;
		JSONObject declarationJSONObject;
		JSONArray declarations = (JSONArray) declarationList.get("declarations");
		if (declarations == null) { return null;}  //DECLARATION IS FOUND, BUT PROCESSED OBJECT IS NOT DECLARED VARIABLE ITSELF
		for (Object declarationObject: declarations) {
			declarationJSONObject = (JSONObject) declarationObject;
			declarationIdentifier = ASTTextExtractorTools.getTextFromDeclarationName(declarationJSONObject);
			if (wholeDeclarationsIdentifier == null) {
				wholeDeclarationsIdentifier = declarationIdentifier;
			} else {
				wholeDeclarationsIdentifier = wholeDeclarationsIdentifier + "|+|" + declarationIdentifier;
			}
		}
		return wholeDeclarationsIdentifier;
	}

	/**
	 * Extracts text optionally from the name (field "name") or from "text" or 
	 * "escapedText" fields, if cannot be extracted then null is returned
	 * 
	 * @param astPart - actually/currently processed part of AST
	 * @return optionally extracted text from the name (field "name") or from "text" or 
	 * "escapedText" fields, if cannot be extracted then null is returned 
	 */
	public static String getTextFromAstIncludingOptionallyName(JSONObject astPart) {
		if (astPart.containsKey("name")) {
			Object nameObject = astPart.get("name");
			if (nameObject instanceof String) {
				return (String) nameObject;
			}
			return ASTTextExtractorTools.getTextFromAst((JSONObject) nameObject);
		}
		return ASTTextExtractorTools.getTextFromAst(astPart);
	}

	/**
	 * Extracts text from "text" or "escapedText" fields, if cannot be extracted then null is returned
	 * 
	 * @param astPart - actually/currently processed part of AST
	 * @return extracted text from "text" or "escapedText" fields, if cannot be extracted then null is returned
	 */
	public static String getTextFromAst(JSONObject astPart) {
		if(astPart.containsKey("text")) {
			return (String) astPart.get("text");
		}
		if(astPart.containsKey("escapedText")) {
			return (String) astPart.get("escapedText");
		}
		return null;
	}
	
	/**
	 * Converts configuration expression in AST part representing argument of particular functionality into JSON
	 * 
	 * @param expressionAsArgument - configuration expression in AST part representing argument of particular functionality
	 * @return configuration expression in JSON format
	 * 
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public static JSONObject getJSONObjectFromVariable(JSONObject expressionAsArgument) throws IOException, InterruptedException {
		String initializedExpressionCodeConstruct = "var variableE = {};";
		JSONObject defaultClassAst = (JSONObject) ASTConverterClient.convertFromCodeToASTJSON(initializedExpressionCodeConstruct).get("ast");
		((JSONObject) ((JSONArray) ((JSONObject) ((JSONObject) ((JSONArray) defaultClassAst.get(
				"statements")).get(0)).get("declarationList")).get("declarations")).get(0)).put("initializer", expressionAsArgument);
		String codeWithVariableExpression = ASTConverterClient.convertFromASTToCode(defaultClassAst.toString());
		codeWithVariableExpression = codeWithVariableExpression.strip();
		if (codeWithVariableExpression.endsWith(";")) { codeWithVariableExpression = codeWithVariableExpression.substring(0, codeWithVariableExpression.length() - 1); }
		return ASTLoader.loadASTFromString(codeWithVariableExpression.substring(codeWithVariableExpression.indexOf('=') + 1));
	}
	
	
	/**
	 * Extracts configuration expression from decorator in AST and converts it into JSON
	 * 
	 * @param decoratorAst - TypeScript decorator represented in AST (in form of AST)
	 * @param expressionPosition - the start occurrence position in AST
	 * @return extracted configuration expression in JSON
	 * 
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public static JSONObject extractExpressionFromDecoratorAst(JSONObject decoratorAst, int expressionPosition) throws IOException, InterruptedException {
		JSONArray decoratorArguments = (JSONArray) ((JSONObject) decoratorAst.get("expression")).get("arguments");
		if (decoratorArguments == null || decoratorArguments.size() <= expressionPosition) {
			return null;
		}
		JSONObject expressionAst = (JSONObject) decoratorArguments.get(expressionPosition);
		JSONObject jsonExpressionAst = (JSONObject) expressionAst.get("initializer");

		//HANDLING UNASIGNED JSON PART
		if (jsonExpressionAst == null) { 
			try {
				jsonExpressionAst = (JSONObject) new JSONParser().parse("{\"pos\": 27, \"kind\": 207, \"multiLine\": false, \"flags\": 0, \"modifierFlagsCache\": 0, \"end\": 62, \"properties\": [], \"transformFlags\": 0}");
			} catch (ParseException e) {
				e.printStackTrace();
			}
			jsonExpressionAst.put("properties", (JSONArray) expressionAst.get("properties"));
		}
		JSONObject jsonExpression = ASTTextExtractorTools.getJSONObjectFromVariable(jsonExpressionAst);
		return jsonExpression;
	}

	
	public static String extractTextFromModifierArgument(JSONObject decoratorAst, int expressionPosition) throws IOException, InterruptedException {
		JSONArray decoratorArguments = (JSONArray) ((JSONObject) decoratorAst.get("expression")).get("arguments");
		if (decoratorArguments == null || decoratorArguments.size() <= expressionPosition) {
			return null;
		}
		JSONObject expressionAst = (JSONObject) decoratorArguments.get(expressionPosition);
		String extractedText =(String) expressionAst.get("text");
		if (extractedText == null) {
			JSONArray innerProperties = (JSONArray) expressionAst.get("properties");
			extractedText = (String) ((JSONObject) ((JSONObject) innerProperties.get(0)).get("name")).get("text");
		}
		return extractedText;
	}
	
	/**
	 * Extracts configuration expression from decorator in AST and converts it into JSON
	 * 
	 * @param decoratorAst - TypeScript decorator represented in AST (in form of AST)
	 * @param expressionPosition - the start occurrence position in AST
	 * @return extracted configuration expression in JSON
	 * 
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public static JSONObject extractExpressionFromDecoratorAsAst(JSONObject decoratorAst, int expressionPosition) throws IOException, InterruptedException {
		JSONObject expression = (JSONObject) decoratorAst.get("expression");
		if (expression == null) { return null; }
		JSONArray decoratorArguments = (JSONArray) ((JSONObject) decoratorAst.get("expression")).get("arguments");
		if (decoratorArguments == null || decoratorArguments.size() <= expressionPosition) {
			return null;
		}
		JSONObject expressionAst = (JSONObject) decoratorArguments.get(expressionPosition);
		JSONObject jsonExpressionAst = (JSONObject) expressionAst.get("initializer");

		//HANDLING UNASIGNED JSON PART
		if (jsonExpressionAst == null) { 
			try {
				jsonExpressionAst = (JSONObject) new JSONParser().parse("{\"pos\": 27, \"kind\": 207, \"multiLine\": false, \"flags\": 0, \"modifierFlagsCache\": 0, \"end\": 62, \"properties\": [], \"transformFlags\": 0}");
			} catch (ParseException e) {
				e.printStackTrace();
			}
			jsonExpressionAst.put("properties", (JSONArray) expressionAst.get("properties"));
		}
		return jsonExpressionAst;
	}
	
	public static JSONObject getExpressionFromMadeCondition(String conditionInStr) throws IOException, InterruptedException {
		conditionInStr = conditionInStr.strip();
		if (conditionInStr.equals("")) { conditionInStr = "true"; }
		if (!conditionInStr.startsWith("(")) { conditionInStr = "(" + conditionInStr; }
		if (!conditionInStr.endsWith(")")) { conditionInStr = conditionInStr + ")"; }
		conditionInStr = "if " + conditionInStr + " {}";
		System.out.println(conditionInStr);
		JSONObject defaultClassAst = (JSONObject) ASTConverterClient.convertFromCodeToASTJSON(conditionInStr).get("ast");
		JSONObject expressionMadeFromCondition = (JSONObject) ((JSONObject) ((JSONArray) defaultClassAst.get("statements")).get(0)).get("expression");
		return expressionMadeFromCondition;
	}
}