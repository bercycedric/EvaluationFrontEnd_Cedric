import { Component, OnInit } from '@angular/core';
import { StatsService } from "../../service/stats.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articles;
  users;
  comment;
  parametres;

  constructor(private service : StatsService) { }

  ngOnInit(): void {
    this.service
    .getAllArticles()
    .subscribe((response: Response) =>{
      this.articles = response;
    }),
    this.service
    .getAllComments()
    .subscribe((response: Response) =>{
      this.comment = response;
    }),
    this.service
    .getAllUser()
    .subscribe((response: Response) =>{
      this.users = response;
    }),
    this.service
    .getAllParam()
    .subscribe((response: Response) =>{
      this.parametres = response;
    });

  }
  

}
