import server from "server";
import request from "supertest";

describe("server", () => {
  it("[GET] / for the server", () => {
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
  it("* test for forbidden routes", () => {
    return (
      request(server)
        .get("*")
        .expect(200)
        .expect("Content-Type", /json/)
        .then(res => {
          expect(res.body).toEqual(`Sorry, no such route, try again!`);
        })
    );
  });
});
