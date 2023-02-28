import React, { useState } from 'react';
import DetailInfo from './DetailInfo';
import ExpInfo from './ExpInfo';
import HardInfo from './HardInfo';
import SkillsInfo from './SkillsInfo';
import images from '../assets/images.js'
import WelcomeMessage from './WelcomeMessage';
import ContactInfo from './ContactInfo';

const HolderComponent = () => {

    const [ page , setPage ] = useState(0)

    const openPageContact = ()=>{
        setPage(5)
    }

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
                                                <div className='social-icons-div'>
                                                    <img className='social-icons insta-icon' src={images.insta} alt="" />
                                                    <img className='social-icons colored-si' src={images.instacolor} alt="" />
                                                </div>
                                            </a>
                                            <a href="https://www.linkedin.com/in/suarez-henao-nicolas-alejandro-b516aa249/" target='_blank' >
                                                <div className='social-icons-div' >
                                                    <img className='social-icons linked-icon' src={images.linked} alt="" />
                                                    <img className='social-icons colored-si' src={images.linkedcolor} alt="" />
                                                </div>

                                            </a>
                                            <a href="https://github.com/Nicolas-suarezhe" target='_blank' >
                                                <div className='social-icons-div' >
                                                    <img className='social-icons git-icon' src={images.git} alt="" />
                                                    <img className='social-icons colored-si' src={images.gitcolor} alt="" />
                                                </div>

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
                                {page === 0 && <WelcomeMessage/>}
                                {page === 1 && <DetailInfo/>}
                                {page === 2 && <SkillsInfo/>}
                                {page === 3 && <HardInfo/>}
                                {page === 4 && <ExpInfo/>}
                                {page === 5 && <ContactInfo/>}
                            </div>
                            <div className='all-btn-space' >
                                <button onClick={openPageInfo} className='options-btn box' >About me</button>
                                <button onClick={openPageSoft} className='options-btn box' >Soft skills</button>
                                <button onClick={openPageHard} className='options-btn box' >Hard skills</button>
                                <button onClick={openPageExp} className='options-btn box' >My work</button>
                            </div>
                    </div>
                </div>
                <div className='footer-contact' >
                        <div className='holder-footer' >
                            <div onClick={openPageContact} className='footer box' >
                                ¡Clic here to contact with me!
                            </div>
                        </div>
                    
                </div>
            </div>

        </div>
    );
};

export default HolderComponent;