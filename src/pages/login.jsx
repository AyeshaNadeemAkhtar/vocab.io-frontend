import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
    return (
        <form>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />

          <label for="pwd">Password</label>
          <input type="password" id="pwd" name="password" />

          <button onClick={() => navigate("/dashboard")}>Login</button>
        </form>
    )
}