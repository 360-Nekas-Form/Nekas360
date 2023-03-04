var APP_DATA = {
  "scenes": [
    {
      "id": "0-pergola-n-01",
      "name": "Pergola N. 01",
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
        "yaw": -3.095335991347607,
        "pitch": 0.02574134533553263,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 1.5707963267948966,
          "target": "1-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-corridor",
      "name": "Corridor",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3217505633373392,
          "pitch": 0.06987088910987183,
          "rotation": 1.5707963267948966,
          "target": "2-pergola-n02"
        },
        {
          "yaw": -3.0604670598498274,
          "pitch": 0.018052046212517325,
          "rotation": 4.71238898038469,
          "target": "0-pergola-n-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pergola-n02",
      "name": "Pergola N.02",
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
        "yaw": 1.57307154396592,
        "pitch": 0.0793942347926837,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9690085317522357,
          "pitch": 0.04765840796081555,
          "rotation": 0,
          "target": "1-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
