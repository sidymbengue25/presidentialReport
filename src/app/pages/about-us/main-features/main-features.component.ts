import { Component } from "@angular/core";

@Component({
  selector: "el-main-features",
  templateUrl: "./main-features.component.html",
  styles: [
    `
      .sect {
        height: auto;
        margin-top: 4rem;
      }
      .side-text {
        padding-left: 3rem;
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
          url(assets/images/sig.jpg);
      }
    `
  ]
})
export class MainFeaturesComponent {}
