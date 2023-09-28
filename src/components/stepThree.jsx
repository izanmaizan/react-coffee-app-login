import '../index.css'
import { useNavigate } from 'react-router-dom';


const StepThree = () => {
	const navigate = useNavigate()

	return (
		<>
			<div className="st-3container">
				<div className="main">
					
					<h1 className="h1">Kenikmatan Kopi</h1>
					<span>Dekap hangat kopi, menyisir rindu dan menenun kenangan</span>
					<div className="scroll">
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="active-dot"></div>
					</div>
					<div className="options">
						<button className="next" onClick={() => navigate('/sign-in')}>Next</button>
						<button className="skip" onClick={() => navigate('/sign-in')}>Skip</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default StepThree