import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';
import { ImagesToPuzzleMock } from 'src/app/mockups/gallery.mock';
import { TemplateImage } from 'src/app/models/defaultTemplates';
import { PuzzleManagerService } from 'src/app/services/puzzleGenerator/puzzle-manager.service';


@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
export class InitialPageComponent implements OnInit {

  constructor(
    private puzzleManagerService: PuzzleManagerService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  public getSlides(): Observable<TemplateImage[]> {
    return of(ImagesToPuzzleMock);
  }

  public createPuzzleForImage(slide: TemplateImage): void {
    this.router.navigateByUrl('/puzzle/selectPuzzles');
    // its in another module which needs to be loaded first
    setTimeout(() => this.puzzleManagerService.startGame(slide.src), 700);
  }
}
