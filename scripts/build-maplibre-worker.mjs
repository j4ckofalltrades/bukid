import * as esbuild from "esbuild"
import { fileURLToPath } from "url"
import path from "path"

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))

await esbuild.build({
  entryPoints: [
    path.join(
      rootDir,
      "node_modules/maplibre-gl/dist/maplibre-gl-worker.mjs"
    ),
  ],
  bundle: true,
  format: "esm",
  outfile: path.join(rootDir, "src/vendor/maplibre-gl-worker.mjs"),
})
