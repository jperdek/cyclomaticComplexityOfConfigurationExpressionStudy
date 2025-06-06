package SPLComplexityEvaluation;
import codeConstructsEvaluation.ComplexityMeasurement;
import codeConstructsEvaluation.ComplexityRecordsCollector;
import codeConstructsEvaluation.analysis.ComplexityEvaluationProjectWalker;
import codeConstructsEvaluation.analysis.CyclomaticComplexityEvaluationProjectWalker;
import codeConstructsEvaluation.analysis.CyclomaticComplexityMeasuresSettings;
import codeConstructsEvaluation.analysis.DecoratorComplexityComparator;
import codeConstructsEvaluation.analysis.DecoratorComplexityMeasuresSettings;
import codeConstructsEvaluation.persistence.ComplexityDataAnalyzedFilePersistence;
import codeConstructsEvaluation.persistence.ComplexityDataCSVPersistence;
import codeConstructsEvaluation.transformation.ComplexityService;
import codeConstructsEvaluation.transformation.TyphonTypeScriptComplexityAnalysis;
import unsupportedDecoratorsManagement.NonExistingDecoratorTransformationType;
import unsupportedDecoratorsManagement.entities.IllegalImportNameSpecifiedException;
import astFileProcessor.annotationManagment.astConstructs.NotFoundBlockElementToWrap;
import astFileProcessor.processors.DecoratorManipulationSettings;
import astFileProcessor.processors.cyclomaticComplexity.ExpressionsForCyclomaticComplexityManipulationSettings;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.parser.ParseException;


public class SPLDecoratorComplexityComparator {

	private Map<String, ComplexityRecordsCollector> recordsCollectorFromService;
	private DecoratorComplexityMeasuresSettings complexitySettings = null;
	private CyclomaticComplexityMeasuresSettings cyclomaticComplexitySettings = null;
	private ComplexityEvaluationProjectWalker complexityProjectWalker;
	private CyclomaticComplexityEvaluationProjectWalker cyclomaticComplexityProjectWalker;
	private ComplexityDataCSVPersistence complexityDataCSVPersistence;
	private ComplexityDataAnalyzedFilePersistence complexityDataAnalyzedFilePersistence;
	private String pathToProjectTree;
	

	public SPLDecoratorComplexityComparator(String pathToProjectTree, DecoratorComplexityMeasuresSettings complexitySettings) {	
		this.pathToProjectTree = pathToProjectTree;
		this.complexitySettings = complexitySettings;
		this.recordsCollectorFromService = new HashMap<String, ComplexityRecordsCollector>();
		this.complexityProjectWalker = new ComplexityEvaluationProjectWalker(this.complexitySettings);
		this.complexityDataCSVPersistence = new ComplexityDataCSVPersistence("./");
		this.complexityDataAnalyzedFilePersistence = new ComplexityDataAnalyzedFilePersistence("./fileComparison");

		ComplexityRecordsCollector recordCollector;
		for(ComplexityService availableComplexityService: complexitySettings.getComplexityServices()) {
			recordCollector = new ComplexityRecordsCollector();
			this.recordsCollectorFromService.put(availableComplexityService.getName(), recordCollector);
		}	
	}
	
	public SPLDecoratorComplexityComparator(String pathToProjectTree, CyclomaticComplexityMeasuresSettings cyclomaticComplexitySettings) {	
		this.pathToProjectTree = pathToProjectTree;
		this.cyclomaticComplexitySettings = cyclomaticComplexitySettings;
		this.recordsCollectorFromService = new HashMap<String, ComplexityRecordsCollector>();
		this.cyclomaticComplexityProjectWalker = new CyclomaticComplexityEvaluationProjectWalker(this.cyclomaticComplexitySettings);
		this.complexityDataCSVPersistence = new ComplexityDataCSVPersistence("./");
		this.complexityDataAnalyzedFilePersistence = new ComplexityDataAnalyzedFilePersistence("./fileComparison");

		ComplexityRecordsCollector recordCollector;
		for(ComplexityService availableComplexityService: cyclomaticComplexitySettings.getComplexityServices()) {
			recordCollector = new ComplexityRecordsCollector();
			this.recordsCollectorFromService.put(availableComplexityService.getName(), recordCollector);
		}	
	}
	
	
	public void compareComplexityWithAndWithout() throws NonExistingDecoratorTransformationType, IOException, 
	                           IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap {
		ComplexityRecordsCollector recordCollector;
		DecoratorManipulationSettings decoratorsManipulationSettings1 = 
				DecoratorManipulationSettings.getSettingsTransformedIntoComprehensionBasis();
		DecoratorManipulationSettings decoratorsManipulationSettings2 = 
				DecoratorManipulationSettings.getSettingsWithoutCustomDecorators();
		
		String usedServiceName;
		for(ComplexityService chosenComplexityService: this.complexitySettings.getComplexityServices()) {
			usedServiceName = chosenComplexityService.getName();
			recordCollector = this.recordsCollectorFromService.get(usedServiceName);
			this.complexityProjectWalker.evaluateOnExistingProject(
					recordCollector, chosenComplexityService, this.pathToProjectTree, 
					decoratorsManipulationSettings1, decoratorsManipulationSettings2);
		}
		for(ComplexityService chosenComplexityService: this.complexitySettings.getComplexityServices()) {
			usedServiceName = chosenComplexityService.getName();
			recordCollector = this.recordsCollectorFromService.get(usedServiceName);
			this.serializeMeasurements(recordCollector, usedServiceName);
		}
	}
	
	public void evaluateComplexitiesOfAllForms(String formName, DecoratorManipulationSettings decoratorsManipulationSettings) 
			throws NonExistingDecoratorTransformationType, IOException, IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap {
		ComplexityRecordsCollector recordCollector;
		
		String usedServiceName;
		for(ComplexityService chosenComplexityService: this.complexitySettings.getComplexityServices()) {
			usedServiceName = chosenComplexityService.getName();
			recordCollector = this.recordsCollectorFromService.get(usedServiceName);
			this.complexityProjectWalker.evaluateOnExistingProject(recordCollector, chosenComplexityService, this.pathToProjectTree, 
					decoratorsManipulationSettings);
		}
		for(ComplexityService chosenComplexityService: this.complexitySettings.getComplexityServices()) {
			usedServiceName = chosenComplexityService.getName();
			recordCollector = this.recordsCollectorFromService.get(usedServiceName);
			this.serializeMeasurements(recordCollector, usedServiceName + "_" + formName);
		}
	}

	public void evaluateComplexitiesOfAllForms(String formName, 
			ExpressionsForCyclomaticComplexityManipulationSettings expressionsForCyclomaticComplexityManipulationSettings) 
			throws NonExistingDecoratorTransformationType, IOException, IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap, ParseException {
		ComplexityRecordsCollector recordCollector;
		
		String usedServiceName;
		for(ComplexityService chosenComplexityService: this.cyclomaticComplexitySettings.getComplexityServices()) {
			usedServiceName = chosenComplexityService.getName();
			recordCollector = this.recordsCollectorFromService.get(usedServiceName);
			this.cyclomaticComplexityProjectWalker.evaluateOnExistingProject(recordCollector, chosenComplexityService, this.pathToProjectTree, 
					expressionsForCyclomaticComplexityManipulationSettings);
		}
		for(ComplexityService chosenComplexityService: this.cyclomaticComplexitySettings.getComplexityServices()) {
			usedServiceName = chosenComplexityService.getName();
			recordCollector = this.recordsCollectorFromService.get(usedServiceName);
			this.serializeMeasurements(recordCollector, usedServiceName + "_" + formName);
		}
	}

	public void compareComplexityForScenario(
			DecoratorManipulationSettings decoratorsManipulationSettings1, 
			DecoratorManipulationSettings decoratorsManipulationSettings2) throws NonExistingDecoratorTransformationType, IOException, IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap {
		ComplexityRecordsCollector recordCollector;
		
		String usedServiceName;
		for(ComplexityService chosenComplexityService: this.complexitySettings.getComplexityServices()) {
			usedServiceName = chosenComplexityService.getName();
			recordCollector = this.recordsCollectorFromService.get(usedServiceName);
			this.complexityProjectWalker.evaluateOnExistingProject(
					recordCollector, chosenComplexityService, this.pathToProjectTree, 
					decoratorsManipulationSettings1, decoratorsManipulationSettings2);
		}

		for(ComplexityService chosenComplexityService: this.complexitySettings.getComplexityServices()) {
			usedServiceName = chosenComplexityService.getName();
			recordCollector = this.recordsCollectorFromService.get(usedServiceName);
			this.serializeMeasurements(recordCollector, usedServiceName);
		}
	}
	
	public void compareComplexityForScenario(
			ExpressionsForCyclomaticComplexityManipulationSettings expressionsForCyclomaticComplexityManipulationSettings1, 
			ExpressionsForCyclomaticComplexityManipulationSettings expressionsForCyclomaticComplexityManipulationSettings2) throws NonExistingDecoratorTransformationType, IOException, IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap, ParseException {
		ComplexityRecordsCollector recordCollector;
		
		String usedServiceName;
		for(ComplexityService chosenComplexityService: this.cyclomaticComplexitySettings.getComplexityServices()) {
			usedServiceName = chosenComplexityService.getName();
			recordCollector = this.recordsCollectorFromService.get(usedServiceName);
			this.cyclomaticComplexityProjectWalker.evaluateOnExistingProject(
					recordCollector, chosenComplexityService, this.pathToProjectTree, 
					expressionsForCyclomaticComplexityManipulationSettings1, 
					expressionsForCyclomaticComplexityManipulationSettings2);
		}

		for(ComplexityService chosenComplexityService: this.cyclomaticComplexitySettings.getComplexityServices()) {
			usedServiceName = chosenComplexityService.getName();
			recordCollector = this.recordsCollectorFromService.get(usedServiceName);
			this.serializeMeasurements(recordCollector, usedServiceName);
		}
	}
	
	
	private void serializeMeasurements(ComplexityRecordsCollector recordCollector, String usedServiceName) throws IOException {
		this.complexityDataCSVPersistence.setAdditionalNamePart(usedServiceName);
		this.complexityDataCSVPersistence.evaluateReusableQualityToCSV(recordCollector.getMeasurements(), "");
		
		int index = 1;
		for (ComplexityMeasurement complexityMeasurement: recordCollector.getMeasurements()) {
			this.complexityDataAnalyzedFilePersistence.setAdditionalNamePart(Integer.toString(index));
			this.complexityDataAnalyzedFilePersistence.saveFileContents(complexityMeasurement.getComplexityRecordsEntrySet());
			index++;
		}
	}

	public static void main(String args[]) throws NonExistingDecoratorTransformationType, IOException, 
	                           IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap {
		String pathToProjectTree = "file:///E:/aspects/canvasSPLforSPA/canvasSPLforSPA/src";
		ComplexityService defaultComplexityService = new TyphonTypeScriptComplexityAnalysis();
		DecoratorComplexityComparator decoratorComplexityComparator = new DecoratorComplexityComparator();
		DecoratorComplexityMeasuresSettings decoratorComplexitySettings = new DecoratorComplexityMeasuresSettings(
				decoratorComplexityComparator, defaultComplexityService);
		SPLDecoratorComplexityComparator splDecoratorComparator = 
				new SPLDecoratorComplexityComparator(pathToProjectTree, decoratorComplexitySettings);
		
		splDecoratorComparator.compareComplexityWithAndWithout();
	}
}
