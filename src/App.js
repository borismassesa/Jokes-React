import React from "react"
import "./style.css"
import Jokes from "./components/jokes"
import JokesData from "./components/jokesData"

export default function App(){
  const jokeElements = JokesData.map(joke => {
    return <Jokes setup={joke.setup} punchline={joke.punchline}/>
  })
  return (
    <div>
      {jokeElements}
      
    </div>
  )
}

{
  
  
  /* <Jokes 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />

      <Jokes
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />

      <Jokes
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />

      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />

      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />

    <Jokes
       punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
    />   */}