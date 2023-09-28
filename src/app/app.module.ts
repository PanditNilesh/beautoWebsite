import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { StaticDataService } from './shared/services/static-data.service';
import { BreadcumDataService } from './shared/services/breadcum-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './shared/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { SubmitideaComponent } from './modules/submitidea/submitidea.component';
import { NgwWowModule } from 'ngx-wow';
import { BuildyourteamComponent } from './modules/buildyourteam/buildyourteam.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
// import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';


@NgModule({
  declarations: [
    AppComponent,
    SubmitideaComponent,
    BuildyourteamComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgwWowModule,
    DragDropModule,
    // NgcCookieConsentModule,
    // NgcCookieConsentConfig
  ],

  providers: [StaticDataService, BreadcumDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
