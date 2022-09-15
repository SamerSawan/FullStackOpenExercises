import {useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    if (persons.some(o => o.name === newName)) {
      alert(`${newName} is already in the phonebook`)
      setNewName('')
      return
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNumberChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person => 
      <li key={person.name}>{person.name}</li>
      )}
      </ul>
    </div>
  )
}

export default App
