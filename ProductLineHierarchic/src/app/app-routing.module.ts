import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './puzzle-builder/pages/initial-page/initial-page.component';
import { PuzzleBuilderComponent } from './puzzle-builder/pages/puzzle-builder-component/puzzle-builder.component';
import { DecoratorTypesService } from './featureManagement/decoratorsVariationPointManagement/decorator-types.service';

const routes: Routes = [
  {
    path: '',
    component: InitialPageComponent,
    loadChildren: () => import('./puzzle-builder/puzzle-builder.module').then(m => m.PuzzleBuilderModule)
  },
  {
    path: 'puzzle',
    component: PuzzleBuilderComponent,
    loadChildren: () => import('./puzzle-builder/puzzle-builder.module').then(m => m.PuzzleBuilderModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
export class AppRoutingModule { }
