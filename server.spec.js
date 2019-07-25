import server from "./server";
import request from "supertest";

describe("server", () => {
  it("[GET] / for the successful server response", () => {
    return (
      request(server)
        .get("/")
        .expect(200)
        .expect("Content-Type", /json/)
        .then(res => {
          expect(res.body).toEqual({ message: 'Welcome AUTH API'});
        })
    );
  });
});
