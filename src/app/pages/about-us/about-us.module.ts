import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutUsRoutingModule } from "./about-us-routing.module";
import { DataAnalysisComponent } from "./data-analysis/data-analysis.component";
import { MainFeaturesComponent } from "./main-features/main-features.component";
import { OpportunitiesComponent } from "./opportunities/opportunities.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    AboutUsRoutingModule.components,
    DataAnalysisComponent,
    MainFeaturesComponent,
    OpportunitiesComponent
  ],
  imports: [CommonModule, AboutUsRoutingModule, SharedModule]
})
export class AboutUsModule {}
