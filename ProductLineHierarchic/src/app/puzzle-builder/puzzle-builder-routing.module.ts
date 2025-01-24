import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule} from '@angular/router';
import RoutingModelDataAll from "../mockups/routing-all.mock";
import { DecoratorTypesService } from '../featureManagement/decoratorsVariationPointManagement/decorator-types.service';

const routes = RoutingModelDataAll.map((model: any) => model = {
  "path": model.componentPathInModule,
  "component": model.componentRef} as Route);
/*
const routes: Routes = RoutingModelMock.getRoutingModelData().map((model: any) => model = {
  "path": model.componentPathInModule,
  "component": model.componentRef} as Route);
console.log(routes);

const routeProvider = {
  provide: ROUTES,
  useFactory: () => {
      return [
        ...routes
      ];
  },
  multi: true
};
*/

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
  //providers: [
  //  routeProvider
  //]
})
@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
export class PuzzleBuilderRoutingModule { }
