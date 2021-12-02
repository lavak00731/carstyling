import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';
import { InMemoryDatService } from './model/in-memory-dat.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CustomizeComponent } from './customize/customize.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectionBasketService } from './services/selection-basket.service';
import { InputMaskModule } from '@ngneat/input-mask';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomizeComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDatService, { dataEncapsulation: false }
    ),
    NgbModule,
    ReactiveFormsModule,
    InputMaskModule
  ],
  providers: [SelectionBasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
