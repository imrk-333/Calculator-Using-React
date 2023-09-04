import React, { useState } from 'react'

function Calculator() {
        const[result,setResult]=useState("")


      const backspace=() => {
        try{
            setResult(result.slice(0, -1))

          }
          catch(error) {
            setResult('')
            
          }
      }


      const calculate=() =>{
        try {
          setResult(eval(result));
          
        } catch (error) {
          setResult("Error")
        }
      }
     

  return (
    <div>
      <>
  <link rel="stylesheet" href="./Calculator.css" />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <table id="calcu">
      <div className="heading">
        <h1 className="heading" >Calculator</h1>
      </div>
    <tbody>
      <tr>
        <td colSpan={3}>
          <input onChange={(e)=>setResult(e.target.value)} type="text" value={result} />
        </td>
        <td>
          <input onClick={()=> backspace()} type="button" defaultValue="c" />
        </td>
      </tr>
      <tr>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue={1} />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue={2} />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue={3} />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue="/" />
        </td>
      </tr>
      <tr>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue={4} />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue={5} />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue={6} />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue="*" />
        </td>
      </tr>
      <tr>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue={7} />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue={8} />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue={9} />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue="-" />
        </td>
      </tr>
      <tr>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue={0} />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue="." />
        </td>
        <td>
          <input onClick={()=>calculate()} type="button" defaultValue="=" />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue="+" />
        </td>
        
      </tr> 
      <tr>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue="%" />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue="18%" />
        </td>
        <td>
          <input onClick={()=>calculate()} type="button" defaultValue="28%" />
        </td>
        <td>
          <input onClick={(e)=>setResult(result+ e.target.value)} type="button" defaultValue="3%" />
        </td>
        
      </tr> 
    </tbody>
  </table>
</>

    </div>
  )
}

export default Calculator
