import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import {  RouterModule, RouterOutlet,  } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    HeaderComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule 
  ],
  providers: [RouterOutlet],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
