import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 

@Injectable()
export class GratitudeService {

  gList$: AngularFireList<any[]>;
  constructor(private db: AngularFireDatabase) {

   }

  getGratitudeListByDay(day) :AngularFireList<any[]> {
    return  this.db.list('/thanks', ref => ref.orderByChild('date').equalTo(day));
  }

  getAchievementList(): Observable<any[]>{
    return  this.db.list('/thanks', ref => ref.orderByChild('starred').equalTo(true))
    .snapshotChanges()
    .pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
   }

  getFavoriteList(): Observable<any[]>{
    return  this.db.list('/thanks', ref => ref.orderByChild('liked').equalTo(true))
    .snapshotChanges()
    .pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );;
  }

  addGratitude(resource){
       return this.db.list('/thanks').push(resource);
  }

  editGratitude(resource){
    // console.log(" GratitudeService editGratitude "+resource['key']);
    // console.log(" GratitudeService editGratitude liked "+resource.liked);
    return this.db.object('/thanks/'+resource['key']).update(resource);
    //return this.db.object('/thanks/'+resource.$key).update(resource.$value+ ' udpated');
  }

  deleteGratitude(id){
    console.log(" GratitudeService deleteGratitude "+id);
    return this.db.object('/thanks/'+id).remove();
  }
}
