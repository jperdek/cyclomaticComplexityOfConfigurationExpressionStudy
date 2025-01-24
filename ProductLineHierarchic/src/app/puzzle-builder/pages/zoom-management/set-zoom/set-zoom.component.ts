import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';


@Component({
  selector: 'app-set-zoom',
  templateUrl: './set-zoom.component.html',
  styleUrls: ['./set-zoom.component.scss']
})
@DecoratorTypesService.wholeBlockFile({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoomValue": "true", "zoom":"true" }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } })
export class SetZoomComponent  {

  @Output()
  zoomEmitter: EventEmitter<number> = new EventEmitter();

  zoomValue: number = 1.0;

  constructor() {
  }

  setZoomFromDefaultToPoint(): void {
    this.zoomEmitter.emit(this.zoomValue);
  }
}
