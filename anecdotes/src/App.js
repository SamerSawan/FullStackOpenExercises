import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}> {text} </button>
  )
}

const Block = ({text, selected, points, anecdotes}) => {
  return (
    <div>
      <h1>{text}</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
    </div>
  )
  
}

function indexOfMax(points) {
  var max = points[0]
  var maxIndex = 0

  for (var i = 1; i < Object.keys(points).length; i++) {
    if (points[i] > max) {
      maxIndex = i;
      max = points[i]
    }
  }

  return maxIndex
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(7))

  const copy = { ...points }

  return (
    <div>
      <Block text="Anecdote of the Day" selected={selected} points={points} anecdotes={anecdotes}/>
      <Button onClick={() => {copy[selected] += 1
      setPoints(copy)}} text={"vote"}/>
      <Button onClick={() => setSelected(Math.floor(Math.random() * (6 - 0 + 1)) + 0)} text={"next anecdote"}/>
      <Block text="Anecdote with most votes" selected={indexOfMax(points)} points={points} anecdotes={anecdotes}/>
    </div>
  )
}

export default App