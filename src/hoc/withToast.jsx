import useToast from '../hooks/useToast'
import ToastComingSoon from '../components/ToastComingSoon/ToastComingSoon'

const withToast = (WrappedComponent) => {
  return (props) => {
    const showToast = useToast()

    return (
      <div>
        {showToast && <ToastComingSoon />}
        <WrappedComponent onClick={showToast} {...props} />
      </div>
    )
  }
}

export default withToast
