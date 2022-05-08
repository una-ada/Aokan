/**
 * App Router
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 * @since 2022.05.06
 */

/*----- Imports --------------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

/*----- Routes ---------------------------------------------------------------*/
const routes: Routes = [
  {path: '', component: IndexComponent}
];

/*----- Module ---------------------------------------------------------------*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/*----- Exports --------------------------------------------------------------*/
export class AppRoutingModule { }
