import React from 'react';
import blueArrow from './blue-arrow.png';
import CJRes from './CJRes.pdf';

import './AboutMe.scss';
import './AboutMe-media.scss';

function AboutMe() {
	return (
		<section className='aboutMe'>
			<div className='aboutMe__title'>
				<h1>About Me</h1>
			</div>

			<div className='aboutMe__content'>
				<p className='aboutMe__content__intro'>
					I'm currently improving my coding skills. I've also designed
					websites as my side projects to enhance my knowledge to write
					readable code and improve my design skills since I'm specializing
					in front-end development.
				</p>

				<p className='aboutMe__content__experience'>
					I'm a part-time IT Instructor for Japanese students, where I help
					them learn how to write code and create websites that they can
					show off. Our lessons range from the foundations of web design to
					the deployment of a full-scale website using modern technology.
				</p>

				<p className='aboutMe__content__mission'>
					As a front-end developer, my goal is to improve every day for me
					to create the most efficient and scalable websites possible. I
					make it my mission to continue growing and be a better person
					than I was yesterday.
				</p>

				<p className='aboutMe__content__interests'>
					<span className='aboutMe__interests--bold'>
						When I'm not coding
					</span>
					, I'm most likely learning how to improve the way I write my
					code, create side projects, and watch movies or listen to musics.
				</p>

				<div className='aboutMe__btn--resume'>
					<a href={CJRes} target='_blank' rel='noreferrer'>
						View My Resume <img src={blueArrow} alt='blue arrow' />
					</a>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
