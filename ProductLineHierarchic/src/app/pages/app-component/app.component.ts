import { Component } from '@angular/core';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';
// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({ "AND":{ "toOmitCompletely": "true", "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "zoomValue":"true", }, "AND": { "OR":{ "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoom":"true" } }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } }, "[IMPORT=TreeManagerService]") var newA;
import { TreeManagerService } from 'src/app/featureManagement/tree-manager.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'puzzleToPlay';
  constructor(
@DecoratorTypesService.skipLineParameter({ "AND":{ "toOmitCompletely": "true", "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "zoomValue":"true", }, "AND": { "OR":{ "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoom":"true" } }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } })
private treeManagerService: TreeManagerService
    ) { }
}

// @ts-ignore
@DecoratorTypesService.skipLineFile({ "AND":{ "toOmitCompletely": "false", "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "zoomValue":"true", }, "AND": { "OR":{ "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoom":"true" } }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } }, "[NOTHING]") var newA;
//

