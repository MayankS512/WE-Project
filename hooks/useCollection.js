import { useEffect, useState } from "react"
import { db } from '../firebase/config.js'
import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { useRef } from "react"

export const useCollection = (c = "messages", _q, _w) => {
  const [documents, setDocuments] = useState(null)

  const q = useRef(_q).current
  const w = useRef(_w).current

  useEffect(() => {
    let ref = collection(db, c)

    if (q) {
      ref = query(ref, orderBy(...q))
    }

    if (w) {
      ref = query(ref, where(...w))
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => results.push({...doc.data(), id: doc.id}))
      setDocuments(results)
    })

    return () => unsub()
  }, [c, q])
  
  return { documents }
}
