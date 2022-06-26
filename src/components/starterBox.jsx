import './styles/starterBox.css';
import GradientButton from 'react-linear-gradient-button';

function Uploads() {
	return (
		<>
			<div className='starter-box'>
				<div className='starter-pack'>
					<text>Starter Pack</text>
				</div>
				<div className='select-text'>
					<text>
						Select items you'd like to try-on
					</text>
				</div>
				<div class="box1" />
				<div class="box2" />
				<div class="box3" />
				<div class="box4" />
				<div class="box5" />
				<div class="box6" />
				<div class="box7" />
				<div class="box8" />
				<div class="box9" />
			</div>
			<div className='Try-On'>
				<GradientButton theme='Azure Pop' color='#FF4AED' fontSize='18px'>
					Try On
				</GradientButton>
			</div>
		</>
	);
}

export { Uploads };
