import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickMortyModule } from './rick-morty/rick-morty.module';
import { environment } from '../environments/environment';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { RickFeatureKey, RickReducer } from './+store/reducers';
import { RickEffects } from './+store/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RickMortyModule,
    StoreModule.forRoot({ router: routerReducer}), 
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([RickEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
