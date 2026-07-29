import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete portfolio structure", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Mark Yang — Developer Portfolio<\/title>/i);
  assert.match(html, /<header[^>]*>/i);
  assert.match(html, /<main[^>]*>/i);
  assert.match(html, /<footer[^>]*>/i);
  for (const section of [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ]) {
    assert.match(html, new RegExp(`id="${section}"`));
  }
  assert.match(
    html,
    /<h1[^>]*><span>Mark Yang<\/span><\/h1>/,
  );
  assert.doesNotMatch(html, /Hi, I(?:&#x27;|')m/);
  assert.match(html, /Computer Science Student/);
  assert.match(
    html,
    /Artificial Intelligence · Computer Vision · Software Engineering/,
  );
  assert.match(
    html,
    /Exploring intelligent systems through computer vision, artificial intelligence and thoughtful software engineering\./,
  );
  assert.match(html, /aria-label="Back to top"[^>]*><span[^>]*>↑<\/span>/);
  assert.match(html, /View projects/i);
  assert.match(html, /Let(?:&#x27;|')s build something meaningful\./i);
  assert.match(html, /© <!-- -->\d{4}<!-- --> Mark/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton/);
});

test("keeps content data-driven and starter artifacts removed", async () => {
  const [page, layout, packageJson, projects, skills] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../data/projects.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/skills.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /projects/);
  assert.match(page, /skillGroups/);
  assert.match(projects, /satisfies readonly Project\[\]/);
  assert.match(skills, /satisfies readonly SkillGroup\[\]/);
  assert.match(layout, /title:\s*siteConfig\.title/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
});
