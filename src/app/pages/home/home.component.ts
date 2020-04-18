import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Driver } from '../../model/driver';
import { Position } from '../../model/position';

@Component({
  selector: 'pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 constructor(){}

  ngOnInit() {
  }

}
