import { Injectable } from "@angular/core";
// import { regions, departments } from "../data/data";
import * as regions from "../data/regs_sen.json";
import * as departments from "../data/deps_sen.json";

@Injectable({
  providedIn: "root"
})
export class MapService {
  constructor() {}

  get regs() {
    return regions.features;
  }
  getReg(regId: number) {
    return regions.features.find(reg => reg.properties.id_reg === regId);
  }

  getDep(depId: number) {
    return departments.features.find(dep => dep.properties.id_dep === depId);
  }

  getDepsByReg(regId: number) {
    return departments.features.filter(dep => dep.properties.id_reg === regId);
  }

  getDepsAllDescript() {
    return departments.features.map(dep => dep.properties);
  }

  getRegsAllDescript() {
    return regions.features.map(reg => reg.properties);
  }
}
