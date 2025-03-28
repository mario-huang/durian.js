# Durian.js

## 什么是 Durian.js？
我们相信[NestJS](https://github.com/nestjs/nest)是Node.js生态中最强大高效的API开发框架。

Durian.js基于NestJS构建，运行在[Bun](https://github.com/oven-sh/bun)运行时上，专为极致速度而设计——无论是开发效率还是运行时性能。

## 性能基准
- 开发速度: durian.js 的开发效率可达 NestJS 的 16 倍

| 构建 | 启动 |
| --- | --- |
| ![image](https://github.com/user-attachments/assets/61b1b40a-7ab5-45bd-ae8c-a5e13fce85a2) | ![image](https://github.com/user-attachments/assets/a5d0fb1a-f601-48e7-b390-5446796409c4) |

| 测试 | 覆盖率测试 |
| --- | --- |
| ![image](https://github.com/user-attachments/assets/92f5f98f-1055-424d-8df0-76cd13b1aa8c) | ![image](https://github.com/user-attachments/assets/d267ceec-e531-41a6-be30-49d7e0318875) |

- 运行时性能: durian.js 的吞吐量可达 NestJS 的 4 倍，每秒处理超过 60,000 次请求（NestJS 为 15,000 次），同时将平均响应时间从 0.0033 秒降低到 0.0008 秒

| NestJS | durian.js |
| --- | --- |
| ![image](https://github.com/user-attachments/assets/56e3a836-0178-45c5-a900-df6f0664a21f) | ![image](https://github.com/user-attachments/assets/0cc7b5a9-ec6e-407f-ac4a-5a674bb7ad11) |

## 快速开始
创建新项目：
```bash
bun create mario-huang/durian.js my-project
```
该命令会创建包含最新Durian.js模板的`my-project`目录，您可以继续使用NestJS的所有功能，同时享受Bun的速度优势。

## 迁移指南
最佳部分是——无需修改源代码！迁移现有NestJS项目只需：

1. 备份当前`package.json`和`tsconfig.json`
2. 替换为Durian.js的版本
3. 运行`bun install`更新依赖

在保持NestJS完全兼容的同时，获得Bun的性能提升。
