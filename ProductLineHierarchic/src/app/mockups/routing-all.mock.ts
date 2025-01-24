import { GameConfigurationComponent } from "../game-configuration/game-configuration.component";
import { RoutingModel } from "../models/routingModel";
// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"imageGallery":"true","puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}}, "[IMPORT=GalleryBottomSheetComponent]") var newA;
import { GalleryBottomSheetComponent } from "../puzzle-builder/pages/bottom-sheets/gallery-bottom-sheet/gallery-bottom-sheet.component";
import { InsertTemplateImageBottomSheetComponent } from "../puzzle-builder/pages/bottom-sheets/insert-template-image-bottom-sheet/insert-template-image-bottom-sheet.component";
import { PuzzleChooserBottomSheetComponent } from "../puzzle-builder/pages/bottom-sheets/puzzle-chooser-bottom-sheet/puzzle-chooser-bottom-sheet.component";
import { TemplatePreviewBottomSheetComponent } from "../puzzle-builder/pages/bottom-sheets/template-preview-bottom-sheet/template-preview-bottom-sheet.component";
// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "zoomValue":"true", }, "AND": { "OR":{ "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoom":"true" } }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } }, "[IMPORT=ZoomManagementBottomSheetComponent]") var newA;
import { ZoomManagementBottomSheetComponent } from "../puzzle-builder/pages/bottom-sheets/zoom-management-bottom-sheet/zoom-management-bottom-sheet.component";
// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"imageGallery":"true","puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}}, "[IMPORT=GalleryComponent]") var newA;
import { GalleryComponent } from "../puzzle-builder/pages/gallery/gallery.component";
import { InsertTemplateImageComponent } from "../puzzle-builder/pages/insert-template-image/insert-template-image.component";
import { PuzzleChooserComponent } from "../puzzle-builder/pages/puzzle-chooser/puzzle-chooser.component";
import { TemplatePreviewComponent } from "../puzzle-builder/pages/template-preview/template-preview.component";
// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "zoomValue":"true", }, "AND": { "OR":{ "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoom":"true" } }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } }, "[IMPORT=ZoomManagementComponent]") var newA;
import { ZoomManagementComponent } from "../puzzle-builder/pages/zoom-management/zoom-management.component";


let RoutingModelDataAll: RoutingModel[] = [
  {
    "name": "Load image",
    "path": "/puzzle/loadImage",
    "bottomSheetComponent": InsertTemplateImageBottomSheetComponent,
    "componentPathInModule": "loadImage",
    "componentRef": InsertTemplateImageComponent
  },
  {
    "name": "Play",
    "path": "/puzzle/selectPuzzles",
    "bottomSheetComponent": PuzzleChooserBottomSheetComponent,
    "componentPathInModule": "selectPuzzles",
    "componentRef": PuzzleChooserComponent
  },
  {
    "name": "Preview",
    "path": "/puzzle/preview",
    "bottomSheetComponent": TemplatePreviewBottomSheetComponent,
    "componentPathInModule": "preview",
    "componentRef": TemplatePreviewComponent
  },
  {
    "name": "Config",
    "path": "/puzzle/config",
    "bottomSheetComponent": null,
    "componentPathInModule": "config",
    "componentRef": GameConfigurationComponent
  }
];

// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "zoomValue":"true", }, "AND": { "OR":{ "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoom":"true" } }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } }, "[NOT=let zoomConfig = null;]")
let zoomConfig = {"name": "Zoom", "path": "/puzzle/zoom", "bottomSheetComponent": ZoomManagementBottomSheetComponent, "componentPathInModule": "zoom", "componentRef": ZoomManagementComponent};
if (zoomConfig !== null) RoutingModelDataAll.push(zoomConfig);

// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"imageGallery":"true","puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}}, "[NOT=let galleryConfig = null;]")
let galleryConfig = {"name": "Gallery","path": "/puzzle/gallery","bottomSheetComponent": GalleryBottomSheetComponent,"componentPathInModule": "gallery","componentRef": GalleryComponent};
if (galleryConfig != null)  RoutingModelDataAll.push(galleryConfig);

export default RoutingModelDataAll;
// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"imageGallery":"false","puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}}, "[NOTHING]") var newA;
//
