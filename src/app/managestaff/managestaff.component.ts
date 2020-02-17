import { FetchStaffService } from './../shared/fetch-staff.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { auth, database } from 'firebase';
import { DialogOpenComponent } from 'app/dialog-open/dialog-open.component';
import { Observable } from 'rxjs/Observable';


interface staff {
  'authId': string,
  'creationDate': string,
  'email': string ,
  'name': string,
  'password': string,
  'staffHashCode': string ,
  'staffId': '',
  'staffType': number,
  'wardHashCode': string,
  'status': number
}


@Component({
  selector: 'app-managestaff',
  templateUrl: './managestaff.component.html',
  styleUrls: ['./managestaff.component.scss']
})
export class ManagestaffComponent implements OnInit {
  list1: staff[];
  fvalue: number;
  
  showTable = false;
  map:  Map<number, string> = new Map<number, string>();
  s: string;

  wardno: number;
  
  items = [];


  postcol: AngularFirestoreCollection<staff>;
  areas: Observable<staff[]>;

  constructor(private _fetchStaffService: FetchStaffService, public dialog: MatDialog , private afs: AngularFirestore){
    
    

  }
  ngOnInit() {
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
    console.log(this.items);

  }
  click() {


    console.log(this.map.get(this.wardno));
    this.postcol = this.afs.collection('Ward').doc(this.map.get(this.wardno)).collection('Staff')   // retrieving a collection
    this.areas = this.postcol.valueChanges();

   // console.log(this.areas);

  }



    onEdit(staffobj : staff , doccode : string) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        name: staffobj.name,
        password: staffobj.password,
        status : staffobj.status,
        staffType : staffobj.staffType
                    }

      const dialogRef = this.dialog.open(DialogOpenComponent , dialogConfig);
      // data b pass hogya modal ko even i dont need it
      // but can use to show the details filled prior

      

      dialogRef.afterClosed().subscribe(data =>
        {
          console.log(data.fname);
          this.afs.collection('Ward').doc(this.map.get(this.wardno)).collection('Staff').doc(doccode)
          .update({'status' : data.fstatus , 'name' : data.fname + " " + data.lname , 'staffType' : data.fstaffType,
          'password' : data.password });

        });

      
      
    
    }



}