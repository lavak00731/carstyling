export interface CarSelectionBluePrint {
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
    selection: {
        hood: string,
        back: string,
        sides: string,
        roof: string,
        front ? : string
    }
}
