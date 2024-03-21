{
  /* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script> */
}
import jQuery from "jquery";
import $ from "jquery";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../../node_modules/slick-carousel/slick/slick";
import { script }  from 'next/script';

export default function counters() {
  $(".counter").each(function () {  
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 500,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
}

// jQuery(document).ready(function ($) {
  $(".hero").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: !0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          draggable: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          draggable: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          draggable: true,
          slidesToScroll: 1,
        },
      },
    ],
  });
// });
