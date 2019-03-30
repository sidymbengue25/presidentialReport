import { MapService } from "./../../services/map.service";
import { AfterViewInit, Renderer2 } from "@angular/core";
import { MapGenerator } from "./../../shared/libs/map.generator";
import { Component, Input } from "@angular/core";

@Component({
  selector: "el-map",
  templateUrl: "./map.component.html",
  styles: [
    `
      #map {
        height: 85vh;
        border: 1px groove;
        width: 100%;
        z-index: 30;
        overflow: hidden;
      }
    `
  ]
})
export class MapComponent implements AfterViewInit {
  private map: any;
  mapLib: MapGenerator;
  centerView: number[];
  depsLayer: any;
  regsLayer: any;
  searchCtrl: any;
  customOptions = {
    bottom: "20px",
    className: "myCustomPopupPlacement"
  };
  @Input() addShowMore: boolean;
  @Input() addRegLayer: boolean;
  @Input() departs: any;
  regions: any[] = this.mapService.regs;
  baseMaps: any;
  autoClosePopup = true;
  constructor(private mapService: MapService, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    this.mapLib = new MapGenerator();
    this.mapLib.init(this.renderer.selectRootElement("#map"), this.centerView);
    this.map = this.mapLib.createMap();

    this.searchCtrl = this.mapLib.addFuseSearch(this.map);
    this.mapLib.changeDefaultIconPath("assets/images/");
    this.addBasemaps();
    this.mapLib.addGeolocation();
    this.addLegend();
    if (this.departs) {
      this.createDepsLayer(this.departs);
    }
    if (this.addRegLayer) {
      this.createRegsLayer(this.regions);
    }
    this.addControl(this.map, this.baseMaps);
  }

  addBasemaps() {
    this.mapLib.addAttribution(
      "<a href='https://www.youtube.com/channel/UCGtv2H-JS6ZuzJS5jXqTKmQ?view_as=subscriber' target='_blank'>@sidymbengue</a>"
    );
    const googleStreets = this.mapLib.createABasmapeLayer(
      "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      true
    );
    const googleHybrid = this.mapLib.createABasmapeLayer(
      "https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
      false
    );
    const OpenStreetMap = this.mapLib.createOSMBasemap();
    this.baseMaps = {
      // tslint:disable-next-line:max-line-length
      "<div class='layers-control-img'><img src='../../../assets/images/basemaps/googleStreetimage.png'></div>Google Streets": googleStreets,
      // tslint:disable-next-line:max-line-length
      "<div class='layers-control-img'><img src='../../../assets/images/basemaps/googleHybrid.png'></div> Google Hybrid": googleHybrid,
      "<div class='layers-control-img'><img src='../../../assets/images/basemaps/osm.png'></div> OpenStreetMap": OpenStreetMap
    };
    // this.mapLib.addBasemapControlLayer(this.baseMaps);
  }

  createRegsLayer(regs) {
    const geoJsonData = {
      type: "FeatureCollection",
      features: regs
    };
    this.regsLayer = this.mapLib.createPolygonLayer(
      geoJsonData,
      this.popupCreator,
      this.styler
    );
    this.configureSearchControl(regs, ["winner"]);
    this.map.addLayer(this.regsLayer).fitBounds(this.regsLayer.getBounds());
  }

  createDepsLayer(departs) {
    const geoJsonData = {
      type: "FeatureCollection",
      features: departs
    };
    this.depsLayer = this.mapLib.createPolygonLayer(
      geoJsonData,
      this.popupCreator,
      this.styler
    );
    this.configureSearchControl(departs, ["winner"]);
    this.map.addLayer(this.depsLayer).fitBounds(this.depsLayer.getBounds());
  }

  popupCreator = (feature, layer) => {
    feature.layer = layer;
    let popupContent;
    const defPoppup = `
      <div class='col s12 m12'>
      Candidat qui arrive en tête : <strong>${
        feature.properties.winner
      }</strong>
        <h6>Résultats détaillés</h6>
        <ul class="collection">

          <li> Taux-participation : ${Math.round(
            feature.properties.taux_part * 100
          ) / 100}%</li>
          <li> Macky Sall : ${Math.round(feature.properties.Perct_MS * 100) /
            100}%</li>
          <li> Idrissa Seck : ${Math.round(feature.properties.Perct_IS * 100) /
            100}%</li>
          <li> Ousmane Sonko : ${Math.round(feature.properties.Perct_OS * 100) /
            100}%</li>
          <li> El'Hadji Sall : ${Math.round(feature.properties.Perct_ES * 100) /
            100}%</li>
          <li> Madické Niang : ${Math.round(feature.properties.Perct_MN * 100) /
            100}%</li>
        </ul>
      </div>
    `;
    if (feature.properties.department) {
      popupContent = `
      <div class='customPopup'>
        <h6 class="head">
          ${feature.properties.department} (${feature.properties.region})
        </h6>
        ${defPoppup}
      `;
      if (this.addShowMore) {
        popupContent += `
        <a href='/regions/${feature.properties.id_reg}/departements/${
          feature.properties.id_dep
        }'>Plus d'infos</a>
      </div>
      </div>`;
      } else {
        popupContent += `
      </div>
      </div>`;
      }
    } else {
      popupContent = `
      <div class='customPopup'>
        <h6 class="head">Région de ${feature.properties.region}</h6>
        ${defPoppup}
    `;
      if (this.addShowMore) {
        popupContent += `
        <a href='/regions/${feature.properties.id_reg}'>Plus d'infos</a>
      </div>`;
      } else {
        popupContent += `
      </div>`;
      }
    }

    layer.on({
      mouseover: e => {
        this.autoClosePopup = true;
        this.mapLib.highlightFeature(e);
        this.createLabel(feature, layer);
      },
      mouseout: e => {
        if (this.addRegLayer) {
          this.regsLayer.resetStyle(e.target);
        }
        if (this.departs) {
          this.depsLayer.resetStyle(e.target);
        }
        if (this.autoClosePopup) {
          layer.closePopup();
        }
      },
      click: e => {
        this.autoClosePopup = false;
        layer.bindPopup(popupContent, this.customOptions);
        layer.openPopup();
      }
    });
    // tslint:disable-next-line:semicolon
  };

  createLabel(feature, layer) {
    const defLabel = `
      <div class='col s12 m12'>Candidat qui arrive en tête : <strong>${
        feature.properties.winner
      }</strong>
      </div>
    `;
    let labelContent;
    if (this.departs) {
      labelContent = `
      <div class='customPopup'>
        <h6 class="head">
         Département de ${feature.properties.department} (${
        feature.properties.region
      })
        </h6>
        ${defLabel}
      </div>
      `;
    } else {
      labelContent = `
      <div class='customPopup'>
        <h6 class="head">Région de ${feature.properties.region}</h6>
        ${defLabel}
      </div>
    `;
    }
    const popup = new L.Popup({
      autoPan: false
    }).setContent(labelContent);

    const bounds = layer.getBounds();
    // Get center of bounds
    const center = bounds.getCenter();

    popup.setLatLng(center);
    layer.bindPopup(popup, this.customOptions);
    layer.openPopup();
  }

  styler(feature) {
    return {
      fillColor: feature.properties.color,
      weight: 1,
      opacity: 1,
      color: "black",
      fillOpacity: 0.9
    };
  }

  addLegend() {
    const legend = L.control({ position: "bottomright" });
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      div.innerHTML =
        "<h6 style='text-align: center'>Candidat qui arrive en tête</h6>";
      const grades = [
        "Macky Sall",
        "Idrissa Seck",
        "Ousmane Sonko",
        "Issa Sall",
        "Madické Niang"
      ];
      const labels = ["#c19f63", "#ee5125", "#d50000 ", "#1b5e20", "#ffeb3b"];

      // loop through our density intervals and generate a label with a colored square for each interval
      for (let i = 0; i < grades.length; i++) {
        div.innerHTML += `
        <div class="col s2 m2"  style="padding-top: 11px;">
          <div style="background-color: ${
            labels[i]
          }; height: 13px; width: 13px" class='circle'>
          </div>
        </div>
        <div class="col s10 m10" style="font-size: 12px; padding-top: 8px;">${grades[
          i
        ].toLocaleUpperCase()}</div>
        <br>`;
      }
      return div;
    };

    legend.addTo(this.map);
  }

  configureSearchControl(data, indexes: string[]) {
    this.searchCtrl.indexFeatures(data, indexes);
  }

  addControl(map, baseMaps) {
    L.control.layers(baseMaps).addTo(map);
  }
}
