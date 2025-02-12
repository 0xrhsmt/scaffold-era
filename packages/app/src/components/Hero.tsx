import cn from 'classnames'
import Image from 'next/image'

type Props = {
  className?: string
}
const Hero = ({ className }: Props) => {
  return (
    <div className={cn("relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]", className)}>
      <Image
        className="relative mr-3"
        src="/icon.png"
        alt="Scaffold Era Logo"
        width={45}
        height={45}
        priority
      />
      <h1 className="mx-2 text-3xl font-semibold">Scaffold Era</h1>
    </div>
  )
}
export default Hero