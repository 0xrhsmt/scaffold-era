import { defineConfig } from '@wagmi/cli'
import { hardhat, react } from '@wagmi/cli/plugins'
import deployments from '@/configs/deployments';

export default defineConfig({
  out: 'src/hooks/wagmi/generated.ts',
  plugins: [
    hardhat({
      deployments,
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
