import { MobileService } from "./../../services/mobile.service";
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy
} from "@angular/core";
import * as Plotly from "plotly.js/dist/plotly-basic.min";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "el-stats",
  templateUrl: "./stats.component.html",
  styles: []
})
export class StatsComponent implements OnInit, OnDestroy {
  @Input() chartData: any;
  @Input() layoutTitle: string;
  @ViewChild("chart") el: ElementRef;
  mobLayout: {
    title: any;
    height?: number;
    width?: number;
    showlegend?: boolean;
  };
  hdLayout: {
    title: any;
    height?: number;
    width?: number;
    showlegend?: boolean;
  };
  isMobile$: Observable<boolean> = this.mobService.isHandset$;
  isMobile: boolean;
  mobSubs: Subscription;
  constructor(private mobService: MobileService) {}
  ngOnInit(): void {
    this.initChart();
  }
  initChart() {
    const element = this.el.nativeElement;
    const style = {
      margin: { t: 0 }
    };
    this.mobSubs = this.isMobile$.subscribe(res => {
      this.isMobile = res;
      if (this.isMobile) {
        const title = this.layoutTitle.slice().split(" : ");
        this.mobLayout = {
          title: title[1] ? title[1] : title[0],
          height: 300,
          width: 350,
          showlegend: false
        };
        Plotly.newPlot(element, this.chartData, this.mobLayout);
      } else {
        this.hdLayout = {
          title: this.layoutTitle.slice(),
          height: 400,
          width: 550
        };
        Plotly.newPlot(element, this.chartData, this.hdLayout);
      }
    });
  }

  ngOnDestroy() {
    this.mobSubs.unsubscribe();
  }
}
