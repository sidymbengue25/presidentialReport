import { Component } from "@angular/core";

@Component({
  selector: "el-opportunities",
  templateUrl: "./opportunities.component.html",
  styles: [
    `
      .opp {
        margin: 3.5rem 0 5rem 0;
        height: auto;
        overflow: hidden;
      }
      .side-text {
        padding-right: 3rem;
      }
      h5 {
        margin-bottom: 0 !important;
      }
      .img-container {
        background: linear-gradient(
            205deg,
            rgba(139, 130, 183, 0),
            rgba(92, 70, 125, 0.5)
          ),
<<<<<<< HEAD
          url(../../../../../../assets/images/IA.jpg);
=======
          url(assets/images/IA.jpg);
>>>>>>> 89cb6a382540a3c5ee519a2d32996a25380d4896
      }
    `
  ]
})
export class OpportunitiesComponent {}
