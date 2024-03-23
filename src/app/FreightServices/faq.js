function  faq(){
$(".counter").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({ countNum: $this.text() }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
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
    
        $(".hero").slick({
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
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
        });}
export default faq