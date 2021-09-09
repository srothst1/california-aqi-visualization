//Global Dependencies 
import { Ion, Viewer, Color, Cartesian3, NearFarScalar, Math } from "../node_modules/cesium"
import "../node_modules/cesium/Build/Cesium/Widgets/widgets.css";

//Helper functions
//TODO: add a correct header
var api_url = 'https://www.fire.ca.gov/umbraco/api/IncidentApi/GeoJsonList?inactive=false';
export async function getISS(viewer) {
  const response = await fetch(api_url);
  const data = await response.json();
  for (let i = 0; i < data.features.length; i++){
    //console.log(data.features[i]);
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

var api_url_2 = 'https://www.airnowapi.org/aq/data/?startDate=2021-09-09T19&endDate=2021-09-09T20&parameters=PM25&BBOX=-124.860687,32.571982,-113.522797,41.924499&dataType=A&format=application/json&verbose=1&monitorType=0&includerawconcentrations=0&API_KEY=284738AA-7015-4BA9-BA0D-E60A98261D52';
export async function getISS_2(viewer) {
  const response = await fetch(api_url_2);
  const data = await response.json();
  for (let i = 0; i < data.length; i++){
    console.log(data[i]);
    var AQI = data[i].AQI.toString();
    var AgencyName = data[i].AgencyName;
    var DetailedDescription = "Site Name: " + data[i].SiteName;
    viewer.entities.add({
      name: AgencyName,
      description: DetailedDescription,
      position: Cartesian3.fromDegrees(data[i].Longitude, data[i].Latitude),
      billboard: {
        image: "../images/cloud_emoji.png",
        scale: 0.125,
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
        scale: 0.3,
        translucencyByDistance: new NearFarScalar(
          1.5e2,
          2.0,
          1.5e7,
          0.5
        ),
      }
    });
  }
}