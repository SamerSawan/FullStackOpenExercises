import React from 'react'

const Header = (props) => {
    return (
      <h1>{props.course.name}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
          {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
      </div>
    )
  }
  
  const Total = (props) => {
      var total = 0
      props.parts.map(part => total += part.exercises)
    return (
      <p>
        <b>total of {total} exercises</b>
      </p>
    )
  }

const Course = ({course}) => {
    return (
        <div>
            <Header course={course}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course