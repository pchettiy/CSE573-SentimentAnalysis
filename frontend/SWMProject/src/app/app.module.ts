import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlackPantherComponent } from './black-panther/black-panther.component';
import { HomeComponent } from './home/home.component';
import { BlackAdamComponent } from './black-adam/black-adam.component';
import { GlassOnionComponent } from './glass-onion/glass-onion.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    BlackPantherComponent,
    HomeComponent,
    BlackAdamComponent,
    GlassOnionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
