import React, {useState} from 'react'
import Square from './Square'

function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXturn, setIsXTurn] = useState(true)
    function handleClick(index) {
        if(state[index]){
            return
        }
        const copiedState = [...state]
        isXturn ? copiedState[index] = "X" : copiedState[index] = "0"
        setState(copiedState)
        setIsXTurn(!isXturn)
    }
    const checkWinner = ()=>{
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
            ]
            for (const logic of winnerLogic) {
                const [a, b, c] = logic
                if (state[a]!==null && state[a]===state[b] && state[b]===state[c]){
                    return true
                }
            }
            return false
    }
    const isWinner = checkWinner()

    
    // const drawLogic=()=>{
    //     if(for (const iterator of state) {
            
    //     })
    //     return true
    // }

if(isWinner){
    return(
        <>
        {(isXturn?<>Player 0 is Winner</>:<>Player X is Winner</>)}
        </>
    )
  }

// if(){
//     return <>Draw</>
//   }

if(state.includes(null)){
   return(
    <>
   <div className="board-container m-14">
  <div className="board-row flex">
      <Square onClick ={ ()=>handleClick(0)} value = {state[0]}/>
      <Square onClick ={ ()=>handleClick(1)} value = {state[1]}/>
      <Square onClick ={ ()=>handleClick(2)} value = {state[2]}/>
  </div>
  <div className="board-row flex">
      <Square onClick ={ ()=>handleClick(3)} value = {state[3]}/>
      <Square onClick ={ ()=>handleClick(4)} value = {state[4]}/>
      <Square onClick ={ ()=>handleClick(5)} value = {state[5]}/>
  </div>
  <div className="board-row flex">
      <Square onClick ={ ()=>handleClick(6)} value = {state[6]}/>
      <Square onClick ={ ()=>handleClick(7)} value = {state[7]}/>
      <Square onClick ={ ()=>handleClick(8)} value = {state[8]}/>
  </div>
</div>
</>)
  }
  else{
    return (
    <>
        <div className='flex flex-col m-20 gap-10'>
            <h1 className=' font-mono font-bold text-3xl ml-6'>!! Draw !!</h1> 
            <h1 className=' font-mono font-bold text-3xl ml-6'>It's a Tie 😏</h1>
            <img src="https://i.imgflip.com/1trn1e.jpg?a476784" className='w-60 border-4 rounded-xl border-green-500' alt="" />
        </div>
    </>
)
}
  
    
  
}

export default Board