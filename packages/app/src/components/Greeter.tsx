import cn from 'classnames'
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useAccount, useBalance, useFeeData } from 'wagmi'

import { useGreeterGreet, usePrepareGreeterSetGreeting, useGreeterSetGreeting } from '@/hooks/wagmi/generated';
import { useIsMounted } from '@/hooks/useIsMounted';
import ConnectModalButton from '@/components/ConnectModalButton';

const feeUnits = 'gwei'
const submitButtonTextTypes = {
  idle: 'Send',
  loading: 'Sending...',
  success: 'Sent',
  error: 'Send',
}
const cacheTime = 500

type Props = {
  className?: string
}

const Greeter = ({ className }: Props) => {
  const [newGreeting, setNewGreeting] = useState<string>("");
  const { isReady } = useRouter()
  const { isConnected, address } = useAccount()
  const isMounted = useIsMounted()
  const balance = useBalance({ address, cacheTime });
  const fee = useFeeData({
    formatUnits: feeUnits,
    cacheTime
  })

  const { data: greeting } = useGreeterGreet({
    enabled: isReady,
    watch: true,
    cacheTime
  })

  const { config } = usePrepareGreeterSetGreeting({
    enabled: isReady && isConnected,
    args: [newGreeting],
  })
  const { writeAsync: setGreeting, status: setGreetingStatus, error: setGreetingError } = useGreeterSetGreeting(config)

  const submitDisabled = useMemo(() => !newGreeting || setGreetingStatus === 'loading', [newGreeting, setGreetingStatus])
  const submitButtonText = useMemo(() => submitButtonTextTypes[setGreetingStatus], [setGreetingStatus])

  const handleSubmit = useCallback(async () => {
    if (!setGreeting) return

    try {
      await setGreeting()
    } catch (error) {
      console.error(error)
    } finally {
      setNewGreeting("")
    }
  }, [setGreeting])

  if (!isMounted) {
    return
  }

  if (!isConnected) {
    return <ConnectModalButton />
  }

  return (
    <div className={cn("rounded-lg border border-transparent px-10 py-8 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30", className)}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Greeter</h1>

        <div className="w-full max-w-xs p-8 space-y-6">
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:outline-none focus:shadow-outline"
            id="new-greeting"
            type="text"
            autoFocus
            placeholder="Enter new greeting"
            onChange={(e) => setNewGreeting(e.target.value)}
            value={newGreeting}
          />

          <p className='text-sm opacity-50'>
            Current Value: {greeting}
          </p>

          <p className='text-sm opacity-50'>
            Wallet Balance: {balance.isLoading ? "⏳" : balance.error ? balance.error?.message : `${balance.data?.formatted} ${balance.data?.symbol}`}
          </p>

          <p className='text-sm opacity-50'>
            Fee data: {fee.isLoading && newGreeting.length > 0 ? "⏳" : fee.error ? fee.error.message : `${fee.data?.formatted.gasPrice} ${feeUnits}`}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            className={`px-4 py-2 bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline ${submitDisabled ? "opacity-50 cursor-default" : "hover:bg-blue-900"}`}
            disabled={submitDisabled}
            onClick={handleSubmit}
          >
            {submitButtonText}
          </button>
        </div>
        {
          setGreetingError && (
            <span className='mt-8 text-sm text-red-500 w-[300px] break-all	whitespace-break-spaces'>
              {setGreetingError?.message}
            </span>
          )
        }
      </div>
    </div>
  )
}
export default Greeter