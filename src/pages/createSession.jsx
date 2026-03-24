import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function createSession() {
    const navigate = useNavigate()
    const [mode, setMode] = useState("signup")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async(e) => {
        setLoading(true)
        setError(null)

        try {
            let data
            if (mode === "signup") {
                data = await signup(email, password)
            } else {
                data = await login(email, password)
            }
        }
        catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h2>{mode === "signup" ? "Sign Up" : "Login"}</h2>
        
            <form onSubmit={handleSubmit}>
                { mode === "signp" && 
                <label htmlFor="name">Name
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                    />
                 </label>
                }

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

                <label htmlFor="pwd">Password</label>
                <input 
                    type="password" 
                    id="pwd" 
                    name="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />

                <button type="submit" disabled={loading} onClick={() => navigate("/onboarding/reason")}>
                    {loading ? "Processing..." : mode === "signup" ? "SignUp" : "Login"}</button>
            </form>
         </div>
    )
    
}