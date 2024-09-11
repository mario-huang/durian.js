hyperfine --warmup 3 'cd ./nest && npm run build' 'cd ../ && bun run build'
hyperfine --warmup 3 'cd ./nest && isDurianBench=true npm run start' 'cd ../ && isDurianBench=true bun run start'
hyperfine --warmup 3 'cd ./nest && npm run test' 'cd ../ && bun run test'
hyperfine --warmup 3 'cd ./nest && npm run test:cov' 'cd ../ && bun run test:cov'

oha -z 10s http://localhost:3000