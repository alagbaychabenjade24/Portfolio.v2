import React from 'react';
import covidTracker from './covidtracker-min.png';
import facebookClone from './facebook-clone-min.png';
import chabenSplash from './chabensplash-min.png';

import './Projects.scss';
import './Projects-media.scss';

function Projects() {
	return (
		<section className='projects'>
			<div className='projects__title'>
				<h1>Projects</h1>
			</div>

			<div className='projects__items'>
				<div className='project__item'>
					<a
						href='https://covid-tracker-8672e.web.app/'
						target='_blank'
						rel='noreferrer'
					>
						<img src={covidTracker} alt='covid-19 corona tracker' />
					</a>

					<div className='project__item__content'>
						<a
							href='https://covid-tracker-8672e.web.app/'
							target='_blank'
							rel='noreferrer'
						>
							<h3>COVID-19 Corona Tracker</h3>
						</a>

						<p>
							It acts as a portal for the public to keep track of the
							latest news development about the COVID-19, alongside
							collecting data for further analysis.
						</p>

						<div className='project__item__content--buttons'>
							<a
								href='https://covid-tracker-8672e.web.app/'
								target='_blank'
								rel='noreferrer'
							>
								<span className='project__item__content-live'>
									See Live
								</span>
							</a>

							<a
								href='https://github.com/alagbaychabenjade24/covid-tracker'
								target='_blank'
								rel='noreferrer'
							>
								<span className='project__item__content-scode'>
									Source Code
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className='project__item'>
					<a
						href='https://fb-clone-34dda.web.app/'
						target='_blank'
						rel='noreferrer'
					>
						<img src={facebookClone} alt='facebook clone' />
					</a>

					<div className='project__item__content'>
						<a
							href='https://fb-clone-34dda.web.app/'
							target='_blank'
							rel='noreferrer'
						>
							<h3>Facebook Clone</h3>
						</a>

						<p>
							This is a clone of Facebook which I made. This clone lets
							you post status with Images and share it with other people.
						</p>

						<div className='project__item__content--buttons'>
							<a
								href='https://fb-clone-34dda.web.app/'
								target='_blank'
								rel='noreferrer'
							>
								<span className='project__item__content-live'>
									See Live
								</span>
							</a>

							<a
								href='https://github.com/alagbaychabenjade24/facebook-clone'
								target='_blank'
								rel='noreferrer'
							>
								<span className='project__item__content-scode'>
									Source Code
								</span>
							</a>
						</div>
					</div>
				</div>

				<div className='project__item'>
					<a
						href='https://alagbaychabenjade24.github.io/chabensplash/'
						target='_blank'
						rel='noreferrer'
					>
						<img src={chabenSplash} alt='chabensplash' />
					</a>

					<div className='project__item__content'>
						<a
							href='https://alagbaychabenjade24.github.io/chabensplash/'
							target='_blank'
							rel='noreferrer'
						>
							<h3>ChabenSplash</h3>
						</a>

						<p>
							A project that I made that uses Unsplash API, this project
							shows pictures of different creators around the world.
						</p>

						<div className='project__item__content--buttons'>
							<a
								href='https://alagbaychabenjade24.github.io/chabensplash/'
								target='_blank'
								rel='noreferrer'
							>
								<span className='project__item__content-live'>
									See Live
								</span>
							</a>

							<a
								href='https://github.com/alagbaychabenjade24/chabensplash'
								target='_blank'
								rel='noreferrer'
							>
								<span className='project__item__content-scode'>
									Source Code
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
