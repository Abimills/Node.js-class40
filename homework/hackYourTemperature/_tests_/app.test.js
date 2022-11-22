import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);




describe("POST /", () => {
  it("Quick test", () => {
    expect(1).toBe(1);
  });
});

describe("POST/weather", () => {
  describe("given a city name", () => {
test("should respond with a 200 status code", async() => {
  const response = await  request.post("/weather").send({
    cityName : "city"
  })
  expect(response.statusCode).toBe(200);
})
test("should specify the content type in the response", async() => {
  const response = await  request.post("/weather").send({
    cityName : "city"
  })
  expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
})
test("weatherText should be specified in the  response", async() => {
  const response = await  request.post("/weather").send({
    cityName : "city"
  })
  expect(response.body.weatherText).toBeDefined();
})
})
})
describe("when city name is empty", () => {
  
test("should respond with status code of 400", async() => {

  const response = await request.post("/weather").send()
  expect(response.statusCode).toBe(400);
})


  test("have to respond with status code 400", async() => {
      const response = await  request.post("/weather").send({
        
        })
      
      expect(response.body.weatherText).toBeDefined();
  
  })
})