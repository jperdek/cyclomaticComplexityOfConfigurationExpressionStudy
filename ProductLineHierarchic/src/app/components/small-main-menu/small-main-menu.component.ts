import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { DecoratorTypesService } from 'src/app/featureManagement/decoratorsVariationPointManagement/decorator-types.service';
import { InsertTemplateImageBottomSheetComponent } from 'src/app/puzzle-builder/pages/bottom-sheets/insert-template-image-bottom-sheet/insert-template-image-bottom-sheet.component';
import { PuzzleChooserBottomSheetComponent } from 'src/app/puzzle-builder/pages/bottom-sheets/puzzle-chooser-bottom-sheet/puzzle-chooser-bottom-sheet.component';
import { TemplatePreviewBottomSheetComponent } from 'src/app/puzzle-builder/pages/bottom-sheets/template-preview-bottom-sheet/template-preview-bottom-sheet.component';


@Component({
  selector: 'app-small-main-menu',
  templateUrl: './small-main-menu.component.html',
  styleUrls: ['./small-main-menu.component.scss']
})
@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
export class SmallMainMenuComponent {

  constructor(
    private bottomSheet: MatBottomSheet,
    private router: Router) {}

  public loadingFromOtherModuleFix(): void {
    if (this.router.url.indexOf('/puzzle/') === -1) {
      this.router.navigateByUrl('/puzzle');
    }
  }

  public openInsertTemplateImageBottomSheet(): void {
    this.loadingFromOtherModuleFix();
    this.bottomSheet.open(InsertTemplateImageBottomSheetComponent);
  }

  public openPuzzleChooserBottomSheet(): void {
    this.loadingFromOtherModuleFix();
    this.bottomSheet.open(PuzzleChooserBottomSheetComponent);
  }

  public openTemplatePreviewBottomSheet(): void {
    this.loadingFromOtherModuleFix();
    this.bottomSheet.open(TemplatePreviewBottomSheetComponent);
  }
}
