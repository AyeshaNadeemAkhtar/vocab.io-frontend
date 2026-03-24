import { useNavigate } from "react-router-dom"
import MultiSelect from "../Components/multiselect"

export default function InterestedLanguages() {
    console.log("Languges are opened") /* bp */
    const navigate = useNavigate()
    const languages = ["English", "German", "Finnish", "Swedish", "Spanish", "Italian"]
    return (
        <div>
            <MultiSelect
            options={languages}
            title="What language interests you the most?" 
            />

            

       

        <button onClick={() => navigate("/dashboard")}>CONTINUE</button>
        </div>
    )
}