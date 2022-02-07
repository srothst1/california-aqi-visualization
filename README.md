# California Air Quality Index Visualization

This project uses CesiumJS, Google Maps, to visualize fires and AQI data in the state of California. The open-source project [SoCalAirQuality](https://github.com/ian-r-rose/SoCalAirQuality) is also highlighted. SoCalAirQuality provides a simple way for people to track the air quality index of a given region on Twitter.

2/7/2022 AM update - [Here](https://srothst1.github.io/dist/index.html) is a live demo that is partially working. The CesiumJS viewer is having issues. I recommend cloning this repo and running it locally, but the live demo will give you a sense of what the site looks like. Will update and fix later this week when I have more time.

### Running this application

First, clone this repository. Next run:
```
npm install
npm start
```

and navigate to `localhost:8080`.

### Screenshots
Overview #1:
![image](https://user-images.githubusercontent.com/39531367/152823235-dc8a9fd6-30c9-485a-9560-046935565b12.png)
Overview #2:
![image](https://user-images.githubusercontent.com/39531367/152823273-e38ef0b4-dd0d-4b6d-bde8-20364a24ed8b.png)
Overview #3:
![image](https://user-images.githubusercontent.com/39531367/152823297-aeead78c-841b-41a3-8a99-909e15f7a652.png)


![image](https://user-images.githubusercontent.com/39531367/133108520-1a90e288-e285-48e8-8d73-ed7e09ada6b5.png)

![image](https://user-images.githubusercontent.com/39531367/132901053-711ae4e8-3814-4018-80dd-b9b0535174b6.png)

![image](https://user-images.githubusercontent.com/39531367/133159194-103c6a04-6c52-419f-b649-1f5725bc3272.png)

### Available scripts

* `npm start` - Runs a webpack build with `webpack.config.js` and starts a development server
* `npm run build` - Runs a webpack build with `webpack.config.js` 

### Import named modules from Cesium

```
import { Color } from 'cesium';
var c = Color.fromRandom();
```

### Import Cesium static asset files

```
import "cesium/Build/Cesium/Widgets/widgets.css";
```

### Contributions

Pull requests are appreciated. Please use the same Contributor License Agreement (CLA)
