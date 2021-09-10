//Global Dependencies 
import { Ion, Viewer, createWorldTerrain, Cartesian3, NearFarScalar, Math } from "../node_modules/cesium"
import "../node_modules/cesium/Build/Cesium/Widgets/widgets.css";

//Local Dependencies
import { getFireData, getAQIData} from './module.js';

// Cesium ion access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer('cesiumContainer', {
  terrainProvider: createWorldTerrain(),
  animation: false,
  timeline: false
});
viewer.scene.globe.depthTestAgainstTerrain = false;

//TODO: Add icons where there are fires
getFireData(viewer);
getAQIData(viewer);

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination : Cartesian3.fromDegrees(-122.4175, 37.655, 1000000),
  orientation : {
    heading : Math.toRadians(0.0),
    pitch : Math.toRadians(-90.0),
  }
});

//TODO: Add icons with locations of fires
//TODO: Add smoke showcasing the fire location
//TODO: Add multiple viewing layers
//TODO: Add smoky clouds