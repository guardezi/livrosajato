import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Caf } from 'src/app/model/caf';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { Delivery } from 'src/app/model/delivery';
import { Driver } from 'src/app/model/driver';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cafs',
  templateUrl: './cafs.component.html',
  styleUrls: ['./cafs.component.scss']
})
export class CafsComponent implements OnInit {
constructor(){}
  
ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
