import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDatService implements InMemoryDbService {

  createDb() {
    const cars = [{
      "id": 1,
      "cardata": {
        "Name": "Dodge d200",
        "Miles_per_Gallon": 11,
        "Cylinders": 8,
        "Horsepower": 210,
        "Weight_in_lbs": 4382,
        "Acceleration": 13.5,
        "Year": "2020",
        "Origin": "USA",
        "picture": "assets/van/45/45base.jpg"
      },
      "base": [
        {"url": "assets/van/45/45base.jpg", "description": "45 degrees picture"},
        {"url": "assets/van/back/backbase.jpg", "description": "Back view"},
        {"url": "assets/van/front/frontbase.jpg", "description": "Front view"},
        {"url": "assets/van/left/leftbase.jpg", "description": "Left view"},
        {"url": "assets/van/right/rightbase.jpg", "description": "Right view"},
        {"url": "assets/van/top/topbase.jpg", "description": "Top View"}
      ],
      "pictures": [
        [
          {
            "name": "45",
            "part": "hood",
            "colors": ["assets/van/45/45-hoodblue.png", "assets/van/45/45-hoodbone.png", "assets/van/45/45-hoodliver.png"]
          },
          {
            "name": "45",
            "part": "roof",
            "colors": ["assets/van/45/45-roofblue.png", "assets/van/45/45-roofbone.png", "assets/van/45/45-roofliver.png"]
          },
          {
            "name": "45",
            "part": "sides",
            "colors": ["assets/van/45/45-sidesblue.png", "assets/van/45/45-sidesbone.png", "assets/van/45/45-liver.png"]
          }
        ],
        [
          {
            "name": "back",
            "part": "back",
            "colors": ["assets/van/back/backblue.png", "assets/van/back/backbone.png", "assets/van/back/backliver.png"]
          }  
        ],
        [
          {
            "name": "front",
            "part": "hood",
            "colors": ["assets/van/front/front-hoodblue.png", "assets/van/front/front-hoodbone.png", "assets/van/front/front-hoodliver.png"]
          },
          {
            "name": "front",
            "part": "roof",
            "colors": ["assets/van/front/front-roofblue.png", "assets/van/front/front-roofbone.png", "assets/van/front/front-roofliver.png"]
          },
          {
            "name": "front",
            "part": "sides",
            "colors": ["assets/van/front/front-sidesblue.png", "assets/van/front/front-sidesbone.png", "assets/van/front/front-sidesliver.png"]
          }
        ],
        [
          {
            "name": "left",
            "part": "left",
            "colors": ["assets/van/left/left-blue.png", "assets/van/left/left-bone.png", "assets/van/left/left-liver.png"]
          }
        ],
        [
          {
            "name": "right",
            "part": "right",
            "colors": ["assets/van/right/right-blue.png", "assets/van/right/right-bone.png", "assets/van/right/right-liver.png"]
          }
        ],
        [
          {
            "name": "top",
            "part": "hood",
            "colors": ["assets/van/top/top-hoodblue.png", "assets/van/top/top-hoodbone.png", "assets/van/top/top-hoodliver.png"]
          },
          {
            "name": "top",
            "part": "roof",
            "colors": ["assets/van/top/top-roofblue.png", "assets/van/top/top-roofbone.png", "assets/van/top/top-roofliver.png"]
          },
          {
            "name": "top",
            "part": "sides",
            "colors": ["assets/van/top/top-sidesblue.png", "assets/van/top/top-sidesbone.png", "assets/van/top/top-sidesliver.png"]
          }
        ]
      ],
      "features": [
        {
          "option": "front",
          "colors": [
            {"colorName": "white", "color": "#FFF", "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "isDefault": false}
          ]
        },
        {
          "option": "sides", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "isDefault": false}
          ]
        },
        {
          "option": "hood", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "isDefault": false}
          ]
        },
        {
          "option": "back", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "isDefault": false}
          ]
        },        
        {
          "option": "roof", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "isDefault": false}
          ]
        }        
      ]  
    },
    {
      "id":2,
      "cardata": {
          "Name": "AMC gremlin",
          "Miles_per_Gallon": 19,
          "Cylinders": 6,
          "Horsepower": 100,
          "Weight_in_lbs": 2634,
          "Acceleration": 13,
          "Year": "2020",
          "Origin": "USA",
          "picture": "assets/bigvan/45/base45.jpg"
        },
      "base": [
        {"url": "assets/bigvan/45/base45.jpg", "description": "45 degrees picture"},
        {"url": "assets/bigvan/back/backbase.jpg", "description": "Back view"},
        {"url": "assets/bigvan/front/frontbase.jpg", "description": "Front view"},
        {"url": "assets/bigvan/left/leftbase.jpg", "description": "Left view"},
        {"url": "assets/bigvan/right/rightbase.jpg", "description": "Right view"},
        {"url": "assets/bigvan/top/topbase.jpg", "description": "Top view"}
      ],
      "pictures": [
        [
          {
            "name": "45",
            "part": "hood",
            "colors": ["assets/bigvan/45/hood-blue45.png", "assets/bigvan/45/hood-bone45.png", "assets/bigvan/45/hood-liver45.png"]
          },
          {
            "name": "45",
            "part": "roof",
            "colors": ["assets/bigvan/45/roof-blue45.png", "assets/bigvan/45/roof-bone45.png", "assets/bigvan/45/roof-liver45.png"]
          },
          {
            "name": "45",
            "part": "sides",
            "colors": ["assets/bigvan/45/side-blue45.png", "assets/bigvan/45/side-bone45.png", "assets/bigvan/45/side-liver45.png"]
          },
          {
            "name": "45",
            "part": "front",
            "colors": ["assets/bigvan/45/front-blue45.png", "assets/bigvan/45/front-bone45.png", "assets/bigvan/45/front-liver45.png"]
          }
        ],
        [
          {
            "name": "back",
            "part": "back",
            "colors": ["assets/bigvan/back/backblue.png", "assets/bigvan/back/backbone.png", "assets/bigvan/back/backliver.png"]
          }
        ],
        [
          {
            "name": "front",
            "part": "hood",
            "colors": ["assets/bigvan/front/front-hoodblue.png", "assets/bigvan/front/front-hoodbone.png", "assets/bigvan/front/front-hoodliver.png"]
          },
          {
            "name": "front",
            "part": "roof",
            "colors": ["assets/bigvan/front/front-roofblue.png", "assets/bigvan/front/front-roofbone.png", "assets/bigvan/front/front-roofliver.png"]
          },
          {
            "name": "front",
            "part": "sides",
            "colors": ["assets/bigvan/front/front-sidesblue.png", "assets/bigvan/front/front-sidesbone.png", "assets/bigvan/front/front-sidesliver.png"]
          },
          {
            "name": "front",
            "part": "front",
            "colors": ["assets/bigvan/front/front-blue.png", "assets/bigvan/front/front-bone.png", "assets/bigvan/front/front-liver.png"]
          }
        ],
        [
          {
            "name": "left",
            "part": "left",
            "colors": ["assets/bigvan/left/left-blue.png", "assets/bigvan/left/left-bone.png", "assets/bigvan/left/left-liver.png"]
          }
        ],
        [
          {
            "name": "right",
            "part": "right",
            "colors": ["assets/bigvan/right/right-blue.png", "assets/bigvan/right/right-bone.png", "assets/bigvan/right/right-liver.png"]
          }
        ],
        [
          {
            "name": "top",
            "part": "hood",
            "colors": ["assets/bigvan/top/top-hoodblue.png", "assets/bigvan/top/top-hoodbone.png", "assets/bigvan/top/top-hoodliver.png"]
          },
          {
            "name": "top",
            "part": "roof",
            "colors": ["assets/bigvan/top/top-roofblue.png", "assets/bigvan/top/top-roofbone.png", "assets/bigvan/top/top-roofliver.png"]
          },
          {
            "name": "top",
            "part": "sides",
            "colors": ["assets/bigvan/top/top-sidesblue.png", "assets/bigvan/top/top-sidesbone.png", "assets/bigvan/top/top-sidesliver.png"]
          }
        ]
      ],
      "features": [
        {
          "option": "front",
          "colors": [
            {"colorName": "white", "color": "#FFF", "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "isDefault": false}
          ]
        },
        {
          "option": "sides", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "isDefault": false}
          ]
        },
        {
          "option": "hood", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "isDefault": false}
          ]
        },
        {
          "option": "back", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "isDefault": false}
          ]
        },        
        {
          "option": "roof", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "isDefault": false}
          ]
        }        
      ]      
    }];
    return {cars};
  }
}
