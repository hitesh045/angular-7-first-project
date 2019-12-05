import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: 'xyz', component: XyzComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
