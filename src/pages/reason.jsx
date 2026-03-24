import { useNavigate } from "react-router-dom"
import MultiSelect from "../Components/multiselect.jsx"

export default function Reason() {
    console.log("Reason is opened") /* bp */
    const navigate = useNavigate()
    const reasons = ["Hobby", "Study", "Culture", "Music", "Travel", "Vocals"]
    return (
        <div>
        <MultiSelect 
        options={reasons}
        title="Why are you learning language?"
        />

        <button onClick={() => navigate("/onboarding/languages")}>CONTINUE</button>
        </div>
    )
}