import '../index.css'
import { useNavigate } from 'react-router-dom';


const StepOne = () => {
	const navigate = useNavigate()

	return (
		<>
			<div className="st-1container">
				<div className="main">
					
					<h1 className="h1">Estetika Kopi</h1>
					<span>Setiap Tegukan Kopi, Sebuah Perjalanan Menuju Alam Semesta Rasa</span>
					<div className="scroll">
						<div className="active-dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
					<div className="options">
						<button className="next" onClick={() => navigate('/steptwo')}>Next</button>
						<button className="skip" onClick={() => navigate('/sign-in')}>Skip</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default StepOne