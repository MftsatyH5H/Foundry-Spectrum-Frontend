import React, { Component } from 'react';

class Footersmall extends Component {
    render() {

        return (
            <div
                className='flex justify-between items-center  px-[64px] py-[24px] text-[14px] leading-[21px] font-[Poppins] font-normal text-[#9898B5] w-full bg-transparent'

            >
                <p>© 2024 Foundry Spectrum. All rights reserved.</p>
                <div className='flex gap-[24px] underline'>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookies Settings</a>
                </div>
            </div>
        );
    }
}

export default Footersmall;