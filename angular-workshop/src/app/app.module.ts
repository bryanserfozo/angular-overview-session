import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonViewComponent } from './components/pokemon-view/pokemon-view.component';
import { PokemonSelectorComponent } from './components/pokemon-selector/pokemon-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonWrapperComponent } from './components/pokemon-wrapper/pokemon-wrapper.component';
import { PokemonDetailedViewComponent } from './components/pokemon-detailed-view/pokemon-detailed-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonViewComponent,
    PokemonSelectorComponent,
    PokemonWrapperComponent,
    PokemonDetailedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
