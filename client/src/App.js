import './App.css';
import io from 'socket.io-client'
import { useState } from "react"
import Chat from './Chat';

const socket = io.connect("http://localhost:3001")

function App() {
const [userName, setUserName] = useState("")
const [room, setRoom] = useState("")

const joinRoom = () => {
  if(userName !== "" && room !== "") {
    socket.emit("join_room", room)
    
  }
}

  return (
    <div className="App">
      <h1>Chat</h1>
      <h3>Join A Chat</h3>
      <input type="text" placeholder="Your Name here" onChange={(event) => {setUserName(event.target.value)}}/>
      <input type="text" placeholder="Room ID..." onChange={(event) => {setRoom(event.target.value)}}/>
      <button onClick={joinRoom}>Join A Room</button>
      <Chat socket={socket} username={userName} room={room} />
    </div>
  );
}

export default App;
