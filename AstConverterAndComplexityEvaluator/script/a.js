const serializeJSON = require("serialijse");
const ts = require('typescript');
const fs = require('fs');
const j = {"a": "text", "b": { "c": "c"}};
const a = serializeJSON.serialize(j);
console.log(a);
console.log(serializeJSON.deserialize(a));
const gg = JSON.stringify(j);
console.log(gg);
console.log(JSON.parse(gg));
console.log(ts.Node);
loadedFile = "function a {}";
console.log(ts.ScriptTarget.Latest);
const ast = ts.createSourceFile("x.ts", loadedFile, ts.ScriptTarget.Latest);
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });



function generateDocumentation(
	sourceFile,
  fileNames,
  options
) {
  // Build a program using the set of root file names in fileNames
  let program = ts.createProgram(fileNames, options);
  var output = [];
  ts.forEachChild(sourceFile, visit);

  // print out the doc
  fs.writeFileSync("classes.json", JSON.stringify(output, undefined, 4));

console.log(output);
  return;

  /** visit nodes finding exported classes */
  function visit(node) {
    // Only consider exported nodes
    //if (!isNodeExported(node)) {
    //  return;
    //}

   // if (ts.isClassDeclaration(node) && node.name) {
      // This is a top level class, get its symbol
      let symbol = checker.getSymbolAtLocation(node.name);
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



let program2 = ts.createProgram([], {});

checker = program2.getTypeChecker();
console.log(checker);
console.log(ts.NodeObject);
console.log(generateDocumentation(ast, [], {}));
//console.log(checker.symbolToNode(ts.SourceFile));
