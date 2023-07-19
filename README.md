<div align="center">
  <a href="https://era.zksync.io"><img alt="zkSync Era Scaffold" src="https://raw.githubusercontent.com/0xrhsmt/scaffold-era/main/docs/assets/icon.png" width=160></a>
  <br />
  <br />
</div>

This is a [zkSync Era](https://era.zksync.io/docs/) + [wagmi](https://wagmi.sh) + [RainbowKit](https://www.rainbowkit.com/) + [Hardhat](https://hardhat.org/) + [NextJs](https://nextjs.org/docs) project.

## ⚠️ Note
After the BUIDLera Hackathon has ended, changes have been made to this repository. If you want to refer to the state of the repository at the time the hackathon ended, please refer to the following branch.

https://github.com/0xrhsmt/scaffold-era/tree/hackathon-submission

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

3. Start the frontend with `pnpm run dev`

   ```sh
   pnpm run dev
   ```

4. Open [localhost:3000](http://localhost:3000) in your browser.

   ```sh
   open http://localhost:3000
   ```

## Generate ABIs & React Hooks

This project includes the `@wagmi/cli` by default, allowing you to create wagmi-compatible (type safe) ABIs & React Hooks directly from your terminal.

To produce these ABIs & Hooks, follow the procedures below.

## Generate code

To generate ABIs for your contracts from your Hardhat project (in `./packages/contracts`), you can run:

```sh
cd ./packages/contracts
pnpm run build
```

This will compile your contracts.

Next, to generate React Hooks from your app project (in `./packages/app`), you can run:

```sh
cd ./packages/app
pnpm exec wagmi generate
```

## Deploy contract to zkSyncTestnet

You can now deploy your contract!

```sh
cd ./packages/contracts
pnpm run deploy
```

## Learn more

- [zkSync Era](https://era.zksync.io/docs/)
- [Rainbow Kit](https://www.rainbowkit.com/)
- [wagmi Documentation](https://nextjs.org/docs)
- [@wagmi/cli Documentation](https://wagmi.sh/cli)
- [NextJs](https://nextjs.org/docs/ ) – learn about Vite features and API.
