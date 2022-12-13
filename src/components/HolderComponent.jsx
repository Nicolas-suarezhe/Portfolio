import React, { useState } from 'react';
import DetailInfo from './DetailInfo';
import ExpInfo from './ExpInfo';
import HardInfo from './HardInfo';
import SkillsInfo from './SkillsInfo';
import images from '../assets/images.js'

const HolderComponent = () => {

    const [ page , setPage ] = useState(0)

    const openPageInfo = ()=>{
        setPage(1)
    }
    const openPageSoft = ()=>{
        setPage(2)
    }
    const openPageHard = ()=>{
        setPage(3)
    }
    const openPageExp = ()=>{
        setPage(4)
    }


    return (


        
        <div>
            <div className='holder' >
                <div className='biggest-box'>
                    <div className='holder-title' >
                        <img className='my-logo' src={images.myLogo} alt="" />
                    </div>
                    <div className='box-container'>
                        <div className='icon-img-quote' >
                            <div className='icon-img'>
                                <div className='left-info' >
                                        <div className="images-icons">
                                            <img className='social-icons' src={images.insta} alt="" />
                                            <img className='social-icons' src={images.linked} alt="" />
                                            <img className='social-icons' src={images.wpp} alt="" />
                                        </div>
                                </div>
                                <div className='image-space'>
                                    <img className='my-photo' src={images.myFoto} alt="" />
                                </div>
                            </div>
                            <div className='quote-container' >
                                <p className='quote' >
                                    Here there's gonna be a beautiful quote
                                </p>
                            </div>
                        </div>
                        <div className='detail-and-btn'>
                            <div className='detail-holder' >
                                {page === 0 && 'hi'}
                                {page === 1 && <DetailInfo/>}
                                {page === 2 && <SkillsInfo/>}
                                {page === 3 && <HardInfo/>}
                                {page === 4 && <ExpInfo/>}
                            </div>
                            <div className='all-btn-space' >
                                <button onClick={openPageInfo} className='options-btn' >About me</button>
                                <button onClick={openPageSoft} className='options-btn' >Soft skills</button>
                                <button onClick={openPageHard} className='options-btn' >Hard skills</button>
                                <button onClick={openPageExp} className='options-btn' >My experience</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='holder-footer' >
                    <div className='footer' >
                        This is going to be the footer
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HolderComponent;