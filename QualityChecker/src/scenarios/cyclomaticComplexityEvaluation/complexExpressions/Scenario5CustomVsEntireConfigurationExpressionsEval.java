package scenarios.cyclomaticComplexityEvaluation.complexExpressions;

import java.io.IOException;

import org.json.simple.parser.ParseException;

import SPLComplexityEvaluation.SPLDecoratorComplexityComparator;
import astFileProcessor.annotationManagment.astConstructs.NotFoundBlockElementToWrap;
import astFileProcessor.processors.cyclomaticComplexity.ExpressionsForCyclomaticComplexityManipulationSettings;
import codeConstructsEvaluation.transformation.ComplexityService;
import scenarios.Scenario;
import unsupportedDecoratorsManagement.NonExistingDecoratorTransformationType;
import unsupportedDecoratorsManagement.entities.IllegalImportNameSpecifiedException;



public class Scenario5CustomVsEntireConfigurationExpressionsEval {
	
	public Scenario5CustomVsEntireConfigurationExpressionsEval() {}
	
	public void launchScenario() throws NonExistingDecoratorTransformationType, IOException, IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap, ParseException {
		SPLDecoratorComplexityComparator splCyclomaticComplexityComparator = Scenario.getDefaultCyclomaticComplexityComparatorFullyFetaureTreeExpressions();
		ExpressionsForCyclomaticComplexityManipulationSettings customConfExpressionsAsJsonConf
			= TransformationFormsForCyclomaticComplexityFullTree.getConditionalFlowWithCustomConditions(true);
		ExpressionsForCyclomaticComplexityManipulationSettings entireConfExpressionsConf 
		= TransformationFormsForCyclomaticComplexityFullTree.getConditionalFlowWithEntireHierarchicExpression(true);
		splCyclomaticComplexityComparator.compareComplexityForScenario(customConfExpressionsAsJsonConf, entireConfExpressionsConf);
	}
	
	public void launchScenario(String pathToProjectTree, ComplexityService complexityService)
			   throws NonExistingDecoratorTransformationType, IOException, IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap, ParseException {
		SPLDecoratorComplexityComparator splCyclomaticComplexityComparator = Scenario.getDefaultCyclomaticComplexityComparator(pathToProjectTree, complexityService);
		ExpressionsForCyclomaticComplexityManipulationSettings customConfExpressionsAsJsonConf = TransformationFormsForCyclomaticComplexityFullTree.getConditionalFlowWithCustomConditions(true);
		ExpressionsForCyclomaticComplexityManipulationSettings entireConfExpressionsConf
			= TransformationFormsForCyclomaticComplexityFullTree.getConditionalFlowWithEntireHierarchicExpression(true);
		splCyclomaticComplexityComparator.compareComplexityForScenario(customConfExpressionsAsJsonConf, entireConfExpressionsConf);
	}

	public static void main(String args[]) throws NonExistingDecoratorTransformationType, IOException, IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap, ParseException {
		Scenario5CustomVsEntireConfigurationExpressionsEval scenarioConfigurationExpressionsEval = new Scenario5CustomVsEntireConfigurationExpressionsEval();
		scenarioConfigurationExpressionsEval.launchScenario();
	}
}