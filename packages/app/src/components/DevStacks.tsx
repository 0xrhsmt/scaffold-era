import cn from 'classnames'

export type Props = {
  className?: string
}

const devStacks = [
  {
    name: 'zkSync Era',
    description: 'Scaling the Ethos and technology of Ethereum',
    url: 'https://era.zksync.io/docs/',
  },
  {
    name: 'wagmi',
    description: 'React Hooks for Ethereum',
    url: 'https://wagmi.sh/',
  },
  {
    name: 'RainbowKit',
    description: 'The best way to connect a wallet',
    url: 'https://www.rainbowkit.com/',
  },
  {
    name: 'Hardhat',
    description: 'Ethereum development environment for professionals',
    url: 'https://hardhat.org/',
  }
]

export default function DevStacks({ className }: Props) {
  return (
    <div className={cn("grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left", className)}>
      {
        devStacks.map((stack, i) => (
          <a
            key={i}
            href={stack.url}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {stack.name}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {stack.description}
            </p>
          </a>
        ))
      }
    </div>
  )
}
