import { LocationComponent } from "./../templates/location/location.component";
import { BreadcrumbComponent } from "./../templates/breadcrumb/breadcrumb.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UIModule } from "./ui.module";
import { InformationsComponent } from "../templates/informations/informations.component";
import { MapComponent } from "../templates/map/map.component";
import { StatsComponent } from "../templates/stats/stats.component";
import { PageComponent } from "../templates/page/page.component";
import { LoadingSpinnerComponent } from "../templates/loading-spinner/loading-spinner.component";
import { FlashNotificationComponent } from "./../templates/flash-notification/flash-notification.component";
import { FooterComponent } from "../templates/footer/footer.component";
import { SocialLinksComponent } from "../templates/social-links/social-links.component";
const sharedComponents = [
  InformationsComponent,
  MapComponent,
  StatsComponent,
  PageComponent,
  BreadcrumbComponent,
  LoadingSpinnerComponent,
  FlashNotificationComponent,
  FooterComponent,
  SocialLinksComponent,
  LocationComponent
];
@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule, UIModule, RouterModule],
  exports: [sharedComponents, UIModule]
})
export class SharedModule {}
