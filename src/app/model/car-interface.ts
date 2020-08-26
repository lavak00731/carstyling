export interface CarInterface {
  "id": number,
  "cardata": {
    "Name": string,
    "Miles_per_Gallon": number,
    "Cylinders": number,
    "Horsepower": number,
    "Weight_in_lbs": number,
    "Acceleration": number,
    "Year": string,
    "Origin": string,
    "picture": string
  },
  "pictures": {
    "45": {
      "base": string,
      "hood": Array < string > ,
      "roof": Array < string > ,
      "sides": Array < string > ,
      "front" ? : Array < string >
    },
    "back": {
      "base": string,
      "back": Array < string >
    },
    "front": {
      "base": string,
      "hood": Array < string > ,
      "roof": Array < string > ,
      "sides": Array < string >
        "front" ? : Array < string > ,
    },
    "left": {
      "base": string,
      "left": Array < string >
    },
    "right": {
      "base": string,
      "right": Array < string >
    },
    "top": {
      "base": string,
      "hood": Array < string > ,
      "roof": Array < string > ,
      "sides": Array < string >
    }
  },
  "features": {
    "hood": Array < string > ,
    "back": Array < string > ,
    "sides": Array < string > ,
    "roof": Array < string > ,
    "front" ? : Array < string >
  }
}
