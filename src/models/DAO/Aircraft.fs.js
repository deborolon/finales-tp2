import fs from "fs";

class AircraftFsClases {
  constructor() {
    this.filePath = "./aircrafts.json";
    this.initializeFile();
  }

  initializeFile = async () => {
    try {
      await fs.promises.access(this.filePath);
    } catch {
      await fs.promises.writeFile(this.filePath, JSON.stringify([], null, 2));
    }
  };

  calculateDistance = (aircraft1, aircraft2) => {
    const dx = aircraft1.xa - aircraft2.xa;
    const dy = aircraft1.ya - aircraft2.ya;
    const dz = aircraft1.za - aircraft2.za;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  };

  checkCollisions = (newAircraft, aircrafts) => {
    const collisionIds = [];

    if (aircrafts.length === 0) {
      return collisionIds;
    }

    for (const aircraft of aircrafts) {
      if (aircraft.id === newAircraft.id) {
        continue;
      }

      const distance = this.calculateDistance(newAircraft, aircraft);

      if (distance < 500) {
        collisionIds.push(aircraft.id);
      }
    }

    return collisionIds;
  };

  getAircrafts = async () => {
    const data = await fs.promises.readFile(this.filePath, "utf-8");
    return JSON.parse(data);
  };

  postAircraft = async (aircraft) => {
    const { id, xa, ya, za } = aircraft;

    const aircrafts = await this.getAircrafts();

    const index = aircrafts.findIndex((e) => e.id === id);

    const collisions = this.checkCollisions(aircraft, aircrafts);

    if (index !== -1) {
      aircrafts[index] = { id, xa, ya, za };
    } else {
      aircrafts.push({ id, xa, ya, za });
    }

    await fs.promises.writeFile(
      this.filePath,
      JSON.stringify(aircrafts, null, 2)
    );

    return {
      aircraft: { id, xa, ya, za },
      collisions: collisions,
    };
  };

  deleteAircraft = async (id) => {
    const aircrafts = await this.getAircrafts();
    const index = aircrafts.findIndex((e) => e.id === id);

    if (index !== -1) {
      aircrafts.splice(index, 1);
      await fs.promises.writeFile(this.filePath, JSON.stringify(aircrafts, null, 2));
      return "El vuelo fue eliminado correctamente.";
    }

    return "El vuelo no existe.";
  };
}

export default AircraftFsClases;
