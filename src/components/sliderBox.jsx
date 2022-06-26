import './styles/sliderBox.css';
import { Slider, Box } from '@mui/material';

function SliderBox() {
	return (
		<>
			<div class='btn-group' role='group' aria-label='Basic example'>
				<button type='button' class='Female'>
					Female
				</button>
				<button type='button' class='Male'>
					Male
				</button>
				<text class="coming-soon-male">* coming soon</text>
				<button type='button' class='Genderless'>
					Genderless
				</button>
				<text class="coming-soon-genderless">* coming soon</text>
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
					<Slider defaultValue={30} color='secondary' sx={{ pt: 0, pb: 6.5 }} />
					<text class='height-text'>Height</text>
					<Slider defaultValue={30} color='secondary' sx={{ pt: 0, pb: 6.5 }} />
					<text class='weight-text'>Weight</text>
					<Slider defaultValue={30} color='secondary' sx={{ pt: 0, pb: 6.5 }} />
					<text class='chest-text'>Chest</text>
					<Slider defaultValue={30} color='secondary' sx={{ pt: 0, pb: 6.5 }} />
					<text class='waist-text'>Waist</text>
					<Slider defaultValue={30} color='secondary' sx={{ pt: 0, pb: 6.5 }} />
					<text class='hips-text'>Hips</text>
					<Slider defaultValue={30} color='secondary' sx={{ pt: 0, pb: 6.5 }} />
					<text class='inseam-text'>Inseam</text>
					<Slider defaultValue={30} color='secondary' sx={{ pt: 0, pb: 6.5 }} />
					<text class='exercise-text'>Exercise</text>
				</Box>
			</div>
		</>
	);
}

export { SliderBox };
