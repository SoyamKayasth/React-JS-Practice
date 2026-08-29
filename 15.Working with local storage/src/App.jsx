import './App.css'

function App() {
  let data = [{
           id: 1,
           name: "Soyam"   

        }, 
      {
        id: 2,
        name: "Nitesh"

 } ];

  return (
    <>
      <h1>hello</h1>



      {
        localStorage.setItem("data", JSON.stringify(data))
      }

    </>
  )
}

export default App
