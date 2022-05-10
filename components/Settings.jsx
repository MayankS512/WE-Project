import { useState } from 'react'

export const Settings = () => {
  const [pfp, setPfp] = useState(null)
  const [error, setError] = useState(null)

  const handleFile = (e) => {
    setPfp(null)
    const selected = e.target.files[0]
    
    if (!selected) {
      setError('No file selected')
      return
    }

    if (!selected.type.includes('image')) {
      setError('File must be an image')
      return
    }

    if (selected.size > 100000) {
      setError('File must be less than 100kb')
      return
    }

    setError(null)
    setPfp(selected)
  }
  return (
    <>
      <input required type="file" onChange={handleFile} />
      {error && <p className='text-red-800'>{error}</p>}
    </>
  )
}
