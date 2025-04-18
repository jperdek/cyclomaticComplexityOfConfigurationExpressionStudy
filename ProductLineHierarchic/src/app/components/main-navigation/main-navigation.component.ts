import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Route, Router, Routes } from '@angular/router';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';
import { RoutingModelMock } from 'src/app/mockups/routing.mock';
import { RoutingModel } from 'src/app/models/routingModel';


@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
export class MainNavigationComponent {

  private routingModelData: RoutingModel[];

  constructor(
    private bottomSheet: MatBottomSheet,
    private router: Router) { this.routingModelData = this.loadMenu(); }

  public loadMenu(): RoutingModel[] {
    const routingModelData = RoutingModelMock.getRoutingModelData();
    const candidates: Routes = [];
    routingModelData.forEach((model: any) => {
      model = {
      "path": model.componentPathInModule,
      "component": model.componentRef} as Route;
      const matched = this.router.config.filter((route: Route) => route.path === model.path);

      if (matched.length === 0) {
        candidates.push(model);
      }
    });
    for (const candidate of candidates) {
      this.router.config.unshift(candidate);
    }

    //this.router.resetConfig(this.router.config);
    return routingModelData;
  }

  public getMenu(): RoutingModel[] {
    return this.routingModelData
  }

  public toggleZoom($event: MatSlideToggleChange): void {
    if ($event.checked) {
      const zoomContents = document.getElementsByClassName('zoom-content');
      Array.from(zoomContents).forEach(zoomContentDiv => zoomContentDiv.classList.add('hide-zoom-content'));
    } else {
      const zoomContents = document.getElementsByClassName('zoom-content');
      Array.from(zoomContents).forEach(zoomContentDiv => zoomContentDiv.classList.remove('hide-zoom-content'));
    }
  }

  public loadingFromOtherModuleFix(): void {
    if (this.router.url.indexOf('/puzzle/') === -1) {
      this.router.navigateByUrl('/puzzle');
    }
  }

  public openBottomSheet(bottomSheetComponent: any): void {
    this.loadingFromOtherModuleFix();
    this.bottomSheet.open(bottomSheetComponent);
  }
}
