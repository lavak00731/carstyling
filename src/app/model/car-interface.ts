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
  pictures: [
    [
      {name: string, part: string, colors: Array<object>},
      {name: string, part: string, colors: Array<object>},
      {name: string, part: string, colors: Array<object>},
      {name: string, part: string, colors: Array<object>}
    ],
    [
      {name: string, part: string, colors: Array<object>}
    ],
    [
      {name: string, part: string, colors: Array<object>},
      {name: string, part: string, colors: Array<object>},
      {name: string, part: string, colors: Array<object>},
      {name: string, part: string, colors: Array<object>}
    ],
    [
      {name: string, part: string, colors: Array<object>}
    ],
    [
      {name: string, part: string, colors: Array<object>}
    ],
    [
      {name: string, part: string, colors: Array<object>},
      {name: string, part: string, colors: Array<object>},
      {name: string, part: string, colors: Array<object>}
    ]
  ],
  features: [
    {option: string, colors: Array < object >, price: number, isDefault: boolean},
    {option: string, colors: Array < object >, price: number, isDefault: boolean},
    {option: string, colors: Array < object >, price: number, isDefault: boolean},
    {option: string, colors: Array < object >, price: number, isDefault: boolean},
    {option: string, colors: Array < object >, price: number, isDefault: boolean}
  ]
}
