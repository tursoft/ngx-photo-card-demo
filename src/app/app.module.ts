import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPhotoCardModule } from 'ngx-photo-card';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    NgxPhotoCardModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
