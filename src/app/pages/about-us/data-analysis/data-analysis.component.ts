import { Component } from "@angular/core";

@Component({
  selector: "el-data-analysis",
  templateUrl: "./data-analysis.component.html",
  styles: [
    `
      h5 {
        margin: 5rem 0 2rem 0;
      }
      mat-icon {
        margin-right: -2px;
        position: relative;
        bottom: -3px;
      }
      .horizontal {
        color: #4a148c !important;
        background: #fff !important;
        height: 250px;
        overflow: hidden;
        margin-bottom: 20px;
      }
      h6 {
        margin-bottom: 1.2rem;
        color: rgba(69, 59, 78, 0.87);
      }
    `
  ]
})
export class DataAnalysisComponent {}
