package codeConstructsEvaluation.analysis;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Iterator;
import java.util.stream.Stream;

import org.json.simple.parser.ParseException;

import astFileProcessor.annotationManagment.astConstructs.NotFoundBlockElementToWrap;
import astFileProcessor.processors.DecoratorManipulationSettings;
import astFileProcessor.processors.cyclomaticComplexity.ExpressionsForCyclomaticComplexityManipulationSettings;
import codeConstructsEvaluation.ComplexityMeasurement;
import codeConstructsEvaluation.ComplexityRecordsCollector;
import codeConstructsEvaluation.transformation.ComplexityService;
import unsupportedDecoratorsManagement.NonExistingDecoratorTransformationType;
import unsupportedDecoratorsManagement.entities.IllegalImportNameSpecifiedException;


public class CyclomaticComplexityEvaluationProjectWalker {
	private CyclomaticComplexityComparator cyclomaticComplexityComparator;

	public CyclomaticComplexityEvaluationProjectWalker(CyclomaticComplexityMeasuresSettings cyclomaticComplexitySettings) {
		this.cyclomaticComplexityComparator = cyclomaticComplexitySettings.getCyclomaticComplexityComparator();
	}

	public void evaluateOnExistingProject(ComplexityRecordsCollector complexityRecordsCollector, 
			ComplexityService usedComplexityService, String pathToProjectTree, 
			ExpressionsForCyclomaticComplexityManipulationSettings decoratorsManipulationSettings1, 
			ExpressionsForCyclomaticComplexityManipulationSettings decoratorsManipulationSettings2) 
					throws NonExistingDecoratorTransformationType, IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap, ParseException {
		Stream<Path> s = null;
		ComplexityMeasurement complexityMeasurement;
		
		try {
			Path inputPath1 = Path.of(URI.create(pathToProjectTree));
			s = Files.walk(inputPath1);
			Iterator<Path> paths = s.iterator();
			while(paths.hasNext()) {
				Path actualFilePath = paths.next();
				if(!Files.isDirectory(actualFilePath) && actualFilePath.toString().endsWith(".ts")) {
					System.out.print("Processing: " + actualFilePath);
					complexityMeasurement = this.cyclomaticComplexityComparator.evaluateAndAssociateDecoratorComplexities(
							actualFilePath.toString(), usedComplexityService, decoratorsManipulationSettings1, decoratorsManipulationSettings2);
					complexityRecordsCollector.addMeasurement(complexityMeasurement);
					System.out.println("...done");
				} else {
					System.out.println("Skipping: " + actualFilePath);
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}finally {
			if(s != null) { s.close(); }
		}
	}
	
	public void evaluateOnExistingProject(ComplexityRecordsCollector complexityRecordsCollector, 
			ComplexityService usedComplexityService, String pathToProjectTree, 
			ExpressionsForCyclomaticComplexityManipulationSettings decoratorsManipulationSettings) 
					throws NonExistingDecoratorTransformationType, IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap, ParseException {
		Stream<Path> s = null;
		ComplexityMeasurement complexityMeasurement;
		
		try {
			Path inputPath1 = Path.of(URI.create(pathToProjectTree));
			s = Files.walk(inputPath1);
			Iterator<Path> paths = s.iterator();
			while(paths.hasNext()) {
				Path actualFilePath = paths.next();
				if(!Files.isDirectory(actualFilePath) && actualFilePath.toString().endsWith(".ts")) {
					System.out.print("Processing: " + actualFilePath);
					complexityMeasurement = this.cyclomaticComplexityComparator.evaluateAndAssociateDecoratorComplexities(
							actualFilePath.toString(), usedComplexityService, decoratorsManipulationSettings);
					complexityRecordsCollector.addMeasurement(complexityMeasurement);
					System.out.println("...done");
				} else {
					System.out.println("Skipping: " + actualFilePath);
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}finally {
			if(s != null) { s.close(); }
		}
	}
}
