import { useState } from 'react'
import Values from 'values.js'
import SingleColor from './components/SingleColor'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleChange = (event) => {
    setColor(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    try {
      setError(false)
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            name="color"
            value={color}
            onChange={handleChange}
            className={`${error ? 'error' : null}`}
          ></input>
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
