import './styles/sliderBox.css';
import { Slider, Box } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

{/*This is the sliderbox function that contains all the sliders and limits and gender buttons for the page*/}

function SliderBox() {
	// The units of measurement are in cm & kg
	const morphsMinLimit = {
		Height: 137,
		Weight: 27,
		Chest: 56,
		Waist: 38,
		Hips: 67,
		Inseam: 57,
		Exercise: 0,
	};
	const morphsMaxLimit = {
		Height: 199,
		Weight: 125,
		Chest: 139,
		Waist: 123,
		Hips: 146,
		Inseam: 99,
		Exercise: 20,
	};
	const [minValues] = useState(morphsMinLimit);
	const [maxValues] = useState(morphsMaxLimit);

	return (
		<>
			<div id='Demo' class='btn-group' role='group' aria-label='Basic example'>
				<Link to='/'>
					<button type='button' class='Female'>
						Female
					</button>
				</Link>
				<Link to='/male'>
					<button type='button' class='Male'>
						Male
					</button>
				</Link>
				{/* <text class='coming-soon-male'>* coming soon</text> */}
				<button type='button' class='Genderless'>
					Genderless
				</button>
				<text class='coming-soon-genderless'>* coming soon</text>
			</div>
			<div>
				<input
					type='range'
					min='0'
					max='100'
					value='0'
					class='skin-color-slider'
					id='myRange'
				/>
				<text class='skin-color-text'>Skin Color</text>
				<Box sx={{ width: 225 }}>
					<text class='height-text'>Height</text>
					<Slider
						valueLabelDisplay='auto'
						defaultValue={164}
						min={minValues['Height']}
						max={maxValues['Height']}
						color='secondary'
						sx={{ pt: 0, pb: 6.5 }}
					/>
					<text class='height-measurement'>(cm)</text>
					<text class='weight-text'>Weight</text>
					<Slider
						valueLabelDisplay='auto'
						defaultValue={64}
						min={minValues['Weight']}
						max={maxValues['Weight']}
						color='secondary'
						sx={{ pt: 0, pb: 6.5 }}
					/>
					<text class='weight-measurement'>(kg)</text>
					<text class='chest-text'>Chest</text>
					<Slider
						valueLabelDisplay='auto'
						defaultValue={93}
						min={minValues['Chest']}
						max={maxValues['Chest']}
						color='secondary'
						sx={{ pt: 0, pb: 6.5 }}
					/>
					<text class='chest-measurement'>(cm)</text>
					<text class='waist-text'>Waist</text>
					<Slider
						valueLabelDisplay='auto'
						defaultValue={76}
						min={minValues['Waist']}
						max={maxValues['Waist']}
						color='secondary'
						sx={{ pt: 0, pb: 6.5 }}
					/>
					<text class='waist-measurement'>(cm)</text>
					<text class='hips-text'>Hips</text>
					<Slider
						valueLabelDisplay='auto'
						defaultValue={102}
						min={minValues['Hips']}
						max={maxValues['Hips']}
						color='secondary'
						sx={{ pt: 0, pb: 6.5 }}
					/>
					<text class='hips-measurement'>(cm)</text>
					<text class='inseam-text'>Inseam</text>
					<Slider
						valueLabelDisplay='auto'
						defaultValue={76}
						min={minValues['Inseam']}
						max={maxValues['Inseam']}
						color='secondary'
						sx={{ pt: 0, pb: 6.5 }}
					/>
					<text class='inseam-measurement'>(cm)</text>
					<text class='exercise-text'>Exercise</text>
					<Slider
						valueLabelDisplay='auto'
						defaultValue={1}
						min={minValues['Exercise']}
						max={maxValues['Exercise']}
						color='secondary'
						sx={{ pt: 0, pb: 6.5 }}
					/>
					<text class='exercise-measurement'>(Hr/Wk)</text>
				</Box>
			</div>
			<Link to="/">
				<button type="button" class="deploy-btn">
					Deploy
				</button>
			</Link>
		</>
	);
}

export { SliderBox };
