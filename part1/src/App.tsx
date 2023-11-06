import './App.css'

function App() {
  const now = new Date();
  const a = 10
  const b = 5
  console.log(now, a + b)
  return (
    <div>
      <p>Hello Team ! it is {now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
    </div>
  )
}

export default App
