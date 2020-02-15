import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { auth } from 'firebase';



// tslint:disable-next-line: class-name
export interface ward {
  value: number,
  viewValue: string
}

// tslint:disable-next-line: class-name
export interface emp {
  value: number,
  viewValue: string
}


// tslint:disable-next-line: class-name
export interface empStatus {
  value: number,
  viewValue: string
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  wardDict:  Map<number, string> = new Map<number, string>();

  showStatus: empStatus[] = [
    {value: 0, viewValue: 'Active'},
    {value: 1, viewValue: 'Deactive'}
  ];
  showWards: ward[] = [];
  empType: emp[] = [
    {value: 0, viewValue: 'Ward Staff'},
    {value: 1, viewValue: 'Ward Admin'}
  ];
  fstaffType: number;
  fpassword: string;
  fauthId: string;
  fcreationDate: string;
  faddress: string;
  ffname: string;
  flname: string;
  fstaffHashcode: string;
  fphone: number;
  fwardId: string;
  fstatus: number;
  femail: string;
  fname: string;
  fvalue: number;
  items = [];


  constructor(private afs: AngularFirestore, private firebaseAuth: AngularFireAuth) {
    this.afs.collection('Ward').snapshotChanges().subscribe(val => {
      this.items = [];
      val.forEach(a => {
       const item: any = a.payload.doc.data();
       item.id = a.payload.doc.id;
       this.items.push(item); });


      var a = '';
      var b = 0;
    this.showWards = [];

    for (const x of this.items) {
      a = x['wardHashCode'];
      b = x['wardNumber'];

      this.wardDict.set(b, a);

      this.showWards.push(
        {value: x['wardNumber'],
      viewValue: 'Ward - ' + x['wardNumber']}
      );
    }
      }
      );

  }


  ngOnInit() {
  }



  addEmployee() {
    this.fwardId = this.wardDict.get(this.fvalue);
    this.fname = this.ffname + ' ' + this.flname;
    this.fstaffHashcode = this.afs.createId();

    console.log(this.fwardId);

this.afs
    .collection('Ward')
    .doc(this.fwardId)
    .collection('Staff')
    .doc(this.fstaffHashcode)
    .set(
    {
    'authId': this.fauthId,
    'creationDate': this.fcreationDate,
    'email': this.femail ,
    'name': this.fname,
    'password': this.fpassword ,
    'staffHashCode': this.fstaffHashcode ,
    'staffId': '',
    'staffType': this.fstaffType,
    'wardHashCode': this.fwardId,
    'status': this.fstatus
    })

    console.log('employee added');

  }
  addAuth()
  {

   this.firebaseAuth
   .auth
   .createUserWithEmailAndPassword(this.femail, this.fpassword)
   .then(value => {

     this.fauthId = auth().currentUser.uid;   // this will have user uID
     var user = auth().currentUser.metadata;
     this.fcreationDate = user.creationTime;


     console.log('added in auth '); // to do here
     this.addEmployee();
   })
   .catch(err => {
     console.log('Something went wrong:',err.message);
   });

 }
}
