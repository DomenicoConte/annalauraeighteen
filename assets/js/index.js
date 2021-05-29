
    
    $( document ).ready(function() {
      AOS.init();
  
    var rome = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([14.373690873012336, 40.92283813335323])),
    });
    rome.setStyle(
        new ol.style.Style({
          image: new ol.style.Icon({
            crossOrigin: 'anonymous',
            src: 'assets/geolocation.svg',
            scale: 0.09,
          }),
        })
    );
    var vectorSource = new ol.source.Vector({
      features: [rome]
    });

   var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
    });

    var rasterLayer = new ol.layer.Tile({
      source: new ol.source.TileJSON({
        url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
        crossOrigin: '',
      }),
    });


    var map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
       vectorLayer
      ],
      view: new ol.View({
        
        center: ol.proj.fromLonLat([14.373690873012336,40.92283813335323 ]),
        zoom: 15,
      }),
      
    });
     
        $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:4
              }
          }
        })
  
  
        
  
  
          var startStarPos = $("#star-pg").position().top;
          var newPosition = startStarPos;
          var angle = 0;
          function getElementHeight(name){
              console.log($(name))
              return $(name)[0].clientHeight;
          }
          //$('#star-main').height(getElementHeight('#middleDiv'));
          console.log(document.documentElement.scrollTop);
          var lastScrollTop = 0;
          $(window).scroll(function(event){
            var doc = document.documentElement;
            var st = $(this).scrollTop();
            st += 150 ;
            var starOffset = $("#star-pg").offset().top;     
            console.log("st : "  + st);
            console.log("starOffset :" + starOffset);     
            var starPosTop = $("#star-pg").position().top;
  
            newPosition = (st - starOffset) + starPosTop;
            
            $("#star-pg").animate({top: newPosition},30,'linear');
           /* angle += 20;
            angleString = 'rotate('+ angle + 'deg)' ;
            $("#star-pg").animate( { 'transform' : angleString},5,'linear');*/
  
  
  
        
            lastScrollTop = st;
          });
  
          $('#star-pg').on('click',function f(e){
            e.preventDefault()
            //$('#star-pg').effect( "shake" , { direction: "up", times: 4, distance: 10}, 1000 );
            //$(this).css('transform','rotate(45deg)');
          })
  
          /*----------------M-A-P---------------------------*/
            // Initialize and add the map
      });