# durian.js

## What is durian.js?
I believe that [NestJS](https://github.com/nestjs/nest) is the most powerful and efficient API development framework on Node.js.

durian.js builds on the strengths of NestJS, running on [Bun](https://github.com/oven-sh/bun), and is designed with speed in mind — both in development and runtime performance.

## How fast is durian.js?
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

## How to use durian.js
It's simple, just run
```bash
bun create mario-huang/durian.js
```
After that, you can continue using NestJS as usual.

## Migrate from NestJS to durian.js
This is the best part, you don't need to modify any source code!
Simply replace your `package.json` and `tsconfig.json` with the ones from durian.js.