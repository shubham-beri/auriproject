import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddsubcategorymodalComponent } from 'app/addsubcategorymodal/addsubcategorymodal.component';
import { merge } from 'rxjs';

class Subcategory
{
  price : number;
  subCategoryHashCode  : string;
  title : string;
}
class Category
{
  categoryTitle : string;
  categoryHashCode : string;
  subCategories : Map <string, Map<string,Subcategory> > = new   Map<string, Map<string,Subcategory>>();   // as subcategories  can be treated as map of maps
  
}

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})


export class EditcategoryComponent implements OnInit {


  items : Category[];
  key2 : string[];
  string1 : string;

  addobj  : {};
  submap : {};

  subcategoryobjectarray : Array<Subcategory>;
  
  categoryobj : Category = new Category();
  subcategoryobj : Subcategory;

  map : Map<string,Category> = new Map<string,Category>();

  subcategories : Map <string, Map<string,Subcategory> > ; 


  map2 : Map<String,Subcategory>;

  categoryhashcode : string = "";
  categoryobject : Category;
  //subcategoryobj : Subcategory;

  keys : string[];

  constructor(private afs : AngularFirestore , public dialog: MatDialog) { }

  ngOnInit() {
    this.afs.collection('Category').snapshotChanges().subscribe(val => {
      this.items = [];
      
      
      val.forEach(a => {
        const item: any = a.payload.doc.data();
        this.items.push(item);      // pushing category ka object here
        this.map.set(item.categoryHashCode , item);    

      });
      console.log(this.items);
      
    });
    //console.log(this.items);

  }

  click()
  {
    console.log(this.categoryhashcode);
    
    this.categoryobj = this.map.get(this.categoryhashcode);
    this.subcategories= new   Map<string, Map<string,Subcategory>>();
    this.subcategories = this.categoryobj.subCategories;
   // console.log(this.subcategories);   // nver use map[] to get it will give undefinded
    //console.log(obj);

    
    //this.subcategories = this.categoryobj.subCategories;
    this.keys = Object.keys(this.subcategories)       // keys store all subcategories id u can say

    //console.log(this.keys);
    
    this.subcategoryobjectarray = new Array<Subcategory>();
    this.addobj = {};

    for(let i = 0 ; i < this.keys.length ; i++)
    {
      this.map2 = new Map<string,Subcategory>();
      
      this.map2 = this.subcategories[this.keys[i]];

      console.log(this.map2);
      
        this.subcategoryobj = new Subcategory();
        this.subcategoryobj.price = this.map2['price'];
        this.subcategoryobj.title = this.map2['title'];
        this.subcategoryobj.subCategoryHashCode = this.map2['subCategoryHashCode'];
        

        this.subcategoryobjectarray.push(this.subcategoryobj);

        this.submap = {};
        this.submap['price'] = this.map2['price'];
        this.submap['title'] = this.map2['title'];
        this.submap['subCategoryHashCode'] =  this.map2['subCategoryHashCode'];

        this.string1 = this.subcategoryobj.subCategoryHashCode;

        this.addobj[this.string1] = this.submap;
        
      
       
      
    }

    
  }

  addsubcategory()
  {
    if(this.categoryhashcode.length > 1)
    {
    const dialogConfig = new MatDialogConfig();

      dialogConfig.data = {
        categoryHashCode: this.categoryhashcode,
        lastnumber :  this.keys.length}  // passing data to the component
    
    const dialogRef = this.dialog.open(AddsubcategorymodalComponent , dialogConfig);

    dialogRef.afterClosed().subscribe(data =>
      {
        console.log(data.title);
        console.log(data.price);
        //this. addobj  = {};  // i neeed to add data of previos subcategories in add obj i guees before adding -done above
        var submap = {};

        
        submap['title'] = data.title;
        submap['price'] = data.price;
        submap['subCategoryHashCode'] = this.categoryhashcode+"-"+this.keys.length;

        this.string1 =  this.categoryhashcode+"-"+this.keys.length;

        this.addobj[this.string1] = submap;

        console.log(this.addobj);

        this.afs.collection('Category').doc(this.categoryhashcode).update( {'subCategories' : this.addobj }  );   // its editing the whole map i need addition in one map

      });
      }
      else
      {
        window.alert('select category first before adding subcategory');
      }

      
  }
  

}
