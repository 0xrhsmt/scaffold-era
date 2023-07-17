import { useConnectModal } from '@rainbow-me/rainbowkit';

const ConnectModalButton = () => {
  const { openConnectModal } = useConnectModal();

  return (
    <button
      className="px-4 py-2 bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline hover:bg-blue-900"
      onClick={openConnectModal}>
      Connect Wallet
    </button>
  )
}

export default ConnectModalButton