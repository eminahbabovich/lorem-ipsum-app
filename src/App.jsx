import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const number = parseInt(count)
    setText(data.slice(0, number))
  }

  return (
    <section className="section-center">
      <h4>Tired of boring Lorem Ipsum?</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <div>
          <label htmlFor="amount">Paragraphs: </label>
          <input
            type="number"
            name="number"
            id="amount"
            min="1"
            max="8"
            step="1"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
  )
}
export default App
