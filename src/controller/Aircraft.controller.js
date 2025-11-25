import AircraftService from "../services/Aircraft.service.js";

class AircraftController {
  constructor() {
    this.service = new AircraftService();
  }

  getAircraft = async (req, res) => {
    const aircraft = await this.service.getAircrafts();
    try {
      res.status(200).json({
        status: "success",
        message: "Ok.",
        data: aircraft,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        data: error,
      });
    }
  };

  postAircraft = async (req, res) => {
    const aircraft = req.body;
    const data = await this.service.postAircraft(aircraft);
    try {
      res.status(200).json({
        status: "Success",
        message: "It was added correctly.",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: "Error",
        data: error,
      });
    }
  };

  deleteAircraft = async (req, res) => {
    const { id } = req.params;
    const data = await this.service.deleteAircraft(id);
    try {
      res.status(200).json({
        status: "Success",
        message: "It was successfully removed.",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: "Error",
        data: error,
      });
    }
  };
}

export default AircraftController;
