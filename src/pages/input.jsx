import { useState } from "react"
import Sidebar from "../Components/sidebar.jsx"
import { useNavigate } from "react-router-dom"


export default function Input() {
  const [topic, setTopic] = useState("")
  const [response, setResponse] = useState("")
  const navigate = useNavigate()

  async function handleAsk() {
    const res = await fetch("http://localhost:5000/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic })
    })

    const data = await res.json()
    setResponse(data.response)
    

  }
    return (
        <div className="input-panel">
          <Sidebar />
          <div className="input-main">
            <h1>Input/Generate Text</h1>
            <div className="input-enter-part">
              <div className="input-buttons">
                <button className="input" >Input Text</button>
                <button className="generate">Generate text with AI</button>
              </div>
              <textarea 
                  value={topic}
                  onChange={e => setTopic(e.target.value)}
                  placeholder="Enter your prompt" 
              />
            </div>
              <button onClick={handleAsk} className="prompt-button">Prompt</button>
              { response && <p>{response}</p>}
          </div>
        </div>
    )
   
}

// Input API key = AIzaSyAIMFe8oxiuDCkfTtcNPBE7wnvhlyhDKWA