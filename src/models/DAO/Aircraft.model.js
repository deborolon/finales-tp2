class AircraftModelClases {
  constructor() {
    this.aircrafts = [
      { id: "AAB123", xa: 7500, ya: 6200, za: 1000 },
      { id: "BBG456", xa: 8000, ya: 7000, za: 1200 },
    ];
  }

  calculateDistance = (aircraft1, aircraft2) => {
    const dx = aircraft1.xa - aircraft2.xa;
    const dy = aircraft1.ya - aircraft2.ya;
    const dz = aircraft1.za - aircraft2.za;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  };

  checkCollisions = (newAircraft) => {
    const collisionIds = [];

    if (this.aircrafts.length === 0) {
      return collisionIds;
    }

    for (const aircraft of this.aircrafts) {
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
    const allAircrafts = await this.aircrafts;
    return allAircrafts;
  };

  postAircraft = async (aircraft) => {
    const { id, xa, ya, za } = aircraft;

    const index = this.aircrafts.findIndex((e) => e.id === id);

    const collisions = this.checkCollisions(aircraft);

    if (index !== -1) {
      this.aircrafts[index] = { id, xa, ya, za };
    } else {
      this.aircrafts.push({ id, xa, ya, za });
    }

    return {
      aircraft: { id, xa, ya, za },
      collisions: collisions,
    };
  };

  deleteAircraft = async (id) => {
    const index = this.aircrafts.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.aircrafts.splice(index, 1);
      return "El vuelo fue eliminado correctamente.";
    }
    return "El vuelo no existe.";
  };
}

export default AircraftModelClases;
