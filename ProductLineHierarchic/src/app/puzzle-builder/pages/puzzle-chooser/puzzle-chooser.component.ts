import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';
import { PuzzleManagerService } from 'src/app/services/puzzleGenerator/puzzle-manager.service';
import { PuzzleAppState, puzzleListForSelect } from 'src/app/store';
import { Puzzle } from 'src/app/store/puzzles/puzzles';
import * as puzzleState from 'src/app/store/puzzles/puzzles.reducer';


@Component({
  selector: 'app-puzzle-chooser',
  templateUrl: './puzzle-chooser.component.html',
  styleUrls: ['./puzzle-chooser.component.scss']
})
@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
export class PuzzleChooserComponent {

  shuffled = true;

  constructor(
    private store: Store<PuzzleAppState>,
    private puzzleManager: PuzzleManagerService) { }

  public getPuzzles(): Observable<Puzzle[]> {
    return this.store.pipe(select(puzzleListForSelect), select(puzzleState.selectAll));
  }

  public addToBoard(puzzle: Puzzle): void {
    this.puzzleManager.addPuzzleToBoard(puzzle);
  }

  public getCSSRotateString(angle: number): string {
    return 'transform: rotate(' + angle.toString() + 'deg)';
  }
}
