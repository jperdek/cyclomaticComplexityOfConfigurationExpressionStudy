import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as puzzleActions from './puzzles.actions';
import { Puzzle } from './puzzles';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';


export const puzzlesFeatureKey = 'puzzles';

export interface PuzzleToSelectState extends EntityState<Puzzle> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Puzzle> = createEntityAdapter<Puzzle>();

export const initialState: PuzzleToSelectState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(puzzleActions.loadPuzzles,
    (state, action) => adapter.setAll(action.puzzles, state)
  ),
  on(puzzleActions.addPuzzle,
    (state, action) => adapter.upsertOne(action.puzzle, state)
  ),
  on(puzzleActions.returnPuzzle,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(puzzleActions.returnGivenPuzzles,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(puzzleActions.returnPuzzles,
    (state, action) => adapter.removeAll(state)
  ),
  on(puzzleActions.addPuzzles,
    (state, action) => adapter.upsertMany(action.puzzles, state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// @ts-ignore
@DecoratorTypesService.skipLineFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}}, "[NOTHING]") var newA;
//
