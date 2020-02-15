import { Component, OnInit, Inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
export interface empStatus {
  value: number,
  viewValue: string
}
export interface emp {
  value: number,
  viewValue: string
}

class user
{
  fname : string;
  password : string;
  fstatus : number;
  lname : string;
  phone : number;
  faddress : string;
  fstaffType : number; 
}


@Component({
  selector: 'app-dialog-open',
  templateUrl: './dialog-open.component.html',
  styleUrls: ['./dialog-open.component.scss']
})
export class DialogOpenComponent implements OnInit {

  constructor(public dialog  : MatDialog , private dialogRef: MatDialogRef<DialogOpenComponent>,
    @Inject(MAT_DIALOG_DATA) data)   //recieving data here
    { 
      this.password = data.password,
      this.fstaffType = data.staffType,   // only this giving error right now
      this.fstatus = data.status,
      this.fname = data.name,
      this.lname = "";

      console.log(data.staffType);
      console.log(data.status);

    }

    fname : string;
    password : string;
    fstatus : number;
    lname : string;
    //phone : number;
    faddress : string;
    fstaffType : number;

    obj : user;

    

  showStatus: empStatus[] = [
    {value: 0, viewValue: 'Active'},
    {value: 1, viewValue: 'Deactive'}
  ];
  empType: emp[] = [
    {value: 0, viewValue: 'Ward Staff'},
    {value: 1, viewValue: 'Ward Admin'}
  ];

  ngOnInit() {
  }
  

  updatestaff()
  {
    //console.log(this.phone);
    this.obj = new user();

    this.obj.fname = this.fname;
    this.obj.lname = this.lname;
    this.obj.fstaffType = this.fstaffType;
    this.obj.password = this.password;
    //this.obj.phone = this.phone;   // not in bean
    this.obj.fstatus = this.fstatus;
    this.obj.faddress = this.faddress;


    
    this.dialogRef.close(this.obj); // passing data from the modal to the component here
  }
  

}
