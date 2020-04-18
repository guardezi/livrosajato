import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Driver } from '../../model/driver';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Position } from '../../model/position';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.component.html',
  styleUrls: ['./motorista.component.scss']
})
export class MotoristaComponent implements OnInit {
  constructor(){}
  ngOnInit(){}

  
}