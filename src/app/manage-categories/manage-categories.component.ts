import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-typography',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  check2: boolean = true;
  fields: number;
  categoryName: string = "";
  check: boolean = false;
  data: Array<String> = new Array<String>();
  categoryId: string;
  subcategoryId: string;
  value: Array<string> = new Array<string>();
  prices: Array<number> = new Array<number>();
  codes: Array<{}> = new Array<{}>();
  // mapsub : Map<any,any> ;
  // map : Map<any , any > = new Map<any,any>();


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {


  }

  addcategory()
  {
    if(this.categoryName.length > 1)
    {
    var st = this.afs.createId();
    var ob = {};
    this.afs.collection('Category').doc(st).set({'categoryHashCode' : st , 'categoryTitle' : this.categoryName ,'subCategories' : ob });
    }else
    {
      window.alert('category name cant be empty');
    }
  }
  addField() {

    if (this.categoryName.length > 0 && this.fields > 0) {
      this.fields = this.fields;
      this.data = new Array<String>();
      for (let i = 0; i < this.fields; i++) {
        this.data.push("");
        //this.prices.push(0);
        //this.value.push("");
      }
      console.log(this.fields);
      window.alert('fields adeed');
      this.check = true;
    } else {
      window.alert('category name cant be empty and no of subcategories must be gretater than zero');
    }
  }

  Submit() {



    this.categoryId = this.afs.createId();


    var categoryMap = {};
    var subCategoryMap = {};



    console.log('adding data');
    for (let i = 0; i < this.fields; i++) {
      this.codes[i] = {}
      // creating different object for every map
    }

    for (let i = 0; i < this.fields; i++) {
      //this.subcategoryId = this.afs.createId();
      //this.afs.collection('Category').doc(this.categoryId).collection('subCategory').doc(this.subcategoryId).set({'name' : this.value[i] , 'id' : this.subcategoryId  , 'price' : this.prices[i]}  );
      this.subcategoryId = this.categoryId + '-' + i;


      this.codes[i]['subCategoryHashCode'] = this.subcategoryId;
      this.codes[i]['title'] = this.value[i];
      this.codes[i]['price'] = this.prices[i];

      categoryMap[this.subcategoryId] = this.codes[i];

      // this.mapsub = new Map<any,any>();
      // this.mapsub.set('hashcoede', this.subcategoryId);
      // this.mapsub.set('subCategory', this.prices[i]);
      // this.mapsub.set('price', this.prices[i]);

      // this.map.set(this.subcategoryId, map);

      // this.afs.collection('Category').doc(this.categoryId).set({'subCategory' : this.map} , {merge : true});
      // tslint:disable-next-line: max-line-length
      this.afs.collection('Category').doc(this.categoryId).set({ 'categoryTitle': this.categoryName, 'categoryHashCode': this.categoryId, 'subCategories': categoryMap });

      

    }

    console.log('value added');
    //window.alert('categories added');
    //window.location.reload();


  }


}
