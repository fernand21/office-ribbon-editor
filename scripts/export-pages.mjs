import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "pages-dist");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "dist", "client"), output, { recursive: true });

// vinext places generated assets inside the configured basePath directory.
// GitHub Pages already mounts this artifact at /office-ribbon-editor, so merge
// that directory into the artifact root to avoid duplicating the base path.
const nestedBasePath = path.join(output, "office-ribbon-editor");
await cp(nestedBasePath, output, { recursive: true, force: true });
await rm(nestedBasePath, { recursive: true, force: true });

const workerUrl = pathToFileURL(path.join(root, "dist", "server", "index.js"));
workerUrl.searchParams.set("pages", Date.now().toString());
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://fernand21.github.io/office-ribbon-editor/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static render failed: ${response.status}`);
await writeFile(path.join(output, "index.html"), await response.text(), "utf8");
await writeFile(path.join(output, ".nojekyll"), "", "utf8");
console.log(output);
