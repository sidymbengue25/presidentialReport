import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MAT_DATE_LOCALE, MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule, MatInputModule } from "@angular/material";

const angularMaterialModules = [
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatButtonModule,
  MatTabsModule,
  MatCardModule,
  MatTooltipModule,
  MatTableModule,
  MatListModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    angularMaterialModules
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "fr-FR" },
    MatNativeDateModule
  ],
  exports: [ReactiveFormsModule, FormsModule, angularMaterialModules]
})
export class UIModule {}
