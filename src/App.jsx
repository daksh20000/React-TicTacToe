import Board from './Components/Board'
import Header from './Components/Header'

function App() {


  return (
    <>
      <Header/>
      <div className='game flex justify-center items-center'>
        <Board/>
      </div>
      
    </>
  )
}

export default App
