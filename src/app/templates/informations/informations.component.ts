import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "el-informations",
  templateUrl: "./informations.component.html",
  styles: [
    `
      strong {
        font-weight: 600;
      }
    `
  ]
})
export class InformationsComponent implements OnInit {
  @Input() isRegion: boolean;
  @Input() data;
  @Input() depsList: any[];
  @Input() isCountry: boolean;
  taux_part: number;
  superficie: number;
  constructor() {}

  ngOnInit() {
    this.taux_part = Math.round(this.data.taux_part * 100) / 100;
    this.superficie = Math.round(this.data.superficie * 100) / 100;
  }
}
