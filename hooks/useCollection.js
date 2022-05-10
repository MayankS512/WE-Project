import { useEffect, useState } from "react"
import { db } from '../firebase/config.js'
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useRef } from "react"

export const useCollection = (c = "messages", _q) => {
  const [documents, setDocuments] = useState(null)

  const q = useRef(_q).current

  useEffect(() => {
    let ref = collection(db, c)

    if (q) {
      ref = query(ref, orderBy(...q))
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => results.push({...doc.data(), id: doc.id, createdAt: doc.createdAt}))
      setDocuments(results)
    })

    return () => unsub()
  }, [c, q])
  
  return { documents }
}
