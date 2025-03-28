# Durian.js

## Durian.jsとは？
[NestJS](https://github.com/nestjs/nest) は Node.js で最も強力で効率的な API 開発フレームワークと考えています。

Durian.js は NestJS の強みを基に構築され、[Bun](https://github.com/oven-sh/bun) 上で動作し、開発速度と実行時パフォーマンスの両方を考慮して設計されています。

## パフォーマンスベンチマーク
- 開発速度：Durian.js は NestJS に比べて最大16倍の開発速度を実現

| build | start |
| --- | --- |
| ![image](https://github.com/user-attachments/assets/61b1b40a-7ab5-45bd-ae8c-a5e13fce85a2) | ![image](https://github.com/user-attachments/assets/a5d0fb1a-f601-48e7-b390-5446796409c4) |

| test | test:cov |
| --- | --- |
| ![image](https://github.com/user-attachments/assets/92f5f98f-1055-424d-8df0-76cd13b1aa8c) | ![image](https://github.com/user-attachments/assets/d267ceec-e531-41a6-be30-49d7e0318875) |

- 実行時パフォーマンス：Durian.js は NestJS の4倍のスループットを達成、NestJS の15,000リクエスト/秒に対し60,000リクエスト/秒を処理可能。平均応答時間も0.0033秒から0.0008秒に短縮

| NestJS | Durian.js |
| --- | --- |
| ![image](https://github.com/user-attachments/assets/56e3a836-0178-45c5-a900-df6f0664a21f) | ![image](https://github.com/user-attachments/assets/0cc7b5a9-ec6e-407f-ac4a-5a674bb7ad11) |

## はじめに
新しいプロジェクトを作成:
```bash
bun create mario-huang/durian.js my-project
```
これにより最新のDurian.jsテンプレートを含む`my-project`ディレクトリが作成されます。Bunの速度優勢を活かしつつNestJSを通常通り使用できます。

## 移行ガイド
ソースコード変更不要！既存のNestJSプロジェクトを移行:

1. 現在の`package.json`と`tsconfig.json`をバックアップ
2. Durian.jsのバージョンに置き換え
3. `bun install`で依存関係を更新

NestJS互換性を維持したままBunのパフォーマンスメリットを獲得できます。
