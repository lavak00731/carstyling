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
            "colors": [
              { 
                "color": "blue hood",
                "url": "assets/van/45/45-hoodblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone hood",
                "url": "assets/van/45/45-hoodbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver hood",
                "url": "assets/van/45/45-hoodliver.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "45",
            "part": "roof",
            "colors": [
              {
                "color": "blue roof",
                "url": "assets/van/45/45-roofblue.png",
                "isSelected": false
              },
              {
                "color": "bone roof",
                "url": "assets/van/45/45-roofbone.png",
                "isSelected": false
              }, 
              { 
                "color": "liver roof",
                "url": "assets/van/45/45-roofliver.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "45",
            "part": "sides",
            "colors": [
              {
                "color": "blue sides",
                "url": "assets/van/45/45-sidesblue.png",
                "isSelected": false
              },
              {
                "color": "bone sides", 
                "url": "assets/van/45/45-sidesbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver sides",
                "url": "assets/van/45/45-sidesliver.png",
                "isSelected": false
              }
            ]
          }
        ],
        [
          {
            "name": "back",
            "part": "back",
            "colors": [
              {
                "color": "blue back",
                "url": "assets/van/back/backblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone back",
                "url": "assets/van/back/backbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver back",
                "url": "assets/van/back/backliver.png",
                "isSelected": false
              }
            ]
          }  
        ],
        [
          {
            "name": "front",
            "part": "hood",
            "colors": [
              {
                "color": "blue hood",
                "url": "assets/van/front/front-hoodblue.png",
                "isSelected": false 
              },
              {
                "color": "bone hood",
                "url": "assets/van/front/front-hoodbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver hood",
                "url": "assets/van/front/front-hoodliver.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "front",
            "part": "roof",
            "colors": [
              {
                "color": "blue roof",
                "url": "assets/van/front/front-roofblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone roof",
                "url": "assets/van/front/front-roofbone.png",
                "isSelected": false
              }, 
              { 
                "color": "liver roof",
                "url": "assets/van/front/front-roofliver.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "front",
            "part": "sides",
            "colors": [
              {
                "color": "blue sides",
                "url": "assets/van/front/front-sidesblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone sides",
                "url": "assets/van/front/front-sidesbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver sides",
                "url": "assets/van/front/front-sidesliver.png",
                "isSelected": false
              }
            ]
          }
        ],
        [
          {
            "name": "left",
            "part": "sides",
            "colors": [
              {
                "color": "blue sides",
                "url": "assets/van/left/left-blue.png",
                "isSelected": false
              }, 
              {
                "color": "bone sides",
                "url": "assets/van/left/left-bone.png",
                "isSelected": false
              }, 
              {
                "color": "liver sides", 
                "url": "assets/van/left/left-liver.png",
                "isSelected": false
              }
            ]
          }
        ],
        [
          {
            "name": "right",
            "part": "sides",
            "colors": [
              {
                "color": "blue sides",
                "url": "assets/van/right/right-blue.png",
                "isSelected": false
              }, 
              {
                "color": "bone sides",
                "url": "assets/van/right/right-bone.png",
                "isSelected": false
              }, 
              {
                "color": "liver sides",
                "url": "assets/van/right/right-liver.png",
                "isSelected": false
              }
            ]
          }
        ],
        [
          {
            "name": "top",
            "part": "hood",
            "colors": [
              {
                "color": "blue hood",
                "url": "assets/van/top/top-hoodblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone hood",
                "url": "assets/van/top/top-hoodbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver hood",
                "url": "assets/van/top/top-hoodliver.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "top",
            "part": "roof",
            "colors": [
              {
                "color": "blue roof",
                "url": "assets/van/top/top-roofblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone roof",
                "url": "assets/van/top/top-roofbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver roof",
                "url": "assets/van/top/top-roofliver.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "top",
            "part": "sides",
            "colors": [
              {
                "color": "blue sides",
                "url": "assets/van/top/top-sidesblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone sides",
                "url": "assets/van/top/top-sidesbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver sides",
                "url": "assets/van/top/top-sidesliver.png",
                "isSelected": false
              }
            ]
          }
        ]
      ],
      "features": [
        {
          "option": "hood", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "price": 0, "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "price": 15, "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "price": 20, "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "price": 25, "isDefault": false}
          ]
        },
        {
          "option": "sides", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "price": 0, "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "price": 15, "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "price": 20, "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "price": 25, "isDefault": false}
          ]
        },
        {
          "option": "back", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "price": 0, "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "price": 15, "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "price": 20, "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "price": 25, "isDefault": false}
          ]
        },        
        {
          "option": "roof", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "price": 0, "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "price": 15, "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "price": 20, "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "price": 25, "isDefault": false}
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
            "colors": [
              { 
                "color": "blue hood",
                "url": "assets/bigvan/45/hood-blue45.png",
                "isSelected": false
              }, 
              {
                "color": "bone hood",
                "url": "assets/bigvan/45/hood-bone45.png",
                "isSelected": false
              }, 
              {
                "color": "liver hood",
                "url": "assets/bigvan/45/hood-liver45.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "45",
            "part": "roof",
            "colors": [
              {
                "color": "blue roof",
                "url": "assets/bigvan/45/roof-blue45.png",
                "isSelected": false
              },
              {
                "color": "bone roof",
                "url": "assets/bigvan/45/roof-bone45.png",
                "isSelected": false
              }, 
              { 
                "color": "liver roof",
                "url": "assets/bigvan/45/roof-liver45.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "45",
            "part": "sides",
            "colors": [
              {
                "color": "blue sides",
                "url": "assets/bigvan/45/side-blue45.png",
                "isSelected": false
              },
              {
                "color": "bone sides", 
                "url": "assets/bigvan/45/side-bone45.png",
                "isSelected": false
              }, 
              {
                "color": "liver sides",
                "url": "assets/bigvan/45/side-liver45.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "45",
            "part": "front",
            "colors": [
              {
                "color": "blue front",
                "url": "assets/bigvan/45/front-blue45.png",
                "isSelected": false
              },
              {
                "color": "bone front", 
                "url": "assets/bigvan/45/front-bone45.png",
                "isSelected": false
              }, 
              {
                "color": "liver front",
                "url": "assets/bigvan/45/front-liver45.png",
                "isSelected": false
              }
            ]
          }
        ],
        [
          {
            "name": "back",
            "part": "back",
            "colors": [
              {
                "color": "blue back",
                "url": "assets/bigvan/back/backblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone back",
                "url": "assets/bigvan/back/backbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver back",
                "url": "assets/bigvan/back/backliver.png",
                "isSelected": false
              }
            ]
          }  
        ],
        [
          {
            "name": "front",
            "part": "hood",
            "colors": [
              {
                "color": "blue hood",
                "url": "assets/bigvan/front/front-hoodblue.png",
                "isSelected": false 
              },
              {
                "color": "bone hood",
                "url": "assets/bigvan/front/front-hoodbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver hood",
                "url": "assets/bigvan/front/front-hoodliver.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "front",
            "part": "roof",
            "colors": [
              {
                "color": "blue roof",
                "url": "assets/bigvan/front/front-roofblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone roof",
                "url": "assets/bigvan/front/front-roofbone.png",
                "isSelected": false
              }, 
              { 
                "color": "liver roof",
                "url": "assets/bigvan/front/front-roofliver.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "front",
            "part": "sides",
            "colors": [
              {
                "color": "blue sides",
                "url": "assets/bigvan/front/front-sidesblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone sides",
                "url": "assets/bigvan/front/front-sidesbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver sides",
                "url": "assets/bigvan/front/front-sidesliver.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "front",
            "part": "front",
            "colors": [
              {
                "color": "blue front",
                "url": "assets/bigvan/front/front-blue.png",
                "isSelected": false
              }, 
              {
                "color": "bone front",
                "url": "assets/bigvan/front/front-bone.png",
                "isSelected": false
              }, 
              {
                "color": "liver front",
                "url": "assets/bigvan/front/front-sidesliver.png",
                "isSelected": false
              }
            ]
          }
        ],
        [
          {
            "name": "left",
            "part": "sides",
            "colors": [
              {
                "color": "blue sides",
                "url": "assets/bigvan/left/left-blue.png",
                "isSelected": false
              }, 
              {
                "color": "bone sides",
                "url": "assets/bigvan/left/left-bone.png",
                "isSelected": false
              }, 
              {
                "color": "liver sides", 
                "url": "assets/bigvan/left/left-liver.png",
                "isSelected": false
              }
            ]
          }
        ],
        [
          {
            "name": "right",
            "part": "sides",
            "colors": [
              {
                "color": "blue sides",
                "url": "assets/bigvan/right/right-blue.png",
                "isSelected": false
              }, 
              {
                "color": "bone sides",
                "url": "assets/bigvan/right/right-bone.png",
                "isSelected": false
              }, 
              {
                "color": "liver sides",
                "url": "assets/bigvan/right/right-liver.png",
                "isSelected": false
              }
            ]
          }
        ],
        [
          {
            "name": "top",
            "part": "hood",
            "colors": [
              {
                "color": "blue hood",
                "url": "assets/bigvan/top/top-hoodblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone hood",
                "url": "assets/bigvan/top/top-hoodbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver hood",
                "url": "assets/bigvan/top/top-hoodliver.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "top",
            "part": "roof",
            "colors": [
              {
                "color": "blue roof",
                "url": "assets/bigvan/top/top-roofblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone roof",
                "url": "assets/bigvan/top/top-roofbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver roof",
                "url": "assets/bigvan/top/top-roofliver.png",
                "isSelected": false
              }
            ]
          },
          {
            "name": "top",
            "part": "sides",
            "colors": [
              {
                "color": "blue sides",
                "url": "assets/bigvan/top/top-sidesblue.png",
                "isSelected": false
              }, 
              {
                "color": "bone sides",
                "url": "assets/bigvan/top/top-sidesbone.png",
                "isSelected": false
              }, 
              {
                "color": "liver sides",
                "url": "assets/bigvan/top/top-sidesliver.png",
                "isSelected": false
              }
            ]
          }
        ]
      ],
      "features": [
        {
          "option": "front",
          "colors": [
            {"colorName": "white", "color": "#FFF", "price": 0, "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "price": 15, "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "price": 20, "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "price": 25, "isDefault": false}
          ]
        },
        {
          "option": "hood", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "price": 0, "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "price": 15, "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "price": 20, "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "price": 25, "isDefault": false}
          ]
        },
        {
          "option": "sides", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "price": 0, "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "price": 15, "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "price": 20, "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "price": 25, "isDefault": false}
          ]
        },       
        {
          "option": "back", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "price": 0, "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "price": 15, "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "price": 20, "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "price": 25, "isDefault": false}
          ]
        },        
        {
          "option": "roof", 
          "colors": [
            {"colorName": "white", "color": "#FFF", "price": 0, "isDefault": true },
            {"colorName": "blue", "color": "#247BA0", "price": 15, "isDefault": false},
            {"colorName": "bone", "color": "#E0DDCF", "price": 20, "isDefault": false},
            {"colorName": "liver", "color": "#534B52", "price": 25, "isDefault": false}
          ]
        }        
      ]      
    }];
    return {cars};
  }
}
