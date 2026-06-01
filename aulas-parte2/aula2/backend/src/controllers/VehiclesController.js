const cars = [{brand: "Fiat", name: "Uno"}, {brand: "Fiat", name: "Fiesta"}]

export class VehiclesController{
    static getCars(req, res){
        return res.status(200).send(cars)
    }
}