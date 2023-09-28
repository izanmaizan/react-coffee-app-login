import '../index.css'
import { useNavigate } from 'react-router-dom';


const StepTwo = () => {
	const navigate = useNavigate()

	return (
		<>
			<div className="st-2container">
				<div className="main">
					
					<h1 className="h1">Seduhan Kopi</h1>
					<span>Seduhanku, cerita tanpa kata yang di mana rasa bertemu jiwa</span>
					<div className="scroll">
						<div className="dot"></div>
						<div className="active-dot"></div>
						<div className="dot"></div>
					</div>
					<div className="options">
						<button className="next" onClick={() => navigate('/stepthree')}>Next</button>
						<button className="skip" onClick={() => navigate('/sign-in')}>Skip</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default StepTwo