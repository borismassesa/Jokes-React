import React from "react"

export default function Jokes({setup, punchline}){
  return (
    <div>
      {setup &&<h3>Setup: {setup}</h3>}
      <p>Punchline: {punchline}</p>
      <hr/>
    </div>

  )
}