import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '',redirectTo:'home',pathMatch:'full'},
  { path: 'home' ,component:HomePageComponent},
  { path: 'Gallery' ,component: GalleryComponent},
  // { path: "" ,component:},
  // { path: "" ,component:""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
