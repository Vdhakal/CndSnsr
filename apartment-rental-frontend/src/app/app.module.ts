import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserService } from './services/user.service';
import { HousingService } from './services/housing.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  {path: '', component:PropertyListComponent},
  {path: 'c2c', component:PropertyListComponent},
  {path: 'stripper-detail/:id', component:PropertyDetailComponent},
  {path: 'add-strippers', component:AddPropertyComponent},
  {path: 'user/login', component:UserLoginComponent},
  {path: 'user/signup', component:UserSignupComponent},
  {path:'**', component:ErrorPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    ErrorPageComponent,
    UserLoginComponent,
    UserSignupComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HousingService,
    UserService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
