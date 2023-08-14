import { dirname } from "path";
import { fileURLToPath } from "url";
import { deflate } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;
 