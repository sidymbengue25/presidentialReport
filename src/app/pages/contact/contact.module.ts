import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactRoutingModule } from "./contact-routing.module.";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [ContactRoutingModule.components],
  imports: [CommonModule, ContactRoutingModule, SharedModule]
})
export class ContactModule {}
