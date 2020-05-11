import { Component, OnInit } from '@angular/core';
import {ParametreFictifService} from "../../../service/parametre-fictif.service";

@Component({
  selector: 'app-liste-parametre',
  templateUrl: './liste-parametre.component.html',
  styleUrls: ['./liste-parametre.component.css']
})
export class ListeParametreComponent implements OnInit {
  parametres;

  constructor(private service : ParametreFictifService) { }

  ngOnInit(): void {
    this.service.getAllParametre()
    .subscribe( (response : Response) =>{
      this.parametres = response;
    })
  }

}
