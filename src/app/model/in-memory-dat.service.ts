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
      "base": {
        "45": "assets/van/45/45base.jpg",
        "back": "assets/van/back/backbase.jpg",
        "front": "assets/van/front/frontbase.jpg",
        "left": "assets/van/left/leftbase.jpg",
        "right": "assets/van/right/rightbase.jpg",
        "top": "assets/van/top/topbase.jpg"
      },
      "pictures": {
        "45": {
          "hood": ["assets/van/45/45-hoodblue.png", "assets/van/45/45-hoodbone.png", "assets/van/45/45-hoodliver.png"],
          "roof": ["assets/van/45/45-roofblue.png", "assets/van/45/45-roofbone.png", "assets/van/45/45-roofliver.png"],
          "sides": ["assets/van/45/45-sidesblue.png", "assets/van/45/45-sidesbone.png", "assets/van/45/45-liver.png"]
        },
        "back": ["assets/van/back/backblue.png", "assets/van/back/backbone.png", "assets/van/back/backliver.png"],
        "front": {
          "hood": ["assets/van/front/front-hoodblue.png", "assets/van/front/front-hoodbone.png", "assets/van/front/front-hoodliver.png"],
          "roof": ["assets/van/front/front-roofblue.png", "assets/van/front/front-roofbone.png", "assets/van/front/front-roofliver.png"],
          "sides": ["assets/van/front/front-sidesblue.png", "assets/van/front/front-sidesbone.png", "assets/van/front/front-sidesliver.png"]
        },
        "left": ["assets/van/left/left-blue.png", "assets/van/left/left-bone.png", "assets/van/left/left-liver.png"],
        "right":  ["assets/van/right/right-blue.png", "assets/van/right/right-bone.png", "assets/van/right/right-liver.png"],
        "top": {
          "hood": ["assets/van/top/top-hoodblue.png", "assets/van/top/top-hoodbone.png", "assets/van/top/top-hoodliver.png"],
          "roof": ["assets/van/top/top-roofblue.png", "assets/van/top/top-roofbone.png", "assets/van/top/top-roofliver.png"],
          "sides": ["assets/van/top/top-sidesblue.png", "assets/van/top/top-sidesbone.png", "assets/van/top/top-sidesliver.png"]
        }
      },
      "features": {
        "front": ["#247BA0", "#E0DDCF", "#534B52"],
        "hood": ["#247BA0", "#E0DDCF", "#534B52"],
        "back": ["#247BA0", "#E0DDCF", "#534B52"],
        "sides": ["#247BA0", "#E0DDCF", "#534B52"],
        "roof": ["#247BA0", "#E0DDCF", "#534B52"]
      }
  
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
      "base": {
        "45": "assets/bigvan/45/45base.jpg",
        "back": "assets/bigvan/back/backbase.jpg",
        "front": "assets/bigvan/front/frontbase.jpg",
        "left": "assets/bigvan/left/leftbase.jpg",
        "right": "assets/bigvan/right/rightbase.jpg",
        "top": "assets/bigvan/top/topbase.jpg" 
      },
      "pictures": {
        "45": {
          "hood": ["assets/bigvan/45/hood-blue45.png", "assets/bigvan/45/hood-bone45.png", "assets/bigvan/45/hood-liver45.png"],
          "roof": ["assets/bigvan/45/roof-blue45.png", "assets/bigvan/45/roof-bone45.png", "assets/bigvan/45/roof-liver45.png"],
          "sides": ["assets/bigvan/45/side-blue45.png", "assets/bigvan/45/side-bone45.png", "assets/bigvan/45/side-liver45.png"],
          "front": ["assets/bigvan/45/front-blue45.png", "assets/bigvan/45/front-bone45.png", "assets/bigvan/45/front-liver45.png"]
        },
        "back": ["assets/bigvan/back/backblue.png", "assets/bigvan/back/backbone.png", "assets/bigvan/back/backliver.png"],
        "front": {
          "hood": ["assets/bigvan/front/front-hoodblue.png", "assets/bigvan/front/front-hoodbone.png", "assets/bigvan/front/front-hoodliver.png"],
          "roof": ["assets/bigvan/front/front-roofblue.png", "assets/bigvan/front/front-roofbone.png", "assets/bigvan/front/front-roofliver.png"],
          "sides": ["assets/bigvan/front/front-sidesblue.png", "assets/bigvan/front/front-sidesbone.png", "assets/bigvan/front/front-sidesliver.png"],
          "front": ["assets/bigvan/front/front-blue.png", "assets/bigvan/front/front-bone.png", "assets/bigvan/front/front-liver.png"]
        },
        "left": ["assets/bigvan/left/left-blue.png", "assets/bigvan/left/left-bone.png", "assets/bigvan/left/left-liver.png"],
        "right": ["assets/bigvan/right/right-blue.png", "assets/bigvan/right/right-bone.png", "assets/bigvan/right/right-liver.png"],
        "top": {
          "hood": ["assets/bigvan/top/top-hoodblue.png", "assets/bigvan/top/top-hoodbone.png", "assets/bigvan/top/top-hoodliver.png"],
          "roof": ["assets/bigvan/top/top-roofblue.png", "assets/bigvan/top/top-roofbone.png", "assets/bigvan/top/top-roofliver.png"],
          "sides": ["assets/bigvan/top/top-sidesblue.png", "assets/bigvan/top/top-sidesbone.png", "assets/bigvan/top/top-sidesliver.png"]
        }
      },
      "features": {
        "hood": ["#247BA0", "#E0DDCF", "#534B52"],
        "back": ["#247BA0", "#E0DDCF", "#534B52"],
        "sides": ["#247BA0", "#E0DDCF", "#534B52"],
        "roof": ["#247BA0", "#E0DDCF", "#534B52"],
        "front": ["#247BA0", "#E0DDCF", "#534B52"]
      }
      
    }];
    return {cars};
  }
}
