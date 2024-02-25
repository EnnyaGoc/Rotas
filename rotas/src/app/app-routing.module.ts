import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  //full é quando quero a url exata, prefix é quando quero q contenha
  // ** qualquer coisa
  {path: '', component: TitleComponent, pathMatch:'full'},
  {path:'portifolio', component: CardComponent, children:[
    {path:':id', component: CardComponent, pathMatch:'prefix'},
    {path:':id/:token', component: CardComponent, pathMatch:'prefix'}
  ]},
  
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
