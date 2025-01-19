import { useEffect, useState } from "react"

export function Para({param1, children , classe}) {

    const [visualColor, setVisualColor] = useState('black')
    useEffect(()=> {
         parseFloat(param1) >= 0 ? setVisualColor('#0BB35D') : setVisualColor('#FC0000') 
    }, [param1])

  return  (
    <>
    < td className={classe} style={{color: visualColor}}>
        {children}
    </td>
    </>
  )
}
