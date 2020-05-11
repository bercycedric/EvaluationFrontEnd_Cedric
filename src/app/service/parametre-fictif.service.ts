import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ParametreFictifService {
  url = "https://powerful-cliffs-78926.herokuapp.com/parametres";


  constructor(private http : HttpClient) { }

  getAllParametre()
  {
    return this.http.get(this.url);
  }
  getParametreById(id)
  {
    return this.http.get(this.url+"/"+id);
  }

 
}