#!/usr/bin/env bun

import { $ } from "bun";

const command = process.argv[2];
switch (command) {
  case "build":
    await $`bun build --entrypoints ./src/main.ts --outdir ./dist --target bun --sourcemap=linked --packages external`;
    break;
  case "start":
    await $`bun run ./src/main.ts`;
    break;
  case "start:debug":
    await $`bun --inspect ./src/main.ts`;
    break;
  case "start:dev":
    await $`bun --watch run ./src/main.ts`;
    break;
  case "start:prod":
    await $`bun run ./dist/main.js`;
    break;
  case "compile":
    await $`bun build ./src/main.ts --sourcemap --compile --outfile main-bun`;
    break;
  case "compile:linux-x64":
    await $`bun build ./src/main.ts --target bun-linux-x64 --sourcemap --compile --outfile main-bun-linux-x64`;
    break;
  case "compile:linux-arm64":
      await $`bun build ./src/main.ts --target bun-linux-arm64 --sourcemap --compile --outfile main-bun-linux-x64`;
      break;
  case "compile:windows-x64":
    await $`bun build ./src/main.ts --target bun-windows-x64 --sourcemap --compile --outfile main-bun-windows-x64`;
    break;
  case "compile:darwin-x64":
    await $`bun build ./src/main.ts --target bun-darwin-x64 --sourcemap --compile --outfile main-bun-darwin-x64`;
    break;
  case "compile:darwin-arm64":
    await $`bun build ./src/main.ts --target bun-darwin-arm64 --sourcemap --compile --outfile main-bun-darwin-arm64`;
    break;
  case "test":
    await $`bun test`;
    break;
  case "test:watch":
    await $`bun test --watch`;
    break;
  case "test:cov":
    await $`bun test --coverage`;
    break;
  case "test:debug":
    await $`echo TODO`;
    break;
  case "test:e2e":
    await $`echo TODO`;
    break;
  default:
    console.log(`Invalid command: ${command}`);
}
