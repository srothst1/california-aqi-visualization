# cesium-aqi-vis

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
