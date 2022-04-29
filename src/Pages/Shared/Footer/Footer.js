import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <footer className='mt-5 '>
                <p
                    className='text-center'><small>copyright @{year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;