import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ArticleComponent } from './front/article/article.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { UsersFictifService} from "./service/users-fictif.service";
import { ArticleFictifService} from "./service/article-fictif.service";
import { ParametreFictifService} from "./service/parametre-fictif.service";
import { StatsService } from "./service/stats.service"
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { ListeComponent } from './back/article/liste/liste.component';

import { MenuDashboardComponent } from './back/menu-dashboard/menu-dashboard.component';
import { AjouterComponent } from './back/article/ajouter/ajouter.component';
import { ListeUsersComponent } from './back/users/liste-users/liste-users.component';
import { AjouterUsersComponent } from './back/users/ajouter-users/ajouter-users.component';
import { ListeParametreComponent } from './back/parametre/liste-parametre/liste-parametre.component';
import { FooterComponent } from './commun/footer/footer.component';
import { QuiSommesNousComponent } from './front/qui-sommes-nous/qui-sommes-nous.component';
import { ContactezNousComponent } from './front/contactez-nous/contactez-nous.component';
import { AjouterParametreComponent } from './back/parametre/ajouter-parametre/ajouter-parametre.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticleComponent,
    NotFoundComponent,
    DashboardComponent,
    ListeComponent,
    MenuDashboardComponent,
    AjouterComponent,
    ListeUsersComponent,
    AjouterUsersComponent,
    ListeParametreComponent,
    FooterComponent,
    QuiSommesNousComponent,
    ContactezNousComponent,
    AjouterParametreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
    [
      { path : "" , component: AccueilComponent},
      { path : "article/:id" , component: ArticleComponent},
      { path : "admin/article/liste" , component: ListeComponent},
      { path : "admin/article/ajouter" , component: AjouterComponent},
      { path : "admin/users/liste-users" , component: ListeUsersComponent },
      { path : "admin/users/ajouter-users" , component: AjouterUsersComponent },
      { path : "admin/parametre/liste-parametre" , component: ListeParametreComponent },
      { path : "admin/parametre/ajouter-parametre" , component: AjouterParametreComponent },
      { path : "admin" , component: DashboardComponent},
      { path : "qui-sommes-nous" , component : QuiSommesNousComponent},
      { path : "contactez-nous" , component : ContactezNousComponent},
      { path : "**" , component: NotFoundComponent}
      
      // Tout le reste ** 
      // not found toujours à la fin
      //  balise va être remplacée par <app-accueil></app-accueil> si url est http://localhost:4200
    ]),
  HttpClientModule,
  
],
  providers: [ArticleFictifService,
  UsersFictifService,
  ParametreFictifService,
  StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }