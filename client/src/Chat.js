import React, { useState, useEffect } from 'react'


function Chat({socket, userName, room}) {
  const [currentMessage, setCurrentMessage] = useState("")

  const sendMessage = async () => {
    if(currentMessage !== "") {
      const messageData = {
        room: room,
        author: userName,
        message: currentMessage,
        time: new Date(Date.now()),
      }
      await socket.emit("send_message", messageData)

    }
  }


  useEffect(() => {
    socket.on("receive_message", (data) => {
        console.log(data)
    })
  }, [socket]) 

  return (
    <div>
      <div className='chat-header'>
        <p>Live Chat</p>
      </div>
      <div className='chat-body'>

      </div>
      <div className='chat-footer'>
        <input type="text" onChange={(event) => {setCurrentMessage(event.target.value)}}/>
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chat