import { DecoratorTypesService } from '../featureManagement/decoratorsVariationPointManagement/decorator-types.service';
import { TemplateCategory, TemplateImage } from '../models/defaultTemplates';


@DecoratorTypesService.wholeBlockFile({"AND":{"mainPage":"true","mainNavigation":"true","AND":{"AND":{"OR":{"AND":{"OR":{"zoomCoordinates":"true","zoomValue":"true","reset":"true","toBack":"true","toFront":"true","boarderPicture":"true"},"zoom":"true"},"returnItem":"true","showPositionOnBoard":"true","rotate":"true","boarderPicture":"true"},"moveableOnPuzzleBoard":"true","multiplePuzzleSelect":"true","randomAngleRotation":"true","changePuzzleOrdering":"true","puzzleDrawer":"true","preview":"true"},"OR":{"imageLoader":"true","imageGallery":"true","puzzleNavigation":"true"},"puzzleNavigation":"true","puzzleAlgorithmType":"['JIGSAW', 'ANTI-JIGSAW', 'JIGSAW2']"}}})
class DecoratorFileCopy {}

export let GalleryMock: TemplateCategory[] = [
    {
        name: 'Wooden animals',
        images: [
            {
                title: 'Crocodile',
                quality: '903 x 508',
                src: 'assets/puzzleImages/woodenAnimals/crocodile.png'
            },
            {
                title: 'Swan',
                quality: '903 x 508',
                src: 'assets/puzzleImages/woodenAnimals/swan.png'
            },
            {
                title: 'Lion',
                quality: '903 x 508',
                src: 'assets/puzzleImages/woodenAnimals/lion.png'
            },
            {
                title: 'Mantis',
                quality: '903 x 508',
                src: 'assets/puzzleImages/woodenAnimals/mantis.png'
            },
            {
                title: 'Animal trio',
                quality: '903 x 508',
                src: 'assets/puzzleImages/woodenAnimals/animals3.png'
            }
        ]
    }, {
        name: 'Wooden vehicles',
        images: [
            {
                title: 'Plane',
                quality: '903 x 508',
                src: 'assets/puzzleImages/woodenVehicles/plane.png'
            },
            {
                title: 'Tank',
                quality: '903 x 508',
                src: 'assets/puzzleImages/woodenVehicles/tank.png'
            },
            {
                title: 'Train',
                quality: '903 x 508',
                src: 'assets/puzzleImages/woodenVehicles/train.png'
            },
            {
                title: 'Vehicle trio',
                quality: '903 x 508',
                src: 'assets/puzzleImages/woodenVehicles/vehicles.png'
            }
        ]
    },
    {
        name: 'Real animals',
        images: [{
            title: 'Hamster',
            quality: '905 x 509',
            src: 'assets/puzzleImages/realAnimals/hamster.bmp'
        }]
    },
    {
        name: 'Metal animals',
        images: [
            {
                title: 'Spider in shadow',
                quality: '903 x 508',
                src: 'assets/puzzleImages/metalAnimals/spider.bmp'
            },
            {
                title: 'Spider in light',
                quality: '903 x 508',
                src: 'assets/puzzleImages/metalAnimals/spider2.png'
            },
            {
                title: 'Dragonfly',
                quality: '903 x 508',
                src: 'assets/puzzleImages/metalAnimals/dragonfly.png'
            }
        ]
    }
];

export let ImagesToPuzzleMock: TemplateImage[] = [
    {
        title: 'Crocodile',
        quality: '903 x 508',
        src: 'assets/puzzleImages/woodenAnimals/crocodile.png'
    },
    {
        title: 'Swan',
        quality: '903 x 508',
        src: 'assets/puzzleImages/woodenAnimals/swan.png'
    },
    {
        title: 'Lion',
        quality: '903 x 508',
        src: 'assets/puzzleImages/woodenAnimals/lion.png'
    },
    {
        title: 'Mantis',
        quality: '903 x 508',
        src: 'assets/puzzleImages/woodenAnimals/mantis.png'
    },
    {
        title: 'Animal trio',
        quality: '903 x 508',
        src: 'assets/puzzleImages/woodenAnimals/animals3.png'
    }
];
