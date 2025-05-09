package scenarios;

import java.io.IOException;

import SPLComplexityEvaluation.SPLDecoratorComplexityComparator;
import astFileProcessor.annotationManagment.astConstructs.NotFoundBlockElementToWrap;
import codeConstructsEvaluation.analysis.CyclomaticComplexityComparator;
import codeConstructsEvaluation.analysis.CyclomaticComplexityMeasuresSettings;
import codeConstructsEvaluation.analysis.DecoratorComplexityComparator;
import codeConstructsEvaluation.analysis.DecoratorComplexityMeasuresSettings;
import codeConstructsEvaluation.transformation.ComplexityService;
import codeConstructsEvaluation.transformation.TyphonTypeScriptComplexityAnalysis;
import unsupportedDecoratorsManagement.NonExistingDecoratorTransformationType;
import unsupportedDecoratorsManagement.entities.IllegalImportNameSpecifiedException;


public interface Scenario {

	public void launchScenario() throws NonExistingDecoratorTransformationType, IOException, IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap;
	public void launchScenario(String pathToProjectTree, 
			ComplexityService complexityService) throws NonExistingDecoratorTransformationType, IOException, 
	                                    IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap;
	
	public static SPLDecoratorComplexityComparator getDefaultComplexityComparator() {
		String pathToProjectTree = "file:///E:/aspects/cyclomaticComplexityAnalysisStudy/ProductLineBased/src";
		ComplexityService defaultComplexityService = new TyphonTypeScriptComplexityAnalysis();
		DecoratorComplexityComparator decoratorComplexityComparator = new DecoratorComplexityComparator();
		DecoratorComplexityMeasuresSettings decoratorComplexitySettings = new DecoratorComplexityMeasuresSettings(
				decoratorComplexityComparator, defaultComplexityService);
		SPLDecoratorComplexityComparator splDecoratorComparator = 
				new SPLDecoratorComplexityComparator(pathToProjectTree, decoratorComplexitySettings);
		return splDecoratorComparator;
	}
	
	public static SPLDecoratorComplexityComparator getDefaultComplexityComparator(
				String pathToProjectTree, ComplexityService complexityService) {
		DecoratorComplexityComparator decoratorComplexityComparator = new DecoratorComplexityComparator();
		DecoratorComplexityMeasuresSettings decoratorComplexitySettings = new DecoratorComplexityMeasuresSettings(
				decoratorComplexityComparator, complexityService);
		SPLDecoratorComplexityComparator splDecoratorComparator = 
				new SPLDecoratorComplexityComparator(pathToProjectTree, decoratorComplexitySettings);
		return splDecoratorComparator;
	}
	
	public static SPLDecoratorComplexityComparator getDefaultCyclomaticComplexityComparator() {
		String pathToProjectTree = "file:///E:/aspects/cyclomaticComplexityAnalysisStudy/ProductLineBased/src";
		ComplexityService defaultComplexityService = new TyphonTypeScriptComplexityAnalysis();
		CyclomaticComplexityComparator cyclomaticComplexityComparator = new CyclomaticComplexityComparator();
		CyclomaticComplexityMeasuresSettings cyclomaticComplexitySettings = new CyclomaticComplexityMeasuresSettings(
				cyclomaticComplexityComparator, defaultComplexityService);
		SPLDecoratorComplexityComparator splDecoratorComparator = 
				new SPLDecoratorComplexityComparator(pathToProjectTree, cyclomaticComplexitySettings);
		return splDecoratorComparator;
	}
	
	public static SPLDecoratorComplexityComparator getDefaultCyclomaticComplexityComparatorFullyFetaureTreeExpressions() {
		String pathToProjectTree = "file:///E:/aspects/cyclomaticComplexityAnalysisStudy/ProductLineHierarchic/src";
		ComplexityService defaultComplexityService = new TyphonTypeScriptComplexityAnalysis();
		CyclomaticComplexityComparator cyclomaticComplexityComparator = new CyclomaticComplexityComparator();
		CyclomaticComplexityMeasuresSettings cyclomaticComplexitySettings = new CyclomaticComplexityMeasuresSettings(
				cyclomaticComplexityComparator, defaultComplexityService);
		SPLDecoratorComplexityComparator splDecoratorComparator = 
				new SPLDecoratorComplexityComparator(pathToProjectTree, cyclomaticComplexitySettings);
		return splDecoratorComparator;
	}
	
	public static SPLDecoratorComplexityComparator getDefaultCyclomaticComplexityComparator(
				String pathToProjectTree, ComplexityService complexityService) {
		CyclomaticComplexityComparator cyclomaticComplexityComparator = new CyclomaticComplexityComparator();
		CyclomaticComplexityMeasuresSettings cyclomaticComplexitySettings = new CyclomaticComplexityMeasuresSettings(
				cyclomaticComplexityComparator, complexityService);
		SPLDecoratorComplexityComparator splDecoratorComparator = 
				new SPLDecoratorComplexityComparator(pathToProjectTree, cyclomaticComplexitySettings);
		return splDecoratorComparator;
	}
}
