const serializeJSON = require("serialijse");
const ts = require('typescript');
const fs = require('fs');

//https://github.com/microsoft/TypeScript/blob/main/src/services/types.ts#L159
//https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#customizing-module-resolution

function generateDocumentation(
	sourceFile,
  fileNames,
  options
) {
  // Build a program using the set of root file names in fileNames
  let program = ts.createProgram(fileNames, options);
  let checker = program.getTypeChecker();
  var output = [];
  ts.forEachChild(sourceFile, visit);

  // print out the doc
  fs.writeFileSync("classes.json", JSON.stringify(output, undefined, 4));

console.log(output);
  return output;

  /** visit nodes finding exported classes */
  function visit(node) {
    // Only consider exported nodes
    //if (!isNodeExported(node)) {
    //  return;
    //}
	console.log(node);
    if ( node.name) {
      // This is a top level class, get its symbol
	  let symbol = null;
	  try{
		symbol = checker.getSymbolAtLocation(node.name);
	  } catch(err) {
	  }
      if (symbol) {
        output.push(serializeClass(symbol));
      }
      // No need to walk any further, class expressions/inner declarations
      // cannot be exported
    //} else if (ts.isModuleDeclaration(node)) {
      // This is a namespace, visit its children
    //  ts.forEachChild(node, visit);
    //}
  }
  }

  /** Serialize a symbol into a json object */
  function serializeSymbol(symbol) {
    return {
      name: symbol.getName(),
      documentation: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
      type: checker.typeToString(
        checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration)
      )
    };
  }

  /** Serialize a class symbol information */
  function serializeClass(symbol) {
    let details = serializeSymbol(symbol);

    // Get the construct signatures
	console.log("GETTING CLASS");
    let constructorType = checker.getTypeOfSymbolAtLocation(
      symbol,
      symbol.valueDeclaration
    );
    details.constructors = constructorType
      .getConstructSignatures()
      .map(serializeSignature);
    return details;
  }

  /** Serialize a signature (call or construct) */
  function serializeSignature(signature) {
    return {
      parameters: signature.parameters.map(serializeSymbol),
      returnType: checker.typeToString(signature.getReturnType()),
      documentation: ts.displayPartsToString(signature.getDocumentationComment(checker))
    };
  }

  /** True if this is visible outside this file, false otherwise */
  function isNodeExported(node) {
    return (
      (ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) !== 0 ||
      (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
    );
  }
}


router.post("/observe", function (request, response) {
	const ast = ts.createSourceFile("x.ts", request.body, ts.ScriptTarget.Latest);
	const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed }); 
	const doc = generateDocumentation(ast, [], {});
	response.set("Content-Type", "application/json");
	console.log(doc);
	response.send(JSON.stringify(doc));
	response.status(200);
});