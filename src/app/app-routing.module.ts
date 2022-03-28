import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: "./pages/home/home.module#HomeModule"
  },

  {
    path: "regions/:id/departements/:id_dep",
    loadChildren: "./pages/departments/departments.module#DepartmentsModule"
  },
  {
    path: "regions/:id_reg",
    loadChildren: "./pages/regions/region.module#RegionModule"
  },
  {
    path: "contact-us",
    loadChildren: "./pages/contact/contact.module#ContactModule"
  },
  {
    path: "about-us",
    loadChildren: "./pages/about-us/about-us.module#AboutUsModule"
  },
  {
    path: "album",
    loadChildren: "./pages/album/album.module#AlbumModule"
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      // anchorScrolling: "enabled",
      scrollOffset: [0, 5]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
