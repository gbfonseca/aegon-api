import { Elysia } from "elysia";
import HealthController from "./modules/common/controller/HealthController";

const PORT = process.env.PORT || 3000;

const app = new Elysia().use(HealthController).listen(PORT);

console.log(`Running on http://localhost:${PORT}`);
