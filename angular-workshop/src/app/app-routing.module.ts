import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailedViewComponent } from './components/pokemon-detailed-view/pokemon-detailed-view.component';
import { PokemonWrapperComponent } from './components/pokemon-wrapper/pokemon-wrapper.component';

const routes: Routes = [
  {path: '', component: PokemonWrapperComponent},
  {path: 'pokemon/:id', component: PokemonDetailedViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
