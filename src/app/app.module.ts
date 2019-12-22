import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderModule } from './header/header.module';
import { SettingsModule } from './settings/settings.module';

import { AppComponent } from './app.component';
import { PokemonDetailsModule } from './pokemon-details/pokemon-details.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderModule,
    HomeModule,
    PokemonDetailsModule,
    DashboardModule,
    RouterModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
