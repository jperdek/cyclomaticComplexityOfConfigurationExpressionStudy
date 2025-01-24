import { DecoratorTypesService } from "../featureManagement/decoratorsVariationPointManagement/decorator-types.service";

export interface AlgorithmMap {
  name: string;
  instance: any;
}

@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
class DecoratorFileCopy {}

export interface PuzzleAlgorithm {
  divideToPuzzle(
    sourceCanvas: HTMLCanvasElement,
    targetCanvas: fabric.Canvas,
    photoCanvasWidth: number,
    photoCanvasHeight: number,
    boardCanvasWidth: number,
    boardCanvasHeight: number,
    radius: number,
    randomAngle: boolean): void
}
