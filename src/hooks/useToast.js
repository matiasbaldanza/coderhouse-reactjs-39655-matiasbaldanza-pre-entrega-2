import { useState } from 'react'

const TOAST_DURATION = 3000

function useToast () {
  const [showToast, setShowToast] = useState(false)
  const showToastMessage = () => { setShowToast(true); setTimeout(() => setShowToast(false), TOAST_DURATION) }
  return { showToast, showToastMessage }
}

export default useToast
