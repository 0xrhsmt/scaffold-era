<div align="center">
  <a href="https://era.zksync.io"><img alt="zkSync Era Scaffold" src="https://raw.githubusercontent.com/0xrhsmt/scaffold-era/main/docs/assets/icon.png" width=160></a>
  <br />
  <br />
</div>

This is a [zkSync Era](https://era.zksync.io/docs/) + [wagmi](https://wagmi.sh) + [RainbowKit](https://www.rainbowkit.com/) + [Hardhat](https://hardhat.org/) + [NextJs](https://nextjs.org/docs) project.

## ⚠️ Note
After the BUIDLera Hackathon has ended, changes have been made to this repository. If you want to refer to the state of the repository at the time the hackathon ended, please refer to the following branch.

https://github.com/0xrhsmt/scaffold-era/tree/hackathon-submission

## Live Demo

https://scaffold-app-omega.vercel.app/

## Demo Video

https://www.youtube.com/watch?v=GSAQHerLtTg

## Who is this for?

This starter is a great choice for any of the following groups:

- Hackers hacking on [zkSync Era](https://era.zksync.io/docs/)
- Hackers interested in using the most modern web3 full development stack.

## Getting Started

### Install Node and pnpm

Install Node.js. [See here](https://nodejs.org/en/download/).<br>
Note that you need Node.js at a later version than 18 and above.

Install pnpm. [See here](https://pnpm.io/installation/).<br>
Note that you need pnpm at a later version than 8 and above.


## Start the application

<img width="450" alt="screenshot" src="https://raw.githubusercontent.com/0xrhsmt/scaffold-era/main/docs/assets/screenshot.png">

1. Clone/fork the scaffold-era repo

   ```sh
   git clone https://github.com/0xrhsmt/scaffold-era.git
   ```

2. Install the necessary node packages:

   ```sh
   cd scaffold-era
   pnpm install
   ```

3. copy .env.example and edit .env

   ```sh
   cd packages/app
   cp .env.example .env
   <!-- edit .env -->
   ```

4. Start the frontend with `pnpm run dev`

   ```sh
   pnpm run dev
   ```

5. Open [localhost:3000](http://localhost:3000) in your browser.

   ```sh
   open http://localhost:3000
   ```

## local development

### Run local Hardhat node and deploy contracts

This project includes the `@wagmi/cli` by default, allowing you to create wagmi-compatible (type safe) ABIs & React Hooks directly from your terminal.

To produce these ABIs & Hooks, follow the procedures below.

1. run hardhat node

   ```sh
   cd packages/app
   pnpm run node:local
   ```

2. Deploy contracts

   ```sh
   pnpm run build
   pnpm run deploy:local
   ```

3. Deploy contracts

   ```sh
   cd packages/app

   <!-- Add the contract address to wagmi.config.ts -->

   pnpm exec wagmi generate
   ```

### Run app

1. Start the frontend with `pnpm run dev`

   ```sh
   cd packages/app
   pnpm run dev
   ```

## Deployments

### Deploy Contracts

You can now deploy your contract!

```sh
cd packages/contracts

cp .env.example .env
<!-- edit .env -->

pnpm run build
pnpm run deploy

cd ../app

<!-- Add the contract address to wagmi.config.ts -->
pnpm exec wagmi generate
```

### Deploy to Vercel

```sh
cd packages/app

pnpm exec vercel
pnpm exec vercel env add
pnpm exec vercel redeploy $DEPLOYMENT_URL
```

## Learn more

- [zkSync Era](https://era.zksync.io/docs/)
- [Rainbow Kit](https://www.rainbowkit.com/)
- [wagmi Documentation](https://nextjs.org/docs)
- [@wagmi/cli Documentation](https://wagmi.sh/cli)
- [NextJs](https://nextjs.org/docs/ ) – learn about Vite features and API.
