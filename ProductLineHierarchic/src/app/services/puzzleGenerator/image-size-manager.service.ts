import { Injectable } from '@angular/core';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';
import { Point } from 'src/app/models/point';


@Injectable({
  providedIn: 'root'
})
@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
export class ImageSizeManagerService {

  constructor() { }

  public getSizeAccordingAspectRatio(width: number, height: number, aspectRatio: number): Point {
    if (width < height) {
      const obtainedWidth = width;
      const obtainedHeight = obtainedWidth / aspectRatio;
      if (obtainedHeight > height) {
        const obtainedNewHeight = height;
        const obtainedNewWidth = obtainedNewHeight * aspectRatio;
        return { x: obtainedNewWidth, y: obtainedNewHeight};
      }
      return { x: obtainedWidth, y: obtainedHeight};
    } else {
      const obtainedHeight = height;
      const obtainedWidth = obtainedHeight * aspectRatio;
      if (obtainedWidth > width) {
        const obtainedNewWidth = width;
        const obtainedNewHeight = obtainedNewWidth / aspectRatio;
        return { x: obtainedNewWidth, y: obtainedNewHeight};
      }
      return { x: obtainedWidth, y: obtainedHeight};
    }
  }

  public getLargestSide(width: number, height: number, aspectRatio: number): Point {
    if (width < height) {
      const obtainedWidth = width;
      const obtainedHeight = height / aspectRatio;
      return { x: obtainedWidth, y: obtainedHeight};
    } else {
      const obtainedHeight = height;
      const obtainedWidth = width * aspectRatio;
      return { x: obtainedWidth, y: obtainedHeight};
    }
  }
}
