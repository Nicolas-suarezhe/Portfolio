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

    const darkMode = ()=>{
        if(theme === 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }

    }
    // const lightMode = ()=>{
    //     setTheme('light')
    //     setLightModeBtn('box nonvisible')
    //     setDarkModeBtn('box visible')
    // }

    const [theme , setTheme] = useState('dark')
    // const [darkModeBtn , setDarkModeBtn] = useState('box visible')
    // const [lightModeBtn , setLightModeBtn] = useState('box visible')


    return (

        
        <div>
            <div className='holder' id={theme}>
                <div className='biggest-box'>
                    <div className='holder-title' >
                        <img className='my-logo' src={images.myLogo} alt="" />
                        <div>
                            <button className='box visible' onClick={darkMode} > <img className='darkmodeicon' src={images.darkLight} alt="" />  </button>
                        </div>
                    </div>
                    <div className='box-container'>
                            <div className='icon-img'>
                                <div className='left-info' >
                                        <div className="images-icons box">
                                            <a href="https://instagram.com/nsuarezhe?igshid=MDM4ZDc5MmU=" target='_blank' >
                                                <img className='social-icons' src={images.insta} alt="" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/suarez-henao-nicolas-alejandro-b516aa249/" target='_blank' >
                                                <img className='social-icons' src={images.linked} alt="" />
                                            </a>
                                            <a href="https://github.com/Nicolas-suarezhe" target='_blank' >
                                                <img className='social-icons' src={images.git} alt="" />
                                            </a>
                                        </div>
                                </div>
                                <div className='image-space'>
                                    <img className='my-photo' src={images.myFoto} alt="" />
                                </div>
                            </div>
                            <div className='quote-container' >
                                <p className='quote box' >
                                    I'm a full stack web developer
                                </p>
                            </div>
                            <div className='detail-holder box' >
                                {page === 0 && 
                                    <h1 className='welcome-message' > MY NAME IS NICOLÁS SUÁREZ AND I AM LOOKING FOWARD TO WORK WITH YOU </h1>
                                }
                                {page === 1 && <DetailInfo/>}
                                {page === 2 && <SkillsInfo/>}
                                {page === 3 && <HardInfo/>}
                                {page === 4 && <ExpInfo/>}
                            </div>
                            <div className='all-btn-space' >
                                <button onClick={openPageInfo} className='options-btn box' >About me</button>
                                <button onClick={openPageSoft} className='options-btn box' >Soft skills</button>
                                <button onClick={openPageHard} className='options-btn box' >Hard skills</button>
                                <button onClick={openPageExp} className='options-btn box' >My work</button>
                            </div>
                    </div>
                </div>
                <div className='holder-footer' >
                    <div className='footer box' >
                        This is going to be the footer
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HolderComponent;