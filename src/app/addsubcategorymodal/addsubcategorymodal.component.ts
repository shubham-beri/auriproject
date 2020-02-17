import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


class user
{
  title : string;
  price : number;
}

@Component({
  selector: 'app-addsubcategorymodal',
  templateUrl: './addsubcategorymodal.component.html',
  styleUrls: ['./addsubcategorymodal.component.scss']
})

export class AddsubcategorymodalComponent implements OnInit {

  title : string = "";
  price : number ;
  obj : user;
  constructor(public dialog  : MatDialog  , private dialogRef: MatDialogRef<AddsubcategorymodalComponent>) { }

  ngOnInit() {
  }

  addsubcategory()
  {
    this.obj = new user();
    this.obj.title = this.title;
    this.obj.price = this.price;

    console.log(this.obj);
    this.dialogRef.close(this.obj);
  }

}
