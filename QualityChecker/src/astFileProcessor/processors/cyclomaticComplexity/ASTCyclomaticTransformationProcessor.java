package astFileProcessor.processors.cyclomaticComplexity;

import java.io.IOException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import astFileProcessor.annotationManagment.astConstructs.NotFoundBlockElementToWrap;
import astFileProcessor.processors.ASTTextExtractorTools;
import unsupportedDecoratorsManagement.NonExistingDecoratorTransformationType;
import unsupportedDecoratorsManagement.entities.IllegalImportNameSpecifiedException;


public class ASTCyclomaticTransformationProcessor {

	private ExpressionsForCyclomaticComplexityManipulationSettings expressionsForCyclomaticComplexityManipulationSettings;
	
	
	public ASTCyclomaticTransformationProcessor() {
	}
	
	public void transformVariabilityAnnotations(JSONObject astRoot, 
			ExpressionsForCyclomaticComplexityManipulationSettings expressionsForCyclomaticComplexityManipulationSettings) 
			throws NonExistingDecoratorTransformationType, IOException, InterruptedException, 
			       IllegalImportNameSpecifiedException, NotFoundBlockElementToWrap {
		this.expressionsForCyclomaticComplexityManipulationSettings = expressionsForCyclomaticComplexityManipulationSettings;
		this.transformVariabilityAnnotations(astRoot, astRoot);
		this.removeVariabilityAnnotations(astRoot, astRoot);
	}
	
	private void transformAccordingToFoundVariabilityAnnotation(JSONObject astElement, JSONObject astParent) {
		if (astElement.containsKey("modifiers")) {
			boolean shouldTransform = false;
			
			JSONObject decoratorElement;
			for (Object decoratorElementObject: (Object[]) astElement.get("modifiers")) {
				decoratorElement = (JSONObject) decoratorElementObject;
				String decoratorName = ASTTextExtractorTools.getTextFromAstIncludingNameAndExpressions(decoratorElement);
				if (this.expressionsForCyclomaticComplexityManipulationSettings.canBeProcessed(decoratorName, false, true)) {
					shouldTransform = true;
				}
			}
			
			if (shouldTransform) {
				
				
			}
		}
	}
	
	private void transformVariabilityAnnotations(JSONObject astElement, JSONObject astParent) {
		String key;
		if (astElement == null) { return; }
		this.transformAccordingToFoundVariabilityAnnotation(astElement, astParent);
		
		
		Object entryValue;
		JSONObject entryJSONObject;
		JSONArray contextArray;
		for(Object entryKey: astElement.keySet()) {
			key = (String) entryKey;
			entryValue = astElement.get(key);
			//if (key.equals("illegalDecorators")) {	continue; }
			if (entryValue instanceof JSONObject) {
				entryJSONObject = (JSONObject) entryValue;
				this.transformVariabilityAnnotations(entryJSONObject, astElement);
			} else if(entryValue instanceof JSONArray) {	
				contextArray = (JSONArray) entryValue;
				
				if (key.equals("modifiers")) { return; }
				for (int index = 0; index < contextArray.size(); index++) {
					entryJSONObject = (JSONObject) contextArray.get(index);
	
					this.transformVariabilityAnnotations(entryJSONObject, astElement);
				}
			}
		}
	}
	
	private void removeVariabilityAnnotation(JSONObject astElement) {
			
	}
	
	private void removeVariabilityAnnotations(JSONObject astElement, JSONObject astParent) {
		String key;
		if (astElement == null) { return; }
		this.removeVariabilityAnnotation(astElement); 
		
		Object entryValue;
		JSONObject entryJSONObject;
		JSONArray contextArray;
		for(Object entryKey: astElement.keySet()) {
			key = (String) entryKey;
			entryValue = astElement.get(key);
			//if (key.equals("illegalDecorators")) {	continue; }
			if (entryValue instanceof JSONObject) {
				entryJSONObject = (JSONObject) entryValue;
				this.transformVariabilityAnnotations(entryJSONObject, astElement);
			} else if(entryValue instanceof JSONArray) {	
				contextArray = (JSONArray) entryValue;
				
				for (int index = 0; index < contextArray.size(); index++) {
					entryJSONObject = (JSONObject) contextArray.get(index);
	
					this.transformVariabilityAnnotations(entryJSONObject, astElement);
				}
			}
		}
	}
}
