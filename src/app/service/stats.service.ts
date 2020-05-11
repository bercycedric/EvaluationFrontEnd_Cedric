import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  urlArt = "https://powerful-cliffs-78926.herokuapp.com/articles";
  urlUser = "https://powerful-cliffs-78926.herokuapp.com/utilisateurs" ;
  urlComment = "https://powerful-cliffs-78926.herokuapp.com/commentaires";
  urlParam = "https://powerful-cliffs-78926.herokuapp.com/parametres";

  constructor(private http: HttpClient) { }

  getAllArticles(){
    return this.http.get(this.urlArt);
  }
  getAllUser(){
    return this.http.get(this.urlUser);
  }
  getAllComments(){
    return this.http.get(this.urlComment);
  }
  getAllParam(){
    return this.http.get(this.urlParam);
  }

}
