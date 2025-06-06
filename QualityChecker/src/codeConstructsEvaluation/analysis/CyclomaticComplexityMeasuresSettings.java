package codeConstructsEvaluation.analysis;

import codeConstructsEvaluation.transformation.ComplexityService;
import java.util.HashSet;
import java.util.Set;


public class CyclomaticComplexityMeasuresSettings {
	
	private CyclomaticComplexityComparator cyclomaticComplexityComparator;
	private Set<ComplexityService> complexityServices;
	private Set<String> enabledFileTypesToProcess;
	

	public CyclomaticComplexityMeasuresSettings(CyclomaticComplexityComparator cyclomaticComplexityComparator, 
			ComplexityService defaultComplexityService) {
		this.complexityServices = new HashSet<ComplexityService>();
		this.enabledFileTypesToProcess = new HashSet<String>();
		this.enabledFileTypesToProcess.add(".ts");
		this.complexityServices.add(defaultComplexityService);
		this.cyclomaticComplexityComparator = cyclomaticComplexityComparator;
	}
	
	public void addComplexityService(ComplexityService newComplexityService) {
		this.complexityServices.add(newComplexityService);
	}

	public boolean canBeProcessedType(String fileName) { return this.enabledFileTypesToProcess.contains(
			fileName.substring(fileName.lastIndexOf("."))); }
	

	public Set<ComplexityService> getComplexityServices() { return this.complexityServices; }
	
	public CyclomaticComplexityComparator getCyclomaticComplexityComparator() { return this.cyclomaticComplexityComparator; }
}
