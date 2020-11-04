import React from 'react';

import './Footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer--btns'>
                <a
                    href='/ChabenJade__Resume.pdf'
                    target='_blank'
                    rel='noreferrer'
                >
                    RESUME
                </a>

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
