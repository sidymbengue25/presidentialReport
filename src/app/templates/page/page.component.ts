import { TitleService } from "./../../services/title.service";
import { Component, OnInit, Input } from "@angular/core";
import { MapService } from "./../../services/map.service";

@Component({
  selector: "el-page",
  templateUrl: "./page.component.html",
  styles: [
    `
      .regs-list {
        margin-top: 1.7rem;
      }
      @media only screen and (max-width: 600px) {
        .col {
          padding: 0 !important;
        }
      }
    `
  ]
})
export class PageComponent implements OnInit {
  @Input() addShowMore: boolean;
  @Input() headerText: string;
  @Input() data;
  @Input() isRegion: boolean;
  @Input() depsList: any[];
  @Input() isCountry = false;
  isLoading: boolean;
  regs: any[];
  dataEl2019: any[];
  layoutTitle: string;
  constructor(
    private mapService: MapService,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.regs = this.mapService.getRegsAllDescript();
    if (this.isRegion) {
      this.titleService.setTitle(
        `Open-Technology - Résultats Région de ${this.data.region}`
      );
    } else if (this.isCountry) {
      this.titleService.setTitle(`Open-Technology - Presidentielles 2019`);
    } else {
      this.titleService.setTitle(
        `Open-Technology - Résultats Département de ${this.data.department}`
      );
    }
    this.initPiePM();
  }
  initPiePM() {
    this.dataEl2019 = [
      {
        values: [
          this.data.Macky_SALL,
          this.data.Idrissa_SE,
          this.data.Ousmane_Sk,
          this.data.Elhadji_SA,
          this.data.Madicke_NI
        ],
        labels: [
          `Macky Sall (${this.data.Macky_SALL})`,
          `Idrissa Seck (${this.data.Idrissa_SE})`,
          `Ousmane Sonko (${this.data.Ousmane_Sk})`,
          `Issa Sall (${this.data.Elhadji_SA})`,
          `Madické Niang (${this.data.Madicke_NI})`
        ],
        marker: {
          colors: ["#c19f63", "#ee5125", "#d50000 ", "#1b5e20", "#ffeb3b"]
        },
        type: "pie"
      }
    ];

    this.layoutTitle = `Résultats scrutin présidentiel 2019`;
    if (this.data.department) {
      this.layoutTitle += ` : Département de ${this.data.department}`;
    } else if (!this.isCountry) {
      this.layoutTitle += ` : Région de ${this.data.region}`;
    }
  }
}
