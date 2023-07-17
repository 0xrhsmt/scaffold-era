import { defineConfig } from '@wagmi/cli'
import { hardhat, react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'libs/contracts/generated.ts',
  plugins: [
    hardhat({
      commands: {
        clean: 'pnpm hardhat clean',
        build: 'pnpm hardhat compile',
        rebuild: 'pnpm hardhat compile',
      },
      artifacts: 'artifacts-zk/',
      include: [
        '*.json',
      ],
      exclude: [
        'build-info/**',
        '*.dbg.json',
      ],
      project: '../contracts',
    }),
    react()
  ],
})
