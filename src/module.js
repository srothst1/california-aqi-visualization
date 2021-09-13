//Global Dependencies 
import { Math, Cartesian2, CloudCollection, Color, Cartesian3, NearFarScalar } from "../node_modules/cesium"
import "../node_modules/cesium/Build/Cesium/Widgets/widgets.css";

/**
 * Retrieves wildfire data and adds it to the Cesium viewer. 
 * 
 * @parameters Cesium.Viewer
 * @returns NULL
 */
var api_url_fire = `https://www.fire.ca.gov/umbraco/api/IncidentApi/GeoJsonList?inactive=false`;
export async function getFireData(viewer) {
  const response = await fetch(api_url_fire);
  const data = await response.json();
  for (let i = 0; i < data.features.length; i++){
    viewer.entities.add({
      name: data.features[i].properties.Name,
      description: data.features[i].properties.Url,
      position: Cartesian3.fromDegrees(data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1]),
      billboard: {
        image: "../images/fire_emoji.png",
        scale: 0.14,
        translucencyByDistance: new NearFarScalar(
          1.5e2,
          2.0,
          1.5e7,
          0.5
        ),
      },
    });
  }
}

/**
 * Retrieves AQI data and adds it to the Cesium viewer. 
 * 
 * TODO: Add clustering? 
 * TODO: Display the current date?
 * TODO: More accurate rectangle
 * 
 * @parameters Cesium.Viewer
 * @returns NULL
 */

//Get today's date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

//Query data from API
var api_url_AQI = 'https://www.airnowapi.org/aq/data/?startDate=' + today + 'T1&endDate=' + today + 'T1&parameters=PM25&BBOX=-124.860687,32.571982,-113.522797,41.924499&dataType=A&format=application/json&verbose=1&monitorType=0&includerawconcentrations=0&API_KEY=284738AA-7015-4BA9-BA0D-E60A98261D52';
export async function getAQIData(viewer) {
  const response = await fetch(api_url_AQI);
  const data = await response.json();
  for (let i = 0; i < data.length; i++){
    var AQI = data[i].AQI.toString();
    var AgencyName = data[i].AgencyName;
    var DetailedDescription = "Site Name: " + data[i].SiteName;
    viewer.entities.add({
      name: AgencyName,
      description: DetailedDescription,
      position: Cartesian3.fromDegrees(data[i].Longitude, data[i].Latitude),
      billboard: {
        image: "../images/cloud_emoji.png",
        scale: 0.175,
        translucencyByDistance: new NearFarScalar(
          1.5e2,
          2.0,
          1.5e7,
          0.5
        ),
      },
      label: {
        fillColor: Color.BLACK,
        text: AQI,
        scale: .25,
        font: "40px sans-serif",
        eyeOffset : new Cartesian3(0, 0, -1000),
      },
    });
  }
}

/**
 * Adds clouds to the viewer.  
 * 
 * @parameters Cesium.Viewer, clouds
 * @returns NULL
 */
var api_url_clouds = `https://www.airnowapi.org/aq/data/?startDate=2021-09-13T00&endDate=2021-09-13T01&parameters=PM25&BBOX=-126.179047,32.460813,-113.874359,42.087772&dataType=A&format=application/json&verbose=1&monitorType=2&includerawconcentrations=0&API_KEY=284738AA-7015-4BA9-BA0D-E60A98261D52`;
 export async function addCloudCollection(viewer) {
  const response = await fetch(api_url_clouds);
  const data = await response.json();
  var clouds = new CloudCollection();
  for (let i = 0; i < data.length; i++){
    var AQI = data[i].AQI.toString();
    clouds.add({
      position : Cartesian3.fromDegrees(data[i].Longitude, data[i].Latitude, 260),
      scale: new Cartesian2(2000, 300),
      maximumSize: new Cartesian3(50, 12, 15),
      slice: 0.49,
    });
  }
  console.log(data.length);
  console.log(clouds.length);
  viewer.scene.primitives.add(clouds);
}