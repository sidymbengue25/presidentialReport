import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  AfterViewInit
} from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
@Component({
  selector: "el-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"]
})
export class BreadcrumbComponent implements OnInit, AfterViewInit, OnDestroy {
  actifUrl$: string[];
  actifUrlSubscription: Subscription;

  constructor(private router: Router) {
    this.actifUrlSubscription = this.router.events.subscribe(
      data => {
        try {
          this.actifUrl$ = data["url"].split("/");
        } catch (e) {}
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.actifUrlSubscription.unsubscribe();
  }
}
