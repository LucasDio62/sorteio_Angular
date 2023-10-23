import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortComponent } from './pages/sort/SortComponent';
import { ResultadoComponent } from './pages/resultado/resultado.component';

const routes: Routes = [
  {path:'', component: SortComponent},
  {path:'resultado', component: ResultadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
