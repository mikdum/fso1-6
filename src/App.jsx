import { useState } from 'react'
const StatisticsLine = ({ text, value }) => { return (<tr><td>{text}</td><td>{value}</td></tr>) }
const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad
  if (total === 0) return (<div> No feedback given</div>)

  const positive = good * 100 / total
  const average = (good - bad) / total

  return (<>
    <h1>statistics</h1>
    <table>
      <tbody>
        <StatisticsLine text='good' value={good} />
        <StatisticsLine text='neutral' value={neutral} />
        <StatisticsLine text='bad' value={bad} />
        <StatisticsLine text='all' value={total} />
        <StatisticsLine text='average' value={average} />
        <StatisticsLine text='positive' value={positive} />
      </tbody>
    </table>
  </>)
}
const Button = ({text, handleClick }) => {
  return (<button onClick={handleClick}>{text}</button>)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(prevState => prevState + 1)
  const increaseNeutral = () => setNeutral(prevState => prevState + 1)
  const increaseBad = () => setBad(prevState => prevState + 1)


  return (
    <div> <h1>give feedback</h1>
      <div>
        <Button text='good' handleClick={increaseGood} />
        <Button text='neutral' handleClick={increaseNeutral} />
        <Button text='bad' handleClick={increaseBad} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App