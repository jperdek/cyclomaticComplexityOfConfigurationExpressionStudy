import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DecoratorTypesService } from '../featureManagement/decoratorsVariationPointManagement/decorator-types.service';

@Directive({
  selector: '[appDragAndDrop]'
})
@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
export class DragAndDropDirective {

  constructor(private router: Router) {}

  apart = true;
  @HostBinding('class.fileover') fileOver = false;
  @Output() fileDropped = new EventEmitter<FileList>();

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent): void {
    this.imageFileUnder();
    console.log('under');
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent): void {
    this.imageFileApart();
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent): void {
    this.imageFileApart();

    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer !== null) {
      const files = event.dataTransfer.files;

      if (files.length > 0) {
        this.fileDropped.emit(files);
        this.router.navigate(['/puzzle/selectPuzzles']);
      }
    } else {
      console.log('Error: null transfer!');
    }
  }

  private imageFileUnder(): void {
    if (this.apart) {
      const elements = document.getElementsByClassName('drop-puzzle-block');
      Array.from(elements).forEach(element => {
        element.classList.add('image-dragged');
      });
      this.apart = false;
    }
  }

  private imageFileApart(): void {
    this.apart = true;
    const elements = document.getElementsByClassName('drop-puzzle-block');
    Array.from(elements).forEach(element => element.classList.remove('image-dragged'));
  }

}
