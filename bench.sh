hyperfine --warmup 3 'cd ./nest && npm run build' 'cd ./durian && bun run build'
hyperfine --warmup 3 'cd ./nest && npm run start' 'cd ./durian && bun run start'
hyperfine --warmup 3 'cd ./nest && npm run build' 'cd ./durian && bun run build'
