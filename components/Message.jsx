const Message = ({ children, from, avatar, at }) => {
  // console.log(at.toDate())
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#instance_methods
  return (
    <div>
      <div className='flex items-center w-full p-2 m-1'>
        <img src={avatar} className='w-10 h-10 ml-2 rounded-full pointer-events-none select-none' />
        <p className="text-sm text-zinc-300"><span className='ml-3 text-lg text-white'>{from}</span> {at && `at ${at.toDate().toLocaleString()}`}</p>
      </div>
      <div className='ml-6 mr-2'>{children}</div>
    </div>
  )
}

export default Message