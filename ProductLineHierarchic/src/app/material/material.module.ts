import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule} from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule  } from '@angular/material/bottom-sheet';

import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { DecoratorTypesService } from '../featureManagement/decoratorsVariationPointManagement/decorator-types.service';


const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTabsModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSliderModule,
  MatSidenavModule,
  MatTableModule,
  CdkTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatChipsModule,
  MatNativeDateModule,
  MatStepperModule,
  MatSlideToggleModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatCarouselModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
export class MaterialModule { }
