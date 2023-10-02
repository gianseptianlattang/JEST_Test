const supertest = require("supertest");
require("dotenv").config();

const api = supertest("https://apingweb.com/api");

export const register = (body) =>
  api
    .post("/register")
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .send(body);

export const login = (body) =>
  api
    .post("/login")
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .send(body);

export const forgotPassword = (body) =>
  api
    .post("/forgot-password")
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .send(body);

export const resetPassword = (body) =>
  api
    .post("/reset-password")
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .send(body);
