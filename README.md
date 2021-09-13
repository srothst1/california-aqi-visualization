# cesium-aqi-vis

![image](https://user-images.githubusercontent.com/39531367/133108520-1a90e288-e285-48e8-8d73-ed7e09ada6b5.png)

![image](https://user-images.githubusercontent.com/39531367/132901053-711ae4e8-3814-4018-80dd-b9b0535174b6.png)

### Running this application

	npm install
	npm start

Navigate to `localhost:8080`.

##### Available scripts

* `npm start` - Runs a webpack build with `webpack.config.js` and starts a development server
* `npm run build` - Runs a webpack build with `webpack.config.js`
* `npm run release` - Runs an optimized webpack build with `webpack.release.config.js`
* `npm run serve-release` - Runs an optimized webpack build with `webpack.release.config.js` and starts a development server

#### Import named modules from Cesium

	import { Color } from 'cesium';
	var c = Color.fromRandom();

#### Import Cesium static asset files
	
	import "cesium/Build/Cesium/Widgets/widgets.css";

##### Removing pragmas

To remove pragmas such as a traditional Cesium release build, use the [`strip-pragma-loader`](https://www.npmjs.com/package/strip-pragma-loader).

Install the plugin with npm,

```
npm install strip-pragma-loader --save-dev
```

and include the loader in `module.rules` with `debug` set to `false`.

```
rules: [{
	test: /\.js$/,
	enforce: 'pre',
	include: path.resolve(__dirname, cesiumSource),
	use: [{
		loader: 'strip-pragma-loader',
		options: {
		    pragmas: {
				debug: false
			}
		}
	}]
}]
```

## Contributions

Pull requests are appreciated. Please use the same [Contributor License Agreement (CLA)](https://github.com/AnalyticalGraphicsInc/cesium/blob/master/CONTRIBUTING.md) used for [Cesium](https://cesiumjs.org/).
