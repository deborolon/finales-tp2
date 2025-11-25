import AircraftFactory from "../models/DAO/Dao.factory.js";

class AircraftService {
  constructor() {
    this.model = AircraftFactory.create(process.env.PERSISTENCE);
  }

  getAircrafts = async () => {
    const aircraft = await this.model.getAircrafts();
    return aircraft;
  }

  postAircraft = async (prod) => {
    const aircraft = await this.model.postAircraft(prod);
    return aircraft;
  }

  deleteAircraft = async (id) => {
    const aircraft = await this.model.deleteAircraft(id);
    return aircraft;
  }
}

export default AircraftService;
