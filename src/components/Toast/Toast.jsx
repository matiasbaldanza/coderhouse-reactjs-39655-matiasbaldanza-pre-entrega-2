function Toast ({ ...props }) {
  return (
    <div className='z-10 toast toast-start'>
      <div className={props.className}>
        {props.children}
      </div>
    </div>
  )
}

export default Toast
