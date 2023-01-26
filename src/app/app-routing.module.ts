import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KapcsolatokComponent } from './kapcsolatok/kapcsolatok.component';
import { RolunkComponent } from './rolunk/rolunk.component';

const routes: Routes = [
  {path:"fooldal",component:FooldalComponent},
  {path:"kapcsolatok",component:KapcsolatokComponent},
  {path:"rolunk",component:RolunkComponent},
  {path:"",redirectTo:"/fooldal",pathMatch:"full"},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
