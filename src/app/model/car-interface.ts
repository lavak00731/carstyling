export interface CarInterface {
  id: number,
  cardata: {
    Name: string,
    Miles_per_Gallon: number,
    Cylinders: number,
    Horsepower: number,
    Weight_in_lbs: number,
    Acceleration: number,
    Year: string,
    Origin: string,
    picture: string
  },
  base: [
    {url: string, description: string},
    {url: string, description: string},
    {url: string, description: string},
    {url: string, description: string},
    {url: string, description: string},
    {url: string, description: string}
  ],
  pictures: {
    45: {
      hood: Array < string > ,
      roof: Array < string > ,
      sides: Array < string > ,
      front ? : Array < string >
    },
    back: Array < string >,
    front: {
      hood: Array < string > ,
      roof: Array < string > ,
      sides: Array < string >
      front ? : Array < string > ,
    },
    left: Array < string >,
    right: Array < string >,
    top: {
      hood: Array < string > ,
      roof: Array < string > ,
      sides: Array < string >
    }
  },
  features: {
    hood: Array < string > ,
    back: Array < string > ,
    sides: Array < string > ,
    roof: Array < string > ,
    front ? : Array < string >
  }
}
