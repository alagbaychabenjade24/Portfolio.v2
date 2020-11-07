import React from 'react';
import gmail from './icons8-gmail-min.svg';
import github from './icons8-github-min.svg';
import linkedin from './icons8-linkedin-min.svg';
import heart from './icons8-heart-outline-min.svg';
import coffee from './icons8-coffee-script-min.svg';

import './Footer.scss';
import './Footer-media.scss';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__copyright'>
                <span>
                    2020 &copy; Made with <img src={heart} alt='heart shape' />{' '}
                    & <img src={coffee} alt='coffee' /> in Cebu.
                </span>
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

            <div className='footer__small--btns'>
                <a
                    href='https://github.com/alagbaychabenjade24'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={github} alt='github' />
                </a>

                <a
                    href='mailto:alagbaychabenjade24@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={gmail} alt='gmail' />
                </a>

                <a
                    href='https://www.linkedin.com/in/chabenjadealagbay/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={linkedin} alt='linkedin' />
                </a>
            </div>
        </div>
    );
}

export default Footer;
