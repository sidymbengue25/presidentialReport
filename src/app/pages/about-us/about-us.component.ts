import { TitleService } from "./../../services/title.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import Typed from "typed.js";
@Component({
  selector: "el-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"]
})
export class AboutUsComponent implements OnInit, OnDestroy {
  time: any;
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setTitle("Open-Technology - Abouts Us");
    const options = {
      strings: [
        "<h1 class='white-text' style='font-size: 2rem; margin:0 !important; padding-top: 40vh'>Open-Technology</h1>",
        "<h1 class='white-text'  style='font-size: 2rem; margin:0 !important; padding-top: 40vh'>Notre culture, notre force</h1>"
      ],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 800
    };
    this.time = setInterval(() => {
      // this.renderer.selectRootElement("#sm");
      const typed = new Typed("#sm", options);
    }, 7000);
  }
  ngOnDestroy() {
    clearInterval(this.time);
  }
}
