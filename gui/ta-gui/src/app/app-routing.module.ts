// talvez esse arquivo seja inutil, ele está sendo importando no app module mas está comentado localStorage. Baseado fortemente no code de Adriano TA3.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }