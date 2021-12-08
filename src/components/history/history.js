import React from 'react'
import './history.scss'
export default function history(myProps) {

    return (
        
        <table>
            {myProps.history.map((a,b)=>{
                return(
                    <tr key={b+a.method+a.url}>
                        <td>{a.method}</td>
                        <td>{a.url}</td>
                    </tr>
                )
            })}
        </table>
    )
}
