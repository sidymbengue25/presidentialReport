import { Component, OnInit, Renderer2 } from "@angular/core";
import { MapGenerator } from "./../../shared/libs/map.generator";
@Component({
  selector: "el-location",
  templateUrl: "./location.component.html",
  styles: [
    `
      #map {
        height: 300px;
      }
    `
  ]
})
export class LocationComponent implements OnInit {
  mapLib: MapGenerator;
  customOptions = {
    bottom: "20px",
    className: "myCustomPopupPlacement"
  };
  map: any;
  entrepriseLayer: any;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.mapLib = new MapGenerator();
    this.mapLib.init(this.renderer.selectRootElement("#map"));
    this.map = this.mapLib.createMap();
    this.createEntrepriseLayer();
    this.mapLib.addAttribution(
      "<a href='https://www.youtube.com/channel/UCGtv2H-JS6ZuzJS5jXqTKmQ?view_as=subscriber' target='_blank'>@sidymbengue</a>"
    );

    this.mapLib.createABasmapeLayer(
      "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      true
    );
  }
  createLayer(data, icon, iconSize, popup) {
    const geoJSONData = {
      type: "FeatureCollection",
      features: data
    };
    return this.mapLib.addPointGeoJSONLayer(geoJSONData, icon, iconSize, popup);
  }
  createEntrepriseLayer() {
    const icon = "https://img.icons8.com/color/48/000000/parliament.png";
    this.entrepriseLayer = this.createLayer(
      [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-17.424561172874, 14.734376244]
          },
          properties: {
            nom: "Open-Technology 4E Inc",
            ceo: "Sidy Mbengue",
            address: "Dakar",
            logo: "../../../assets/images/logo.png",
            created_at: "24 Janvier 2019"
          }
        }
      ],
      icon,
      [25, 30],
      this.entrepriseLayerPopup
    );
    this.map
      .addLayer(this.entrepriseLayer)
      .fitBounds(this.entrepriseLayer.getBounds());
  }

  entrepriseLayerPopup(feature, layer) {
    feature.layer = layer;
    const data = feature.properties;
    const popupContent = `
    <div class='customPopup'>
      <img src="${data.logo}" alt="Open-Technology 4E Inc">
      <div class='ent_info'>
        // <strong><i class="fas fa-landmark" style="font-size:15px"></i> Nom : </strong>
        <h6>${data.nom}</h6>
      </div>
      <div class='ent_info'>
        <strong><i class="fa fa-user-circle" style="font-size:15px"></i> CEO : </strong>
        <h6>${data.ceo}</h6>
      </div>
      <div class='ent_info'>
        <strong><i class="fa fa-map-marker-alt" style="font-size:15px"></i> Adresse : </strong>
        <h6>${data.address}</h6>
      </div>
      <div class='ent_info'>
        <strong><i class="far fa-calendar-alt" style="font-size:15px"></i>Créé le : </strong>
        <h6>${data.created_at}</h6>
      </div>
    </div>`;
    layer.onclick = layer.bindPopup(popupContent, this.customOptions);
  }
}
