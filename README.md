# cesium-aqi-vis

![image](https://user-images.githubusercontent.com/39531367/133108520-1a90e288-e285-48e8-8d73-ed7e09ada6b5.png)

![image](https://user-images.githubusercontent.com/39531367/132901053-711ae4e8-3814-4018-80dd-b9b0535174b6.png)

![image](https://user-images.githubusercontent.com/39531367/133159194-103c6a04-6c52-419f-b649-1f5725bc3272.png)

### Running this application

	npm install
	npm start

Navigate to `localhost:8080`.

##### Available scripts

* `npm start` - Runs a webpack build with `webpack.config.js` and starts a development server
* `npm run build` - Runs a webpack build with `webpack.config.js`

#### Import named modules from Cesium

	import { Color } from 'cesium';
	var c = Color.fromRandom();

#### Import Cesium static asset files
	
	import "cesium/Build/Cesium/Widgets/widgets.css";

## Contributions

Pull requests are appreciated. Please use the same Contributor License Agreement (CLA)
