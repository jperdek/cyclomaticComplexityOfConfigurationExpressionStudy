import { Component } from '@angular/core';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';
import { ZoomManagementInterface } from 'src/app/models/zoomManagementInterface';
import { ZoomManagerService } from 'src/app/services/puzzleEvents/zoom-manager.service';
import { PuzzleManagerService } from 'src/app/services/puzzleGenerator/puzzle-manager.service';

@Component({
  selector: 'app-zoom-menu',
  templateUrl: './zoom-menu.component.html',
  styleUrls: ['./zoom-menu.component.scss']
})
@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"OR":{"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
export class ZoomMenuComponent implements ZoomManagementInterface{

  centerX = 25;
  centerY = 25;
  zoomValue = 1.0;
  zoomManagerService: ZoomManagerService;

  constructor(private puzzleManagerService: PuzzleManagerService) {
    this.zoomManagerService = puzzleManagerService.getZoomManagerService();
    this.zoomManagerService.initForComponent(this);
  }

  public applyZoomIn(): void {
    const puzzleBoard = this.puzzleManagerService.getPuzzleBoard();
    this.zoomManagerService.zoomToPoint(this.centerX, this.centerY, puzzleBoard, -125);
  }

  public applyZoomOut(): void {
    const puzzleBoard = this.puzzleManagerService.getPuzzleBoard();
    this.zoomManagerService.zoomToPoint(this.centerX, this.centerY, puzzleBoard, +125);
  }

  public applyZoomReset(): void {
    const puzzleBoard = this.puzzleManagerService.getPuzzleBoard();
    this.zoomManagerService.resetZoom(puzzleBoard);
  }

  public setCenterXAndY(x: number, y: number): void {
    this.centerX = x;
    this.centerY = y;
  }
}
