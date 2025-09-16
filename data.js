var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception-area",
      "name": "Reception Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.008296778488588785,
        "pitch": 0.011679814317641757,
        "fov": 1.3145705460316273
      },
      "linkHotspots": [
        {
          "yaw": -2.081226865128686,
          "pitch": 0.12680123690381784,
          "rotation": 7.853981633974483,
          "target": "1-walkway"
        },
        {
          "yaw": -1.7479589283074137,
          "pitch": 0.05934400971794673,
          "rotation": 3.9269908169872414,
          "target": "2-parking-lot"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-walkway",
      "name": "Walkway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.004610430765740858,
        "pitch": -0.03851594449171891,
        "fov": 1.3145705460316273
      },
      "linkHotspots": [
        {
          "yaw": 1.366640558369582,
          "pitch": 0.153671149853011,
          "rotation": 5.497787143782138,
          "target": "0-reception-area"
        },
        {
          "yaw": -1.5246436180677545,
          "pitch": 0.3080374934958279,
          "rotation": 9.42477796076938,
          "target": "2-parking-lot"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-parking-lot",
      "name": "Parking Lot",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.016338657373189847,
        "pitch": -0.013211826966568196,
        "fov": 1.3145705460316273
      },
      "linkHotspots": [
        {
          "yaw": -2.666524517123147,
          "pitch": 1.4379463409635829,
          "rotation": 0,
          "target": "2-parking-lot"
        },
        {
          "yaw": 0.05995808746142295,
          "pitch": 0.1326374349065329,
          "rotation": 4.71238898038469,
          "target": "1-walkway"
        },
        {
          "yaw": -0.36627246326983354,
          "pitch": 0.05389687506407981,
          "rotation": 4.71238898038469,
          "target": "0-reception-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
