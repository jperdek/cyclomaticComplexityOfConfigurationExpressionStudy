import { createAction, props } from '@ngrx/store';
import { Puzzle } from './puzzles';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';

export const loadPuzzles = createAction(
  '[Puzzles] Load Puzzles',
  props<{ puzzles: Puzzle[]}>()
);

export const addPuzzle = createAction(
  '[Puzzle] Add Puzzles',
  props<{ puzzle: Puzzle }>()
);

export const returnPuzzle = createAction(
  '[Puzzles] Return Puzzles',
  props<{ id: string }>()
);

export const returnGivenPuzzles = createAction(
  '[Puzzles] ReturnMany Puzzles',
  props<{ ids: string[] }>()
);

export const returnPuzzles = createAction(
  '[Puzzles] ReturnAll Puzzles',
);

export const addPuzzles = createAction(
  '[Puzzles] AddMany Puzzles',
  props<{ puzzles: Puzzle[] }>()
);

@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
class DecoratorFileCopy {}

