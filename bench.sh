hyperfine --warmup 3 'cd ./nest && npm run build' 'cd ./durian && bun run build'
# hyperfine --warmup 3 'cd ./nest && isDurianBench=true npm run start' 'cd ./durian && isDurianBench=true bun run start'
# hyperfine --warmup 3 'cd ./nest && npm run test' 'cd ./durian && bun run test'
# hyperfine --warmup 3 'cd ./nest && npm run test:cov' 'cd ./durian && bun run test:cov'

# oha -z 10s http://localhost:3000