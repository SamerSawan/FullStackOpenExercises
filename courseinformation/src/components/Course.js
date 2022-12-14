import React from 'react'

const Header = (props) => {
    return (
      <h2>{props.course.name}</h2>
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
      var total = props.parts.reduce((s, p) => {
        return s + p.exercises
      }, 0
      )
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