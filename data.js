var APP_DATA = {
  "scenes": [
    {
      "id": "0-chodba",
      "name": "chodba",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.6464869114109568,
        "pitch": 0.015097557468969569,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": 1.8161507836617519,
          "pitch": 0.3691472068263373,
          "rotation": 0,
          "target": "3-kuchy"
        },
        {
          "yaw": 0.2843675054120105,
          "pitch": 0.0044693905876513895,
          "rotation": 0,
          "target": "6-chodba"
        },
        {
          "yaw": -1.2084804500911464,
          "pitch": 0.5081912486828859,
          "rotation": 0,
          "target": "4-peds"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-gar",
      "name": "garáž",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.913210200203597,
          "pitch": 0.3393824932670455,
          "rotation": 0,
          "target": "4-peds"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-koupelna",
      "name": "koupelna",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6313771668470913,
          "pitch": 0.2610412107765754,
          "rotation": 0,
          "target": "4-peds"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kuchy",
      "name": "kuchyň",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8668735150110178,
          "pitch": 0.35784165120896994,
          "rotation": 0,
          "target": "0-chodba"
        },
        {
          "yaw": 1.9260192590059528,
          "pitch": 0.2223077291427309,
          "rotation": 0,
          "target": "4-peds"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-peds",
      "name": "předsíň",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9011958101838395,
          "pitch": 0.4428014332461654,
          "rotation": 0,
          "target": "0-chodba"
        },
        {
          "yaw": -1.006107373454217,
          "pitch": 0.21603088813801996,
          "rotation": 0,
          "target": "3-kuchy"
        },
        {
          "yaw": 0.4010868835767738,
          "pitch": 0.28529361049843693,
          "rotation": 0,
          "target": "1-gar"
        },
        {
          "yaw": 2.5582549450177225,
          "pitch": 0.3359375944465448,
          "rotation": 0,
          "target": "5-atna"
        },
        {
          "yaw": -2.7387962695638794,
          "pitch": 0.33003728575108937,
          "rotation": 0,
          "target": "2-koupelna"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-atna",
      "name": "šatna",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.489555908262421,
          "pitch": 0.42170208134092846,
          "rotation": 0,
          "target": "4-peds"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-chodba",
      "name": "chodba",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3388320457717562,
          "pitch": 0.7053315429501339,
          "rotation": 0,
          "target": "0-chodba"
        },
        {
          "yaw": 2.918020055410592,
          "pitch": 0.22497129843467079,
          "rotation": 0,
          "target": "12-pokoj-dtsk-klui"
        },
        {
          "yaw": 2.5246143729778776,
          "pitch": 0.3364153630365099,
          "rotation": 0,
          "target": "11-pokoj-dtsk-dv"
        },
        {
          "yaw": -2.725398826556745,
          "pitch": 0.4642182631179903,
          "rotation": 0,
          "target": "9-lonice"
        },
        {
          "yaw": -0.23533288031017285,
          "pitch": 0.23086570847198828,
          "rotation": 0,
          "target": "10-pokoj"
        },
        {
          "yaw": 0.06643511173011518,
          "pitch": 0.31453861736592614,
          "rotation": 0,
          "target": "7-koupelna"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-koupelna",
      "name": "koupelna",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4299038410612983,
          "pitch": 0.4359836727959969,
          "rotation": 0,
          "target": "6-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-koupelna",
      "name": "koupelna",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2682664152862664,
          "pitch": 0.5605632693529508,
          "rotation": 0,
          "target": "9-lonice"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lonice",
      "name": "ložnice",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9675266597421501,
          "pitch": 0.18363741699616476,
          "rotation": 0,
          "target": "8-koupelna"
        },
        {
          "yaw": 2.723029270562588,
          "pitch": 0.37301431552424447,
          "rotation": 0,
          "target": "6-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-pokoj",
      "name": "pokoj",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0161694569680257,
          "pitch": 0.2777229933426426,
          "rotation": 0,
          "target": "6-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-pokoj-dtsk-dv",
      "name": "pokoj dětský dívčí",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4436209365610084,
          "pitch": 0.20718613648548434,
          "rotation": 0,
          "target": "6-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-pokoj-dtsk-klui",
      "name": "pokoj dětský klučičí",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3378971427208413,
          "pitch": 0.2958085384046516,
          "rotation": 0,
          "target": "6-chodba"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Hajany",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
