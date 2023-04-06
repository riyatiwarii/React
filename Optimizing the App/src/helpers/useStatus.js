import { useEffect, useState } from "react"

const useStatus = () => {
    const [online, setOnline] = useState(true)

    useEffect(()=>{
      window.addEventListener("online", () => {
        setOnline(true)
      });
      window.addEventListener("offline", () => {
        setOnline(false)
      });
    }, [])

    return online
}

export default useStatus