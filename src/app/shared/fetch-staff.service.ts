import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

interface staff {
  'id': string;
  'authId': string,
  'creationDate': string,
  'email': string,
  'name': string,
  'password': string,
  'staffHashCode': string,
  'staffId': '',
  'staffType': number,
  'wardHashCode': string,
  'status': number
}

export interface ward {
  value: number,
  viewValue: string
}

@Injectable({
  providedIn: 'root'
})
export class FetchStaffService {
  list: staff[];
  wardDoc: string;
  showWards: ward[] = [];
  wardDict: Map<number, string> = new Map<number, string>();
  items = [];
  listreturn = [];

  getList(fvalue: string) {
    return new Promise((resolve, reject) => {
    this.list = [];
    this.afs.collection('Ward').doc(fvalue).collection('Staff').snapshotChanges()
      .subscribe(val => {
        this.list = val.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as unknown as staff;
        });
        resolve(this.list);
      });


    });
  }



  constructor(private afs: AngularFirestore) { }

  getWards() {
    return new Promise((resolve, reject) => {
      this.afs.collection('Ward').snapshotChanges()
      .subscribe(val => {
        this.items = [];
        val.forEach(a => {
          const item: any = a.payload.doc.data();
          item.id = a.payload.doc.id;
          this.items.push(item);
        });


        var a = '';
        var b = 0;
        this.showWards = [];

        for (const x of this.items) {
          a = x['wardHashCode'];
          b = x['wardNumber'];
          this.wardDict.set(b, a);
          this.showWards.push(
            {
              value: x['wardNumber'],
              viewValue: 'Ward - ' + x['wardNumber']
            });
        }
        this.listreturn.push(this.showWards);
        this.listreturn.push(this.wardDict);
        resolve(this.listreturn);
        // return this.listreturn;
      });

    });


  }

  getStaff() {

  }
}
