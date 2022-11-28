import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackAdamComponent } from './black-adam/black-adam.component';
import { BlackPantherComponent } from './black-panther/black-panther.component';
import { GlassOnionComponent } from './glass-onion/glass-onion.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'blackPanther', component:BlackPantherComponent },
  {path:'blackAdam', component:BlackAdamComponent},
  {path:'glassOnion', component:GlassOnionComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
