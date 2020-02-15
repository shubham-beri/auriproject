import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection , AngularFirestoreDocument} from 'angularfire2/firestore';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-table-list',
  templateUrl: './manage-ward.component.html',
  styleUrls: ['./manage-ward.component.css']
})
export class ManageWardComponent implements OnInit {

  id : number;
  ward_id : string;
  description  : string;
  constructor(private afs : AngularFirestore,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
   
  addWard()
  {
    let a = 'Ward - ' + this.id + ' added.';
    
    this.ward_id = this.afs.createId();
    // tslint:disable-next-line: max-line-length
    this.afs.collection('Ward').doc(this.ward_id).set({'wardHashCode': this.ward_id, 'wardNumber' : this.id , 'wardDescription' : this.description});
    this._snackBar.open(a, 'Okay!', {
      duration: 2000,
    });
    
    

   
  }
  

}
