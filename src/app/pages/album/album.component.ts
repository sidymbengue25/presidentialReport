import { TitleService } from "./../../services/title.service";
import { Component, AfterViewInit, Renderer2, OnDestroy } from "@angular/core";

@Component({
  selector: "el-album",
  templateUrl: "./album.component.html",
  styles: [
    `
      .carousel {
        height: 500px;
      }
      .carousel-item {
        width: 90% !important;
        top: -40px;
        height: 500px;
      }
      img.item {
        height: 500px;
        width: 100%;
      }
      h5 {
        margin-bottom: 2rem;
      }
      @media (max-width: 599px) {
        .carousel {
          height: 350px;
        }
        .carousel-item {
          width: 80% !important;
          top: -20px;
          min-height: 340px !important;
          height: 340px !important;
        }
        img.item {
          height: 340px;
          width: 100%;
        }
      }
    `
  ]
})
export class AlbumComponent implements AfterViewInit, OnDestroy {
  carInstances;
  constructor(
    private renderer: Renderer2,
    private titleService: TitleService
  ) {}

  ngAfterViewInit() {
    this.initAlbum();
    this.titleService.setTitle("Open-Technology - Album Présidentiel 2019");
  }
  ngOnDestroy() {
    this.carInstances.destroy();
  }
  initAlbum() {
    const carouselContainer = this.renderer.selectRootElement(
      ".carousel",
      true
    );
    const materializeBoxes = document.querySelectorAll(".materialboxed");
    this.carInstances = M.Carousel.init(carouselContainer);
    M.Materialbox.init(materializeBoxes);
  }
}
