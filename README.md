# Durian.js

## What is Durian.js?
I believe that [NestJS](https://github.com/nestjs/nest) is the most powerful and efficient API development framework on Node.js.

Durian.js builds on the strengths of NestJS, running on [Bun](https://github.com/oven-sh/bun), and is designed with speed in mind — both in development and runtime performance.

## Performance Benchmarks
- Development Speed: durian.js can be up to 16 times faster than NestJS in development.

| build | start |
| --- | --- |
| ![image](https://github.com/user-attachments/assets/61b1b40a-7ab5-45bd-ae8c-a5e13fce85a2) | ![image](https://github.com/user-attachments/assets/a5d0fb1a-f601-48e7-b390-5446796409c4) |

| test | test:cov |
| --- | --- |
| ![image](https://github.com/user-attachments/assets/92f5f98f-1055-424d-8df0-76cd13b1aa8c) | ![image](https://github.com/user-attachments/assets/d267ceec-e531-41a6-be30-49d7e0318875) |

- Runtime Performance and Latency: durian.js achieves up to 4 times the throughput of NestJS, handling over 60,000 requests per second compared to NestJS’s 15,000, while also reducing average response times from 0.0033 seconds to 0.0008 seconds.

| NestJS | durian.js |
| --- | --- |
| ![image](https://github.com/user-attachments/assets/56e3a836-0178-45c5-a900-df6f0664a21f) | ![image](https://github.com/user-attachments/assets/0cc7b5a9-ec6e-407f-ac4a-5a674bb7ad11) |

## Getting Started
To create a new Durian.js project, run:
```bash
bun create mario-huang/durian.js my-project
```
This will create a new directory called `my-project` with the latest Durian.js template. You can then continue using NestJS as usual with Bun's speed advantages.

## Migration Guide
This is the best part - no source code modifications needed! To migrate an existing NestJS project:

1. Backup your current `package.json` and `tsconfig.json`
2. Replace them with the versions from Durian.js
3. Run `bun install` to update dependencies

You'll maintain full NestJS compatibility while gaining Bun's performance benefits.
