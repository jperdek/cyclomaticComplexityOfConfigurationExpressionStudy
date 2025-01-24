import { AfterViewInit, Component, Inject } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ZoomManagementInterface } from 'src/app/models/zoomManagementInterface';
import { ZoomManagerService } from 'src/app/services/puzzleEvents/zoom-manager.service';
import { PuzzleManagerService } from 'src/app/services/puzzleGenerator/puzzle-manager.service';

// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "zoomValue":"true", }, "AND": { "OR":{ "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoom":"true" } }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } }, "[IMPORT=ComponentRef]")
import { ComponentRef } from '@angular/core';
// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "zoomValue":"true", }, "AND": { "OR":{ "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoom":"true" } }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } }, "[IMPORT=ComponentFactoryService]")
import { ComponentFactoryService } from 'src/app/services/dynamicInstantiation/component-factory.service';
// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoomCoordinates":"true","zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}}, "[IMPORT=SetZoomPositionComponent]")
import { SetZoomPositionComponent } from './set-zoom-position/set-zoom-position.component';
// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoomValue": "true", "zoom":"true" }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } }, "[IMPORT=SetZoomComponent]")
import { SetZoomComponent } from './set-zoom/set-zoom.component';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';


@Component({
  selector: 'app-zoom-management',
  templateUrl: './zoom-management.component.html',
  styleUrls: ['./zoom-management.component.scss']
})
export class ZoomManagementComponent implements ZoomManagementInterface, AfterViewInit {

  centerX = 25;
  centerY = 25;
  zoomValue = 1.0;
  zoomManagerService: ZoomManagerService;

  constructor(private puzzleManagerService: PuzzleManagerService,
    @DecoratorTypesService.skipLineParameter({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "zoomValue":"true", }, "AND": { "OR":{ "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoom":"true" } }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } })
    private componentFactoryService: ComponentFactoryService) {
    this.zoomManagerService = puzzleManagerService.getZoomManagerService();
    this.zoomManagerService.initForComponent(this);
  }

  ngAfterViewInit(): void {
    this.getComponentElement(this);
  }

  public getComponentElement(self: ZoomManagementComponent): Element | null | undefined {
    const zoomHTML = document.getElementsByClassName("zoom-management-part")?.item(0);
    // @ts-ignore
    @DecoratorTypesService.skipLineVariableDeclaration({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoomCoordinates":"true","zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}}, "this.addZoomCoordinates(zoomHTML);") var newA;
//  this.addZoomCoordinates(zoomHTML);
    // @ts-ignore
    @DecoratorTypesService.skipLineVariableDeclaration({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoomValue": "true", "zoom":"true" }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } }, "this.addZoomValue(zoomHTML);") var newA;
//  this.addZoomValue(zoomHTML);
    return zoomHTML;
  }

  @DecoratorTypesService.wholeBlockMethod({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoomValue": "true", "zoom":"true" }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } })
  public addZoomValue(zoomHTML: Element | null): void {
    if (zoomHTML !== null) {
      const positionAfterHeading = function<T>(domLocation: HTMLElement, componentRef: ComponentRef<T>) {
        domLocation.insertBefore(componentRef.location.nativeElement, domLocation.children.item(1));
      }

      this.instantiateZoomValueComponentAndEvents(zoomHTML, this, positionAfterHeading);
    } else {
      console.log("Zoom coordinates instantiation failed. Zoom HTML is null.");
    }
  }

  @DecoratorTypesService.wholeBlockMethod({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoomValue": "true", "zoom":"true" }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } })
  public instantiateZoomValueComponentAndEvents(zoomHTML: any, zoomManagementComp: ZoomManagementComponent, positionAfterHeading: Function): void {
    const zoomValueRef = this.componentFactoryService.createComponent(
      SetZoomComponent, zoomHTML, undefined, positionAfterHeading);
    zoomValueRef.instance.zoomEmitter.subscribe((result: number) => zoomManagementComp.setZoomValue(result));
  }

  @DecoratorTypesService.wholeBlockMethod({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoomCoordinates":"true","zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
  public instantiateZoomCoordinatesComponentAndEvents(zoomHTML: any, zoomManagementComp: ZoomManagementComponent, positionAfterHeading: Function): void {
    const zoomCoordinatesRef = this.componentFactoryService.createComponent(
      SetZoomPositionComponent, zoomHTML, undefined, positionAfterHeading);

    zoomCoordinatesRef.instance.centerXEmitter.subscribe((result: number) => zoomManagementComp.setCenterX(result));
    zoomCoordinatesRef.instance.centerYEmitter.subscribe((result: number) => zoomManagementComp.setCenterY(result));
  }

  @DecoratorTypesService.wholeBlockMethod({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoomCoordinates":"true","zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
  public addZoomCoordinates(zoomHTML: Element | null): void {
    if (zoomHTML !== null) {
      const positionAfterHeading = function<T>(domLocation: HTMLElement, componentRef: ComponentRef<T>) {
        domLocation.insertBefore(componentRef.location.nativeElement, domLocation.children.item(1));
      }

      this.instantiateZoomCoordinatesComponentAndEvents(zoomHTML, this, positionAfterHeading);
    } else {
      console.log("Zoom coordinates instantiation failed. Zoom HTML is null.");
    }
  }

  public setCenterXAndY(x: number, y: number): void {
    this.centerX = x;
    this.centerY = y;
  }

  public setCenterX(x: number): void {
    this.centerX = x;
  }

  public setCenterY(y: number): void {
    this.centerY = y;
  }

  public setZoomValue(zoomValue: number): void {
    console.log(zoomValue);
    this.zoomValue = zoomValue;
  }

  public setZoom(): void {
    const puzzleBoard = this.puzzleManagerService.getPuzzleBoard();
    this.zoomManagerService.zoomToPointWithZoom(this.centerX, this.centerY, puzzleBoard, this.zoomValue);
  }

  public setZoomFromDefaultToPoint(): void {
    this.applyZoomReset();
    const puzzleBoard = this.puzzleManagerService.getPuzzleBoard();
    this.zoomManagerService.zoomToPointWithZoom(this.centerX, this.centerY, puzzleBoard, this.zoomValue);
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

  @DecoratorTypesService.wholeBlockMethod({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"OR":{"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
  public toggleZoom($event: MatSlideToggleChange): void {
    if ($event.checked) {
      const zoomContents = document.getElementsByClassName('zoom-content');
      Array.from(zoomContents).forEach(zoomContentDiv => zoomContentDiv.classList.add('hide-zoom-content'));
    } else {
      const zoomContents = document.getElementsByClassName('zoom-content');
      Array.from(zoomContents).forEach(zoomContentDiv => zoomContentDiv.classList.remove('hide-zoom-content'));
    }
  }
}

// @ts-ignore
@DecoratorTypesService.skipLineVariableDeclaration({ "AND":{ "mainPage":"true", "mainNavigation":"true", "AND":{ "AND":{ "OR":{ "AND":{ "OR":{ "zoomCoordinates":"true", "reset":"true", "toBack": "true", "toFront": "true", "boarderPicture":"true" }, "zoomValue": "true", "zoom":"true" }, "returnItem":"true", "showPositionOnBoard":"true", "rotate":"true", "boarderPicture":"true" }, "moveableOnPuzzleBoard":"true", "multiplePuzzleSelect":"true", "randomAngleRotation":"true", "changePuzzleOrdering":"true", "puzzleDrawer":"true", "preview":"true" }, "OR":{ "imageLoader":"true", "imageGallery":"true", "puzzleNavigation":"true" }, "puzzleNavigation":"true", "puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']" } } }, "[NOTHING]") var newA;
//
