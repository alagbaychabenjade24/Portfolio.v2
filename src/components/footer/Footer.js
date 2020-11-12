import React from 'react';

import './Footer.scss';
import './Footer-media.scss';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__copyright'>
				<div className='top'>
					<span>Manly Developed by</span>
				</div>

				<div className='bottom'>
					<span className='name'>
						<a
							href='https://github.com/alagbaychabenjade24'
							target='_blank'
							rel='noreferrer'
						>
							Chaben Alagbay{' '}
						</a>
					</span>
					🤟
				</div>
			</div>

			<div className='footer--btns'>
				<a
					href='mailto:alagbaychabenjade24@gmail.com'
					target='_blank'
					rel='noreferrer'
				>
					EMAIL
				</a>

				<a
					href='https://github.com/alagbaychabenjade24'
					target='_blank'
					rel='noreferrer'
				>
					GITHUB
				</a>

				<a
					href='https://www.linkedin.com/in/chabenjadealagbay/'
					target='_blank'
					rel='noreferrer'
				>
					LINKEDIN
				</a>
			</div>
		</div>
	);
}

export default Footer;
