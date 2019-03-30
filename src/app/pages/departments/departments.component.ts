import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { MapService } from "src/app/services/map.service";

@Component({
  selector: "el-departments",
  templateUrl: "./departments.component.html",
  styles: []
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  departments: any[];
  subs: Subscription;
  data: any;
  constructor(private route: ActivatedRoute, private mapService: MapService) {}
  ngOnInit() {
    this.subs = this.route.paramMap.subscribe((params: ParamMap) => {
      const dep_id = +params.get("id_dep");
      let dep = this.mapService.getDep(dep_id);
      if (!dep) {
        dep = this.mapService.getDep(1);
      }
      this.data = dep.properties;
      this.departments = [dep];
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
