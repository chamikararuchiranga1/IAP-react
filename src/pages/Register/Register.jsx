import { useNavigate } from "react-router-dom";

export default function Register () {

    const navigate = useNavigate();

    function goTo () {
        navigate('/login')
    }

    return(
        <div>
            <h1>Register</h1>
            <button onClick={goTo}>got to Login</button>
        </div>
    )
}