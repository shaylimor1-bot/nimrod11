import { useState } from "react"
function Lalin(){
    const[count, setCount]=useState(0)
    
    return(
        <>
    <button onClick={()=>setCount(count+1)}>press</button>
    <p>{count}</p>
    </>
    )
}
export default Lalin