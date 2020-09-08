import { Component, VERSION } from '@angular/core';
import { PhotoInfo, PhotoCardOptions } from 'ngx-photo-card';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  photos: PhotoInfo[] = [
    { title: '.NET', imgSrc: 'https://github.com/tursoft/tursoft-angular-components/raw/gh-pages/assets/netcore.png', imgWidth: '200px' },
    { title: 'HTML5', imgSrc: 'https://github.com/tursoft/tursoft-angular-components/raw/gh-pages/assets/html5.png', imgWidth: '200px' },
    { title: 'Javascript', imgSrc: 'https://github.com/tursoft/tursoft-angular-components/raw/gh-pages/assets/js.png', imgWidth: '200px' },
    { title: 'Angular', imgSrc: 'https://github.com/tursoft/tursoft-angular-components/raw/gh-pages/assets/angular.png', imgWidth: '200px' }
  ];

  options2: PhotoCardOptions =  {
    borderColor: 'black',
    borderRadius: '25px',
    showNumber: false
  };

  options3: PhotoCardOptions =  {
    borderColor: 'blue',
    borderRadius: '0px',
    showNumber: false
  };

  selectedPhotoIndex1 = 0;
  selectedPhotoIndex2 = 1;
  selectedPhotoIndex3 = 2;

  selectedPhoto1: PhotoInfo = null;
  selectedPhoto2: PhotoInfo = null;
  selectedPhoto3: PhotoInfo = null;


}
