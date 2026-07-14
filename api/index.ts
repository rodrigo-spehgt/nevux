import path from "path";
import { createRequire } from "module";

const serverPath = path.resolve(process.cwd(), "dist/server.js");
const require = createRequire(import.meta.url);
const { default: app } = require(serverPath);

export default app;
