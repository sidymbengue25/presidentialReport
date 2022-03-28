import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepartmentsRoutingModule } from "./departments-routing.module";
import { SharedModule } from "./../../shared/shared.module";

@NgModule({
  declarations: [DepartmentsRoutingModule.components],
  imports: [CommonModule, DepartmentsRoutingModule, SharedModule]
})
export class DepartmentsModule {}
