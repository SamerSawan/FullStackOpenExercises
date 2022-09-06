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
  
  const Content = (props) => {
    return (
      <div>
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
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