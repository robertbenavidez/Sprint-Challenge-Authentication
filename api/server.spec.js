const request = require('supertest');

const server = require('./server.js');

            
        
describe('CRUD Tests', () => {
    describe("auth-router tests", () => {
        describe("POST /api/auth/register", () => {
          it("should return a 201 created status", () => {
            return request(server)
              .post("/api/auth/register")
              .send({
                username: "mike",
                password: "final"
              })
              .then(res => {
                expect(res.status).toBe(201);
              });
          });
          it("should return a JSON object after creating a user", () => {
            return request(server)
              .post("/api/auth/register")
              .send({
                username: "Dave",
                password: "pass"
              })
              .then(res => {
                expect(res.type).toEqual("application/json");
              });
          });
        });
    })

    describe("POST /api/auth/login", () => {
        it("should return a 200 OK status", () => {
          return request(server)
            .post("/api/auth/login")
            .send({
              username: "Dave",
              password: "pass"
            })
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
        it("should return a JSON object", () => {
          return request(server)
            .post("/api/auth/login")
            .send({
              username: "Dave",
              password: "pass"
            })
            .then(res => {
              expect(res.type).toMatch(/json/);
            });
        });
    });

})
    
  