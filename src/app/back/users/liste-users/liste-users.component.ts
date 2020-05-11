import { Component, OnInit } from '@angular/core';
import {UsersFictifService} from "../../../service/users-fictif.service";

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {
  users;

  constructor(private service : UsersFictifService) { }

  ngOnInit(): void {
    this.service.getAllUsers()
    .subscribe( (response : Response) =>{
      this.users = response;
    })
  }
    onDeleteUsers(users){
      this.service.deleteUsers(users._id).subscribe((response: Response) =>{
        console.log(response);
        let index = this.users.indexOf(users);
        this.users.splice(index, 1);
      });
  }

}
