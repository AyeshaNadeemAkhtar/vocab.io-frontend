import Signup from "./createSession"
import Login from "./login"
import { useNavigate } from "react-router-dom"


export default function IntroPage() {
    const navigate = useNavigate()
    return (
        <>
        <button onClick={() => navigate("/signup")}>SignUp</button>
        <button onClick={() => navigate("/signup")}>Login</button>
       
        </>
    )
}