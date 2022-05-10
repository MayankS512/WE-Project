const User = ({ user, status = "" }) => {
  return (
    <div className={`select-none flex items-center w-full p-2 m-1 ${status}`}>
      <img src={user.avatar} className='w-10 h-10 ml-2 rounded-full pointer-events-none ' />
      <p className='ml-3'>{user.username}</p>
    </div>
  )
}

export default User