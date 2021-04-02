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
export class AffirmationService {

  private url="";
  private categoryUrl="";
  private todoListUrl="http://fivetwentyhztodo.com/lovetodo-app/todoApp/todoList";

  constructor(private http: Http, private db:AngularFireDatabase) { }
  

 /* 

  getCategoryList(){
    return this.http.get(this.categoryUrl);
  }

  getAffirmationsByCategory(){
    return this.http.get(this.url);
  }

  addAffirmation(post){
    return this.http.post(this.url,JSON.stringify(post));
  }

  editAffirmation(post){
    return this.http.patch(this.url+'/'+post.id,JSON.stringify(post));
  }

  deleteAffirmation(id){
    return this.http.delete(this.url+'/'+id);
  }*/

  getTodoList(){
    return this.http.get(this.todoListUrl);
    
  }
  ////////////////
  getCategoryList(){
    return this.db.list('/categories');
  }

  getAffirmationsByCategory(category):AngularFireList<any[]>{
    // return this.db.list('/categories');
    return  this.db.list('/affirmations', ref => ref.orderByChild('category').equalTo(category));
  }



  addAffirmation(resource){
       return this.db.list('/affirmations').push(resource);
  }

  editAffirmation(resource){
      return this.db.object('/affirmations/'+resource['key']).update(resource);
  }

  deleteAffirmation(id){
    console.log(" Service deleteAffirmation "+id);
    return this.db.object('/affirmations/'+id).remove();
  }


  
 
}
