import { ActionReducerMap } from '@ngrx/store';
import * as puzzleState from './puzzles/puzzles.reducer';
import { DecoratorTypesService } from '../featureManagement/decoratorsVariationPointManagement/decorator-types.service';

export interface PuzzleAppState {
    [puzzleState.puzzlesFeatureKey]: puzzleState.PuzzleToSelectState;
}

export const reducers: ActionReducerMap<PuzzleAppState> = {
    [puzzleState.puzzlesFeatureKey]: puzzleState.reducer,
};

@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
class DecoratorFileCopy {}
export const puzzleListForSelect = (state: PuzzleAppState): puzzleState.PuzzleToSelectState => state[puzzleState.puzzlesFeatureKey];
