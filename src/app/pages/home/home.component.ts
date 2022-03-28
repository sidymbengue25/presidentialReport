import { Component, AfterViewInit, OnDestroy, Renderer2 } from "@angular/core";

@Component({
  selector: "el-home",
  templateUrl: "./home.component.html",
  styles: [
    `
      .carousel {
        height: 92vh !important;
      }
      .carousel-item {
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
      }
      .macky {
        background-image: url("assets/images/carousel/macky-sall.jpg");
        color: #5d4037 !important;
      }

      .idy {
        background-image: url("assets/images/carousel/idy.jpg");
        color: #e64a19 !important;
      }

      .sonko {
        background-image: url("assets/images/carousel/ousmane-sonko.png");
        color: #b71c1c !important;
      }

      .issa {
        background-image: url("assets/images/carousel/el-sall.jpg");
        color: #1b5e20 !important;
      }

      .madicke {
        background-image: url("assets/images/carousel/madicke.jpg");
        color: #ffff00 !important;
      }
      h2 {
        margin-top: 40vh !important;
        font-size: 4rem !important;
      }
      p {
        font-size: 2rem !important;
      }
      @media (max-width: 599px) {
        h2 {
          font-size: 2.5rem !important;
        }
        p {
          font-size: 1.7rem !important;
          margin-top: 1rem;
        }
      }
    `,
  ],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  data: {} = {
    superficie: 196714,
    winner: "Macky Sall",
    country: "Sénégal",
    Nbre_burea: 14651,
    Inscrits: 6373451,
    Votants: 4276615,
    Nuls: 41653,
    Exprimes: 4234962,
    Macky_SALL: 2483032,
    Idrissa_SE: 867885,
    Ousmane_Sk: 646857,
    Madicke_NI: 63601,
    Elhadji_SA: 173586,
    Perct_MS: 58.63,
    Perct_IS: 20.49,
    Perct_OS: 15.27,
    Perct_MN: 1.5,
    Perct_ES: 4.1,
    taux_part: 67.1,
  };
  carInstances;
  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
    this.initAlbum();
  }
  ngOnDestroy() {
    this.carInstances.destroy();
  }
  initAlbum() {
    const carouselContainer = this.renderer.selectRootElement(
      ".carousel",
      true
    );
    this.carInstances = M.Carousel.init(carouselContainer, {
      fullWidth: true,
      indicators: true,
    });
  }
}
