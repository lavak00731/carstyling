import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomizeComponent } from './customize/customize.component';
import { CustomGuardGuard } from './customize/custom-guard.guard';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmGuard } from './confirm/confirm.guard';


const routes: Routes = [
  { path: 'confirm', component: ConfirmComponent, canActivate: [ConfirmGuard] },
  { path: 'customize/:id', component: CustomizeComponent, canActivate: [CustomGuardGuard]},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
