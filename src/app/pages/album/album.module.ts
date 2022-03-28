import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlbumRoutingModule } from "./album-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [AlbumRoutingModule.components],
  imports: [CommonModule, AlbumRoutingModule, SharedModule]
})
export class AlbumModule {}
