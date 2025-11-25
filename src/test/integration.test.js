import supertest from "supertest";
import { expect } from "chai";

const url = supertest("http://localhost:8080");

describe("Test de integracion de vuelos", () => {
  it("GET Aircrafts 200 -> ", async () => {
    const res = await url.get("/aircraft");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("object");
  });

  it("POST Aircrafts 200 -> ", async () => {
    const res = await url.post("/aircraft").send({
      id: "AAA123",
      xa: 1000,
      ya: 2000,
      za: 3000,
    });
    console.log(res.status);
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("object");
    expect(res.body.status).to.equal("Success");
  });
});
