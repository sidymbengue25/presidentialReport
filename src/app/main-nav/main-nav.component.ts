import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MapService } from "./../services/map.service";
import { MobileService } from "../services/mobile.service";

@Component({
  selector: "el-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.scss"]
})
export class MainNavComponent implements OnInit {
  deps: any[];
  regs: any[];
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private mapService: MapService,
    private mobileService: MobileService
  ) {}

  ngOnInit() {
    this.deps = this.mapService.getDepsAllDescript();
    this.regs = this.mapService.getRegsAllDescript();
    this.mobileService.isHandset$ = this.isHandset$;
  }
}
