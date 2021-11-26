import './App.css';
import {  useSelector } from 'react-redux'
import './App.css';
import { useState } from 'react';
import React from 'react'
function App() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [Result, setResult] = useState(0)
  const [Marks, setMarks] = useState(0)

  // setQuestionIndex((e) => {
  //   e.target.value()
  // })
  const nextQuestion = (() => {
    if (state.length - 1 == questionIndex) {
      setResult(true)
    }
    else {
      setQuestionIndex(questionIndex + 1)
    }
  })
  const change = (a, b) => {
    if (a == b) {
      setMarks(Marks + 1)
    }
    nextQuestion()
  }
console.log(questionIndex);
  const state = useSelector((quiz)=>quiz)
  console.log(state);
  return (
    <>
      {!Result ?
        <div className="App">
          <div className="app2">
            <div className="app3">
              <div className="app4">
                {state.map((e, i) => {
                  return (questionIndex === i) ? (
                    <div className="question" key={i}>
                      <h5 className="h5">{e.question}</h5>
                    </div>
                  ) : null
                })}
              </div>
              
              <div className="child">
                {state.map((e, i) => {
                  return (questionIndex === i) ? (
                    e.options.map((a, b) => {
                      return (
                        <div className="question3" key={b}>
                          <button className="btn" onClick={() => change(e.answer, a)}>{a}</button>
                        </div>
                      )
                    })
                  ) : null
                })}
              </div>
            </div>
          </div>
          <div >
            <button disabled onClick={nextQuestion} variant="contained">next</button>

          </div>
        </div>
        :
        <div className="marks">
          <h1 setMarks >{Marks}</h1>
        </div>
      }
    </>
  );
}

export default App


