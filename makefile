
.PHONY: build deployCommands

build:;bun install

run:;bun run --hot src/index.ts

deployCommands:;node src/deploy-commands.ts