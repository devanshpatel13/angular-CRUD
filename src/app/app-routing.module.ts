import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './MyComponents/create/create.component';
import { ListComponent } from './MyComponents/list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'create', component: CreateComponent },
  { path: 'list', component: ListComponent },
  { path: "**", component: PageNotFoundComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
