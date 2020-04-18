import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { PagesComponent } from './pages.component'
import { PagesRoutingModule } from './pages-routing.modules';
import { HomeComponent } from './home/home.component';
import { CafsComponent } from './cafs/cafs.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MotoristaComponent } from './motorista/motorista.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CafsComponent,
    MotoristaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatSliderModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
