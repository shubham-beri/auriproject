import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Action } from 'rxjs/internal/scheduler/Action';

import { auth } from 'firebase';
import { Router } from "@angular/router";
import { WindowRef } from '@agm/core/utils/browser-globals';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddwarmodalComponent } from 'app/addwarmodal/addwarmodal.component';
import { EditareaComponent } from 'app/editarea/editarea.component';

//import { MzModalService } from 'ng2-materialize';

interface area
{
  areaName : string;
  wardHashCode : string;
  areaDescription : string;
}

@Component({
  selector: 'app-maps',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.css']
})

export class MapsComponent implements OnInit {



  constructor(  private modalService : NgbModal, private firebaseAuth: AngularFireAuth, private afs: AngularFirestore, public router: Router) { }

  // email : string;
  // password : string;
  wardno: number;
  //hash : string;

  items = [];
  map: Map<number, string> = new Map<number, string>();
  fields: number;
  data: Array<String> = new Array<String>();
  areaname: Array<String> = new Array<String>();
  description: Array<String> = new Array<String>();
  check: boolean = false;
  areahash: string;
  //areas : area[];
  obj : area;
  defaultward : number;

  postcol: AngularFirestoreCollection<area>;
  areas: Observable<area[]>;


  ngOnInit() {

    //this.email = "bbb@mail.com"
    //this.password = "abc12345";
    //this.areas.push("sfe");


    this.afs.collection('Ward').snapshotChanges().subscribe(val => {
      this.items = [];
      val.forEach(a => {
        const item: any = a.payload.doc.data();
        //item.id = item.wardNumber;
        //item.hash = item.wardHashCode;
        this.map.set(item.wardNumber, item.wardHashCode);
       // this.wardno = item.wardNumber;
        this.items.push(item.wardNumber);
      });
      //console.log(this.items);
    });
    console.log(this.areas);

    //this.postcol = this.afs.collection('Area', ref => ref.where('wardHashCode', '==', this.map.get(this.wardno)))
    //this.areas = this.postcol.valueChanges();

  }

  click()
  {
    this.postcol = this.afs.collection('Area', ref => ref.where('wardHashCode', '==', this.map.get(this.wardno)))
    this.areas = this.postcol.valueChanges();
  }


  openFormModal() {
    const modalRef = this.modalService.open(AddwarmodalComponent);   // it should be named actually add area 
    
    modalRef.result.then((result) => {
      console.log(result.areaname);  // recieving value here
      console.log(result.areadescription);

       this.areahash = this.afs.createId();
       this.afs.collection('Area').doc(this.areahash).set({'areaName' : result.areaname , 'areaDescription' : result.areadescription ,
       'wardHashCode' : this.map.get(this.wardno)  , 'areaHashCode' : this.areahash});
    }).catch((error) => {
      console.log(error);
    });
  }

  onEdit(dochashcode : string)
  {
    console.log(dochashcode);
    const modalRef = this.modalService.open(EditareaComponent );   // i was unable tp pass data to modal 

    //const modalRef = this.modalservice.open(EditareaComponent, {'dochash' : dochashcode});  research neeeded currently unable to pass data from modal 
    

    modalRef.result.then((result) => {
      console.log(result.areaname);  // recieving value here
      console.log(result.areadescription ,result.wardnumber);


       //this.areahash = this.afs.createId();
       this.afs.collection('Area').doc(dochashcode).set({'areaName' : result.areaname , 'areaDescription' : result.areadescription ,
       'wardHashCode' : this.map.get(result.wardnumber)  , 'areaHashCode' : dochashcode});
    }).catch((error) => {
      console.log(error);
    });


  }



  addareas() {
    // console.log(this.map.get(this.wardno));
    // if (this.fields > 0) {
    //   this.fields = this.fields;
    //   this.data = new Array<String>();
    //   for (let i = 0; i < this.fields; i++) {
    //     this.data.push("");

    //   }
    //   console.log(this.fields);
    //   window.alert('fields adeed');
    //   this.check = true;
    // } else {
    //   window.alert('no of areas  must be gretater than zero');
    // }

    // i need to show areas here
    
    console.log(this.map.get(this.wardno));

    // i need to open a form here


    

    // this.afs.collection('Area', ref => ref.where('wardHashCode', '==', this.map.get(this.wardno)))
    // .snapshotChanges().subscribe(val => {
    //   this.areas = [];
    //   val.forEach(a => {
    //     const item: any = a.payload.doc.data();
    //     this.obj = new area();
    //     this.obj.areaDescription = item.description;
    //     this.obj.wardHashCode = "";
    //     this.obj.name = item.name;
        

    //     console.log(item.name);
    //     this.areas.push(this.obj);
    //   });
    //   //console.log(this.items);
    // });
  
  }

  // login()
  // {
  //     this.firebaseAuth
  //     .auth
  //     .createUserWithEmailAndPassword(this.email, this.password)
  //     .then(value => {

  //       var adm = auth().currentUser.uid;   // this will have user uID

  //       var user = auth().currentUser.metadata;
  //       var abc = user.creationTime;
  //       var def = user.lastSignInTime; // this things are fetched

  //       console.log('Success!', abc); // to do here

  //     })
  //     .catch(err => {
  //       console.log('Something went wrong:',err.message);
  //     });



  // this.afs.collection("Ward" , ref => ref.where("wardNumber", '==', this.wardNo))
  // .get().toPromise()
  // .then( function (querySnapshot)
  // {
  //   querySnapshot.forEach(function (doc)
  //   {
  //     var docdata = doc.data();
  //     console.log(docdata);
  //     var hash2 = docdata.wardHashCode;
  //     console.log(hash2);

  //   });
  // });
  // this code is getting the data 






  //     async login() {

  //   // var result = await this.firebaseAuth.auth.signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
  //   //   // Handle Errors here.
  //   //   var errorCode = error.code;
  //   //   var errorMessage = error.message;
  //   //   window.alert(errorMessage);
  //   //   // ...
  //   // });

  //     this.firebaseAuth.auth.signInWithEmailAndPassword(this.email, this.password)
  //   .then(function(result) {
  //     // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
  //     window.alert('login succesful');
  //   }).catch(function(error) {
  //     // Handle error.
  //     window.alert(error.message);
  //   });

  // }

  // Submit() {

  //   for (let i = 0; i < this.fields; i++) {
  //     this.areahash = this.afs.createId();

  //     this.afs.collection('Ward').doc(this.map.get(this.wardno)).collection('Area').doc(this.areahash)
  //       .set({ 'areaName': this.areaname[i], 'areaDescription': this.description[i], 'areaHashCode': this.areahash });
  //     console.log('added');
  //   }
  //   //this.check = false;
  //   //window.alert('areas added');
  //   // window.location.reload();
  // }

}

