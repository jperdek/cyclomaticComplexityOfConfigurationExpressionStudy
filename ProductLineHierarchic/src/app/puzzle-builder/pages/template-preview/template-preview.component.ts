import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';
import { PuzzleManagerService } from 'src/app/services/puzzleGenerator/puzzle-manager.service';


@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.scss']
})
@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
export class TemplatePreviewComponent {

  constructor(private puzzleManagerService: PuzzleManagerService) { }

  public getTemplatePreviewImage(): SafeResourceUrl {
    const templatePreviewImage = this.puzzleManagerService.getTemplatePreviewImage();
    if (templatePreviewImage !== undefined) {
      return templatePreviewImage;
    }
    console.log('Error: no template preview image for puzzles!');
    return 'assets/test1.jpg';
  }
}
