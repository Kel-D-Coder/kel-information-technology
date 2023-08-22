import '../Styles/Button.css'
import { useNavigate } from "react-router-dom";

export const Button = () => {
    const navigate = useNavigate()
    return (
      <div>
        <div className="btn">
          <button onClick={() => navigate('/About')} className='aboutBtn' >About Us</button>
        </div>
      </div>
    );
}