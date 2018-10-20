
/*  GEOCODER
function geocode(platform) {
  var geocoder = platform.getGeocodingService(),
    geocodingParameters = {
      searchText: '200 S Mathilda Sunnyvale CA',
      jsonattributes : 1
    };

  geocoder.geocode(
    geocodingParameters,
    si,
    no
  );

  function si(result) {
    var locations = result.response.view[0].result;
    addLocationsToMap(locations);
    addLocationsToPanel(locations);
    // ... etc.
  }
  function no(error) {
    alert('Ooops!');
  }
  
}

*/
//mapa
function moveMap(map){
    map.setCenter({lat:40.7129, lng:-74.0157});
    map.setZoom(14);
  }

  function addMarkersToMap(map) {
    var Marker1 = new H.map.Marker({lat:40.7129, lng:-74.0157});
    map.addObject(Marker1);

    var Marker2 = new H.map.Marker({lat:40.773483, lng:-73.972504});
    map.addObject(Marker2);
    
  }  

  
  var platform = new H.service.Platform({
    app_id: 'e6K9XqgOKMJ0fLE2uvrd',
    app_code: 'm3cB8V3AHO64S5ujNaqZsg',
    useHTTPS: true
  });
  var pixelRatio = window.devicePixelRatio || 1;
  var defaultLayers = platform.createDefaultLayers({
    tileSize: pixelRatio === 1 ? 256 : 512,
    ppi: pixelRatio === 1 ? undefined : 320
  });
  
  //Step 2: initialize a map  - not specificing a location will give a whole world view.
var map = new H.Map(document.getElementById('map'),
defaultLayers.normal.map, {pixelRatio: pixelRatio});
  
  //Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  //routeInstructionsContainer = document.getElementById('panel'); Habilitar panel de datos
  // Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);
  
  // Now use the map as required...
moveMap(map);
addMarkersToMap(map);


  //ROUTING

  function calculateRouteFromAtoB (platform) {
    var router = platform.getRoutingService(),
      routeRequestParams = {
        mode: 'fastest;car',
        representation: 'display',
        routeattributes : 'waypoints,summary,shape,legs',
        maneuverattributes: 'direction,action',
        waypoint0: '40.7129,-74.0157', // punto A
        waypoint1: '40.773483,-73.972504'  // punto B
      };
  
  
    router.calculateRoute(routeRequestParams, onSuccess,  onError);
  }

//calcular ruta
  function onSuccess(result) {
    var route = result.response.route[0];
    addRouteShapeToMap(route);
    addManueversToMap(route);
    //addWaypointsToPanel(route.waypoint);
    //addManueversToPanel(route);
    //addSummaryToPanel(route.summary);
  // ... etc.
    }
    function onError(error) {
        alert('Ooops!');
      }

    var bubble;      
// modales que nos dicen donde cruzar
    function openBubble(position, text){
        if(!bubble){
           bubble =  new H.ui.InfoBubble(
             position,
             // The FO property holds the province name.
             {content: text});
           ui.addBubble(bubble);
         } else {
           bubble.setPosition(position);
           bubble.setContent(text);
           bubble.open();
         }
       }



//funcion que dibuja la linea de la ruta  con H.geo.strip()
       function addRouteShapeToMap(route){
        var strip = new H.geo.Strip(),
          routeShape = route.shape,
          polyline;
      
        routeShape.forEach(function(point){
        
            var parts = point.split(',');
          strip.pushLatLngAlt(parts[0], parts[1]);
          console.log(parts)


         
        });
      
        polyline = new H.map.Polyline(strip, {
          style: {
            lineWidth: 4,
            strokeColor: 'rgba(0, 128, 255, 0.7)'
          }
        });
        // Add the polyline to the map
        map.addObject(polyline);
        // And zoom to its bounding rectangle
        map.setViewBounds(polyline.getBounds(), true);
      }
      //?at=40.74917,-73.98529&q=chrysler&app_id={YOUR_APP_ID}&app_code={YOUR_APP_CODE}
    
//marcadores de recorrido
      function addManueversToMap(route){
        var svgMarkup = '<svg width="18" height="18" ' +
          'xmlns="http://www.w3.org/2000/svg">' +
          '<circle cx="8" cy="8" r="8" ' +
            'fill="#1b468d" stroke="white" stroke-width="1"  />' +
          '</svg>',
          dotIcon = new H.map.Icon(svgMarkup, {anchor: {x:8, y:8}}),
          group = new  H.map.Group(),
          i,
          j;
      
        // Add a marker for each maneuver
        for (i = 0;  i < route.leg.length; i += 1) {
          for (j = 0;  j < route.leg[i].maneuver.length; j += 1) {
            // Get the next maneuver.
            maneuver = route.leg[i].maneuver[j];
            // Add a marker to the maneuvers group
            var marker =  new H.map.Marker({
              lat: maneuver.position.latitude,
              lng: maneuver.position.longitude} ,
              {icon: dotIcon});
            marker.instruction = maneuver.instruction;
            group.addObject(marker);
          }
        }
      
        group.addEventListener('tap', function (evt) {
          map.setCenter(evt.target.getPosition());
          openBubble(
             evt.target.getPosition(), evt.target.instruction);
        }, false);
      
        // Add the maneuvers group to the map
        map.addObject(group);
      }



 // Now use the map as required...
calculateRouteFromAtoB (platform); 

  function placesNearby(platform){
    var here = new H.places.Here(platform.getPlacesService());
    var params = {
      'at':'40.7755423, -73.9764619'
    }
    
    here.request(params,getPlaces,errPlaces);
  }

  function getPlaces(result){
    var places = result.results.item;
    addPlacesToMap(places);
  }
    
  function errPlaces(error){
    error = data;
  }

  function addPlacesToMap(places){
    var group = new HTMLMapElement.Group();

    group.addEventListener('tab', function(evt){
    map.setCenter(evt.target.getPosition());
    openBubble(
      evt.target.getPosition(),evt.target.content);
  }, false)


  group.addObjects(places.map(function (place) {
    var marker = new H.map.Marker({lat: place.position[0], lng: place.position[1]})
    marker.content = '<div style="font-size: 10px" ><h3>' + place.title +
      '</h3><h4>' + place.category.title + '</h4>' + place.vicinity + '</div>';
    return marker;
  }));

map.addObject(group);

// get geo bounding box for the group and set it to the map
map.setViewBounds(group.getBounds());
}
      