import { useState } from "react"

function App() {
  let [player1, setPlayer1] = useState(true)
  let [result, setResult] = useState("")
  let [player1Array, setPlayer1Array] = useState([0,0,0,0,0,0,0,0,0])
  let [player2Array, setPlayer2Array] = useState([0,0,0,0,0,0,0,0,0])
  let [boardArray, setBoardArray] = useState([0,0,0,0,0,0,0,0,0])

  let winningConditions = ["123", "456", "789", "147", "258", "369", "159", "357"]

  const handleClickBox = (clickedBox)=>{
    if(boardArray[clickedBox-1] !== clickedBox && !result){
      setPlayer1(!player1)

      if(player1){
        player1Array[clickedBox-1] = clickedBox
        boardArray[clickedBox-1] = clickedBox
        console.log(boardArray)

        winningConditions.map(condition=>{
          if(player1Array.join("").includes(condition[0])){
            if( player1Array.join("").includes(condition[1]) ){
              if(player1Array.join("").includes(condition[2])){
                setResult("player 1 is winner")
              }}}
        })
      } else{
        player2Array[clickedBox-1] = clickedBox
        boardArray[clickedBox-1] = clickedBox
  
        winningConditions.map(condition=>{
            if(player2Array.join("").includes(condition[0])){
              if( player2Array.join("").includes(condition[1]) ){
                if(player2Array.join("").includes(condition[2])){
                  setResult("player 2 is winner")
            }}}
        })
      }
      if(!boardArray.includes(0)){
        setResult("game over!")
      }
    }
  }

  const handleReset = ()=>{
    setPlayer1Array([0,0,0,0,0,0,0,0,0])
    setPlayer2Array([0,0,0,0,0,0,0,0,0])
    setBoardArray([0,0,0,0,0,0,0,0,0])
    setResult("")
  }
  
  return (
  <div className="bg-gray-800 text-white flex justify-center items-center h-screen">
    <div className="bg-gradient-to-br from-pink-900 to-purple-900 bg-gray-800 py-4 px-8 rounded shadow">
      <h1 className="text-3xl font-bold mb-8 text-center">Tic-Tac-Toe</h1>

      {/* Players */}
      <div className="flex justify-center gap-8">
        <div className="mb-4 block text-sm font-medium text-white bg-pink-500 py-2 px-8 rounded">
          Player-1 : X
        </div>
        <div className="mb-4 block text-sm font-medium text-white bg-blue-500 py-2 px-8 rounded">
          Player-2 : 0
        </div>
      </div>

      {/* Result */}
      <div className="mb-4">
        <label htmlFor="result" className="block text-[23px] font-medium text-yellow-300 uppercase">
          {`Result : ${result}`}
        </label>
      </div>

      {/* Playing Board */}
      <div className="grid grid-cols-3 gap-4">
        {boardArray.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClickBox(index + 1)}
            className={`bg-blue-500 flex items-center justify-center w-24 h-24 font-bold text-2xl ${
              (item !== 0 || result) ? 'cursor-not-allowed' : ''
            }`}
          >
            {item === player1Array[item - 1] ? 'X' : null}
            {item === player2Array[item - 1] ? 'O' : null}
          </div>
        ))}
      </div>

      {/* reset button */}
      <div onClick={handleReset} className="mt-8 mb-4 block text-sm font-medium text-center text-white bg-green-500 p-2 rounded">
          RESET
      </div>
    </div>
  </div>
  )
}

export default App
