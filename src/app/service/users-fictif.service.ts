import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UsersFictifService {
  url = "https://powerful-cliffs-78926.herokuapp.com/utilisateurs";


  constructor(private http : HttpClient) { }

  getAllUsers()
  {
    return this.http.get(this.url);
  }
  getUsersById(id)
  {
    return this.http.get(this.url+"/"+id);
  }
  deleteUsers(id){
    return this.http.delete(this.url+`/${id}`);
  }

 
}