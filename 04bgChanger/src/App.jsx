import {useState} from "react";

function App() {
  const [color,setColor] = useState("");
  return (
   
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2">
            <button  onClick={() => setColor("red")}
            className="outline-none px-4 py-1  rounded-full text-white  shadow-lg"
            style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1  rounded-full text-white  shadow-lg"
            style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() => setColor("blue")}  className="outline-none px-4 py-1  rounded-full text-white  shadow-lg"
            style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={() => setColor("pink")}  className="outline-none px-4 py-1  rounded-full text-white  shadow-lg"
            style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={() => setColor("purple")}  className="outline-none px-4 py-1  rounded-full text-white  shadow-lg"
            style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={() => setColor("fuchsia")}  className="outline-none px-4 py-1  rounded-full text-white  shadow-lg"
            style={{backgroundColor:"fuchsiae"}}>Fuchsia</button>
            <button onClick={() => setColor("#C20000")}  className="outline-none px-4 py-1  rounded-full text-white  shadow-lg"
            style={{backgroundColor:"#C20000"}}>Rose</button>
            <button onClick={() => setColor("teal")}  className="outline-none px-4 py-1  rounded-full text-white  shadow-lg"
            style={{backgroundColor:"teal"}}>Teal</button>
            <button onClick={() => setColor("indigo")}  className="outline-none px-4 py-1  rounded-full text-white  shadow-lg"
            style={{backgroundColor:"indigo"}}>Indigo</button>
            <button onClick={() => setColor("gray")}  className="outline-none px-4 py-1  rounded-full text-white  shadow-lg"
            style={{backgroundColor:"gray"}}>Gray</button>
            <button onClick={() => setColor("cyan")}  className="outline-none px-4 py-1  rounded-full text-white  shadow-lg"
            style={{backgroundColor:"cyan"}}>Cyan</button>
        </div>
      </div>
    </div>
       
    
  )
}

export default App
