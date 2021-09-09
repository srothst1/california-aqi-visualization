//Global Dependencies 
import { Ion, Viewer, createWorldTerrain, Cartesian3, NearFarScalar, Math } from "../node_modules/cesium"
import "../node_modules/cesium/Build/Cesium/Widgets/widgets.css";

//Local Dependencies
import { getISS, getISS_2} from './module.js';

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token from your ion account
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer('cesiumContainer', {
  terrainProvider: createWorldTerrain(),
  animation: false,
  timeline: false
});

viewer.scene.globe.depthTestAgainstTerrain = false;

//TODO: Add icons where there are fires
getISS(viewer);
getISS_2(viewer);

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