const request = require("supertest");
const App = require("../App");
const mongoose = require("mongoose");
const User = require("../models/User");
const Task = require("../models/task");

let token, taskId;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany({});
  await Task.deleteMany({});

  await request(App).post("/api/auth/register").send({
    username: "testuser",
    password: "testpassword",
  });

  const res = await request(App).post("/api/auth/login").send({
    username: "testuser",
    password: "testpassword",
  });

  token = res.body.token;
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Task API", () => {
  it("should create a task", async () => {
    const res = await request(App)
      .post("/api/tasks")
      .set("x-auth-token", token)
      .send({ title: "Test Task", description: "Testing", priority: "High", status: "Pending" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    taskId = res.body._id;
  });

  it("should retrieve a task", async () => {
    const res = await request(App).get(`/api/tasks/${taskId}`).set("x-auth-token", token);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(taskId);
  });

  it("should return 404 for non-existent task", async () => {
    const res = await request(App).get(`/api/tasks/64c4f6e8d3a5b4b210c4f1a7`).set("x-auth-token", token);
    expect(res.statusCode).toBe(404);
  });

  it("should require authorization", async () => {
    const res = await request(App).get("/api/tasks");
    expect(res.statusCode).toBe(401);
  });
});
