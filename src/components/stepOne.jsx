import '../index.css'

const StepOne = () => {
	return (
		<>
			<div className="st-1container">
				<div className="main">
					
					<h1>Estetika Kopi</h1>
					<span>Setiap Tegukan Kopi, Sebuah Perjalanan Menuju Alam Semesta Rasa</span>
					<div className="scroll">
						<div className="active-dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
					<div className="options">
						<button className="next">Next</button>
						<button className="skip">Skip</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default StepOne