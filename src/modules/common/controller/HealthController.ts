import Elysia from "elysia";

const HealthController = new Elysia().get("/health", () => {
  return {
    message: "I am Healthy",
    buildDate: process.env.BUILD_DATE,
  };
});

export default HealthController;
