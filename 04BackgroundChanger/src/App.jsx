import { useState } from "react"


function App() {

  const [color , setcolor] = useState('black') 
 
  return (
    <>

     <div className="w-full h-screen duration-200"
     style={{backgroundColor : color}}
     >
      <div className="fixed flex flex-wrap justify-center  bottom-20 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-1 rounded-xl h-8">
          
          <button className="outline-none px-4 rounded-3xl text-white shadow-2xl"
          style={{backgroundColor:"red"}}
          onClick={() => setcolor("red")}
          // onclick wants callback function bcoz we can pass arguments in it 
          // but in reference we cannot pass argument so it is a syntatic issue
          >Red</button>

          <button className="outline-none px-4 rounded-3xl text-white shadow-2xl"
          style={{backgroundColor:"green"}}
          onClick={() => setcolor("green")}
          >Green</button>

          <button className="outline-none px-4 rounded-3xl text-white shadow-2xl"
          style={{backgroundColor:"orange"}}
          onClick={() => setcolor("orange")}
          >Orange</button>

          <button className="outline-none px-4 rounded-3xl text-white shadow-2xl"
          style={{backgroundColor:"Pink"}}
          onClick={() => setcolor("pink")}
          >Pink</button>

          <button className="outline-none px-4 rounded-3xl text-white shadow-2xl"
          style={{backgroundColor:"grey"}}
          onClick={() => setcolor("grey")}
          >grey</button>

          <button className="outline-none px-4 rounded-3xl text-white shadow-2xl"
          style={{backgroundColor:"yellow"}}
          onClick={() => setcolor("yellow")}
          >yellow</button>
        

          </div>

      </div>

        
      
     </div>
    </>
  )
}

export default App
