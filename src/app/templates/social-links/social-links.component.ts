import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { MobileService } from "src/app/services/mobile.service";

@Component({
  selector: "el-social-links",
  templateUrl: "./social-links.component.html",
  styleUrls: ["./social-links.component.scss"]
})
export class SocialLinksComponent implements OnInit, OnDestroy {
  isMobile$: Observable<boolean> = this.mobService.isHandset$;
  isMobile: boolean;
  mobSubs: Subscription;
  constructor(private mobService: MobileService) {}
  ngOnInit(): void {
    this.mobSubs = this.isMobile$.subscribe(res => {
      this.isMobile = res;
    });
  }
  ngOnDestroy() {
    this.mobSubs.unsubscribe();
  }
}
