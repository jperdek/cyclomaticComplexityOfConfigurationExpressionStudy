package astFileProcessor.astObjects.cyclomaticComplexity;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class ASTConditionalStatement {

	public static String getAstConditionalExpressionStatement(String innerConfigurationExpressionAstProperties,
			String expressionName, String thenStatementAst) {
		String conditionalStatementInAst = String.join("", "{",
		  "\"pos\": 168,",
		  "\"end\": 747,",
		  "\"flags\": 0,",
		  "\"modifierFlagsCache\": 0,",
		  "\"transformFlags\": 33555489,",
		  "\"kind\": 242,",
		  "\"expression\": {",
		  "    \"pos\": 211,",
		  "    \"end\": 248,",
		  "    \"flags\": 0,",
		  "    \"modifierFlagsCache\": 0,",
		  "    \"transformFlags\": 0,",
		  "    \"kind\": 208,",
		  "    \"expression\": {",
		  "        \"pos\": 211,",
		  "        \"end\": 233,",
		  "        \"flags\": 0,",
		  "        \"modifierFlagsCache\": 0,",
		  "        \"transformFlags\": 0,",
		  "        \"kind\": 207,",
		  "        \"properties\": [",
		  "            {",
		  "                \"pos\": 212,",
		  "                \"end\": 232,",
		  "                \"flags\": 0,",
		  "                \"modifierFlagsCache\": 0,",
		  "                \"transformFlags\": 0,",
		  "                \"kind\": 299,",
		  "                \"name\": {",
		  "                    \"pos\": 212,",
		  "                    \"end\": 228,",
		  "                    \"flags\": 0,",
		  "                    \"modifierFlagsCache\": 0,",
		  "                    \"transformFlags\": 0,",
		  "                    \"kind\": 10,",
		  "                    \"text\": \"" + expressionName + "\",",
		  "                    \"hasExtendedUnicodeEscape\": false",
		  "                },",
		  "                \"initializer\": {",
		  "                    \"pos\": 229,",
		  "                    \"end\": 232,",
		  "                    \"flags\": 0,",
		  "                    \"modifierFlagsCache\": 0,",
		  "                    \"transformFlags\": 0,",
		  "                    \"kind\": 207,",
		  "                    \"properties\": " + innerConfigurationExpressionAstProperties + ",",
		  "                    \"multiLine\": false",
		  "                }",
		  "            }",
		  "        ],",
		  "        \"multiLine\": false",
		  "    },",
		  "    \"name\": {",
		  "        \"pos\": 234,",
		  "        \"end\": 248,",
		  "        \"flags\": 0,",
		  "        \"modifierFlagsCache\": 0,",
		  "        \"transformFlags\": 0,",
		  "        \"kind\": 79,",
		  "        \"escapedText\": \"" + expressionName + "\"",
		  "    }",
		  "},",
		  "\"thenStatement\": {",
		  "    \"pos\": 249,",
		  "    \"end\": 747,",
		  "    \"flags\": 0,",
		  "    \"modifierFlagsCache\": 0,",
		  "    \"transformFlags\": 33555489,",
		  "    \"kind\": 238,",
		  "    \"statements\": [" + thenStatementAst + "]",
		  "}",
		"}");
		return conditionalStatementInAst;
	}
	
	
	public static String getAstConditionalExpressionStatement(String innerConfigurationExpressionAstProperties, 
			String expressionName, JSONArray thenStatementArrayAst) {
		String conditionalStatementInAst = String.join("", "{",
		  "\"pos\": 168,",
		  "\"end\": 747,",
		  "\"flags\": 0,",
		  "\"modifierFlagsCache\": 0,",
		  "\"transformFlags\": 33555489,",
		  "\"kind\": 242,",
		  "\"expression\": {",
		  "    \"pos\": 211,",
		  "    \"end\": 248,",
		  "    \"flags\": 0,",
		  "    \"modifierFlagsCache\": 0,",
		  "    \"transformFlags\": 0,",
		  "    \"kind\": 208,",
		  "    \"expression\": {",
		  "        \"pos\": 211,",
		  "        \"end\": 233,",
		  "        \"flags\": 0,",
		  "        \"modifierFlagsCache\": 0,",
		  "        \"transformFlags\": 0,",
		  "        \"kind\": 207,",
		  "        \"properties\": [",
		  "            {",
		  "                \"pos\": 212,",
		  "                \"end\": 232,",
		  "                \"flags\": 0,",
		  "                \"modifierFlagsCache\": 0,",
		  "                \"transformFlags\": 0,",
		  "                \"kind\": 299,",
		  "                \"name\": {",
		  "                    \"pos\": 212,",
		  "                    \"end\": 228,",
		  "                    \"flags\": 0,",
		  "                    \"modifierFlagsCache\": 0,",
		  "                    \"transformFlags\": 0,",
		  "                    \"kind\": 10,",
		  "                    \"text\": \"" + expressionName + "\",",
		  "                    \"hasExtendedUnicodeEscape\": false",
		  "                },",
		  "                \"initializer\": {",
		  "                    \"pos\": 229,",
		  "                    \"end\": 232,",
		  "                    \"flags\": 0,",
		  "                    \"modifierFlagsCache\": 0,",
		  "                    \"transformFlags\": 0,",
		  "                    \"kind\": 207,",
		  "                    \"properties\": " + innerConfigurationExpressionAstProperties + ",",
		  "                    \"multiLine\": false",
		  "                }",
		  "            }",
		  "        ],",
		  "        \"multiLine\": false",
		  "    },",
		  "    \"name\": {",
		  "        \"pos\": 234,",
		  "        \"end\": 248,",
		  "        \"flags\": 0,",
		  "        \"modifierFlagsCache\": 0,",
		  "        \"transformFlags\": 0,",
		  "        \"kind\": 79,",
		  "        \"escapedText\": \"" + expressionName + "\"",
		  "    }",
		  "},",
		  "\"thenStatement\": {",
		  "    \"pos\": 249,",
		  "    \"end\": 747,",
		  "    \"flags\": 0,",
		  "    \"modifierFlagsCache\": 0,",
		  "    \"transformFlags\": 33555489,",
		  "    \"kind\": 238,",
		  "    \"statements\": " + thenStatementArrayAst.toString() + "",
		  "}",
		"}");
		return conditionalStatementInAst;
	}
	
	
	public static String getAstConditionalExpressionStatementWithElsePart(
			String innerConfigurationExpressionAstProperties, String expressionName, 
			String thenStatementAst, JSONArray elseStatementArrayAst) {
		String conditionalStatementInAst = String.join("", "{",
		  "\"pos\": 168,",
		  "\"end\": 747,",
		  "\"flags\": 0,",
		  "\"modifierFlagsCache\": 0,",
		  "\"transformFlags\": 33555489,",
		  "\"kind\": 242,",
		  "\"expression\": {",
		  "    \"pos\": 211,",
		  "    \"end\": 248,",
		  "    \"flags\": 0,",
		  "    \"modifierFlagsCache\": 0,",
		  "    \"transformFlags\": 0,",
		  "    \"kind\": 208,",
		  "    \"expression\": {",
		  "        \"pos\": 211,",
		  "        \"end\": 233,",
		  "        \"flags\": 0,",
		  "        \"modifierFlagsCache\": 0,",
		  "        \"transformFlags\": 0,",
		  "        \"kind\": 207,",
		  "        \"properties\": [",
		  "            {",
		  "                \"pos\": 212,",
		  "                \"end\": 232,",
		  "                \"flags\": 0,",
		  "                \"modifierFlagsCache\": 0,",
		  "                \"transformFlags\": 0,",
		  "                \"kind\": 299,",
		  "                \"name\": {",
		  "                    \"pos\": 212,",
		  "                    \"end\": 228,",
		  "                    \"flags\": 0,",
		  "                    \"modifierFlagsCache\": 0,",
		  "                    \"transformFlags\": 0,",
		  "                    \"kind\": 10,",
		  "                    \"text\": \"" + expressionName + "\",",
		  "                    \"hasExtendedUnicodeEscape\": false",
		  "                },",
		  "                \"initializer\": {",
		  "                    \"pos\": 229,",
		  "                    \"end\": 232,",
		  "                    \"flags\": 0,",
		  "                    \"modifierFlagsCache\": 0,",
		  "                    \"transformFlags\": 0,",
		  "                    \"kind\": 207,",
		  "                    \"properties\": " + innerConfigurationExpressionAstProperties + ",",
		  "                    \"multiLine\": false",
		  "                }",
		  "            }",
		  "        ],",
		  "        \"multiLine\": false",
		  "    },",
		  "    \"name\": {",
		  "        \"pos\": 234,",
		  "        \"end\": 248,",
		  "        \"flags\": 0,",
		  "        \"modifierFlagsCache\": 0,",
		  "        \"transformFlags\": 0,",
		  "        \"kind\": 79,",
		  "        \"escapedText\": \"" + expressionName + "\"",
		  "    }",
		  "},",
		  "\"thenStatement\": {",
		  "    \"pos\": 249,",
		  "    \"end\": 747,",
		  "    \"flags\": 0,",
		  "    \"modifierFlagsCache\": 0,",
		  "    \"transformFlags\": 33555489,",
		  "    \"kind\": 238,",
		  "    \"statements\": [" + thenStatementAst + "]",
		  "}",
		  "\"elseStatement\": {",
		  "    \"pos\": 249,",
		  "    \"end\": 747,",
		  "    \"flags\": 0,",
		  "    \"modifierFlagsCache\": 0,",
		  "    \"transformFlags\": 33555489,",
		  "    \"kind\": 238,",
		  "    \"statements\": " + elseStatementArrayAst.toString() + "",
		  "}",
		"}");
		return conditionalStatementInAst;
	}
	
	
	public static String getAstConditionalExpressionStatementEntirelyChangedExpression(
			JSONObject expressionStatementAst, String thenStatementAst) {
		String conditionalStatementInAst = String.join("", "{",
		  "\"pos\": 168,",
		  "\"end\": 747,",
		  "\"flags\": 0,",
		  "\"modifierFlagsCache\": 0,",
		  "\"transformFlags\": 33555489,",
		  "\"kind\": 242,",
		  "\"expression\": " + expressionStatementAst.toString() + ",",
		  "\"thenStatement\": {",
		  "    \"pos\": 249,",
		  "    \"end\": 747,",
		  "    \"flags\": 0,",
		  "    \"modifierFlagsCache\": 0,",
		  "    \"transformFlags\": 33555489,",
		  "    \"kind\": 238,",
		  "    \"statements\": [" + thenStatementAst + "]",
		  "}",
		"}");
		return conditionalStatementInAst;
	}
	
	
	public static String getAstConditionalExpressionStatementEntirelyChangedExpression(
			JSONObject expressionStatementAst, JSONArray thenStatementArrayAst) {
		String conditionalStatementInAst = String.join("", "{",
		  "\"pos\": 168,",
		  "\"end\": 747,",
		  "\"flags\": 0,",
		  "\"modifierFlagsCache\": 0,",
		  "\"transformFlags\": 33555489,",
		  "\"kind\": 242,",
		  "\"expression\": " + expressionStatementAst.toString() + ",",
		  "\"thenStatement\": {",
		  "    \"pos\": 249,",
		  "    \"end\": 747,",
		  "    \"flags\": 0,",
		  "    \"modifierFlagsCache\": 0,",
		  "    \"transformFlags\": 33555489,",
		  "    \"kind\": 238,",
		  "    \"statements\": " + thenStatementArrayAst.toString() + "",
		  "}",
		"}");
		return conditionalStatementInAst;
	}
	
	public static String getAstConditionalExpressionStatementWithElsePart(
			JSONObject expressionStatementAst, JSONObject thenStatementAst, JSONArray elseStatementArrayAst) {
		String conditionalStatementInAst = String.join("", "{",
		  "\"pos\": 168,",
		  "\"end\": 747,",
		  "\"flags\": 0,",
		  "\"modifierFlagsCache\": 0,",
		  "\"transformFlags\": 33555489,",
		  "\"kind\": 242,",
		  "\"expression\": " + expressionStatementAst.toString() + ",",
		  "\"thenStatement\": {",
		  "    \"pos\": 249,",
		  "    \"end\": 747,",
		  "    \"flags\": 0,",
		  "    \"modifierFlagsCache\": 0,",
		  "    \"transformFlags\": 33555489,",
		  "    \"kind\": 238,",
		  "    \"statements\": [" + thenStatementAst + "]",
		  "}",
		  "\"elseStatement\": {",
		  "    \"pos\": 249,",
		  "    \"end\": 747,",
		  "    \"flags\": 0,",
		  "    \"modifierFlagsCache\": 0,",
		  "    \"transformFlags\": 33555489,",
		  "    \"kind\": 238,",
		  "    \"statements\": " + elseStatementArrayAst.toString() + "",
		  "}",
		"}");
		return conditionalStatementInAst;
	}
}
