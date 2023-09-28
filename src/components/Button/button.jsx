import { createTheme } from '@mui/material/styles';
import { orange, deepOrange } from '@mui/material/colors';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Buttons(props) {
  const navigate = useNavigate()
	return (
		<Button
			type={props.type}
			variant={props.variant}
			fullWidth={props.fullWidth}
			sx={{ mt: 3, mb: 2 }}
        	onClick={() => navigate('/back')}
		>
		{props.label}
		</Button>
	)
}

export default Buttons;