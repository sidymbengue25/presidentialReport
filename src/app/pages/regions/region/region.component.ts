import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";
import { MapService } from "./../../../services/map.service";

@Component({
  selector: "el-region",
  templateUrl: "./region.component.html",
  styles: [],
})
export class RegionComponent implements OnInit, OnDestroy {
  region: any;
  departments: any[];
  subs: Subscription;
  data: any;
  constructor(private route: ActivatedRoute, private mapService: MapService) {}
  ngOnInit() {
    this.subs = this.route.paramMap.subscribe((params: ParamMap) => {
      let reg_id = +params.get("id_reg");
      this.region = this.mapService.getReg(reg_id);
      if (!this.region) {
        reg_id = 1;
        this.region = this.mapService.getReg(reg_id);
      }
      this.data = this.region.properties;
      this.departments = this.mapService.getDepsByReg(reg_id);
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
