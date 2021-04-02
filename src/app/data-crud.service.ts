import { Injectable, Query } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataCrudService {

  constructor(private http: Http, private db:AngularFireDatabase) { }

  // getCategoryList(){
  //   return this.db.list('/categories');
  // }

  //private types="/affirmations"; //comes as a parametrer form calling service 

  // statusIncomplete:boolean=false;
  // statusComplete:boolean=true;

  getTypesByCategory(types,category):AngularFireList<any[]>{
   // return  this.db.list(types, ref => ref.orderByChild('category').equalTo(category));
   return  this.db.list(types, ref => ref.orderByChild('category').equalTo(category));
  }

  // getTypesByCategoryStatusIncomplete(types,category):AngularFireList<any[]>{
  //   return  this.db.list(types, ref => ref.orderByChild('category').equalTo(category).
  //                                      ref.orderByChild('status').equalTo(this.statusIncomplete) );
  // }
 
  
  //Pass the types eg: '/focusAreas'
  getList(types): Observable<any[]>{
    return  this.db.list(types)
    .snapshotChanges()
    .pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
   }

  add(types,resource){
       return this.db.list(types).push(resource);
  }
  edit(types,resource){
      return this.db.object(types+"/"+resource['key']).update(resource);
  }
  delete(types,id){
    console.log(" Service delete  "+types+" "+id);
    return this.db.object(types+"/"+id).remove();
  }
}