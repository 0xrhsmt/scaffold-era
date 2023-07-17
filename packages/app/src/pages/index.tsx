import { Inter } from 'next/font/google'
import cn from 'classnames'

import Greeter from '@/components/Greeter';
import DevStacks from '@/components/DevStacks';
import Hero from '@/components/Hero';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={cn('flex min-h-screen flex-col items-center justify-between p-24', inter.className)}>
      <Header className='mb-16' />

      <Hero className='mb-16' />

      <Greeter className='mb-16' />

      <DevStacks className='mb-16' />
    </main>
  )
}
