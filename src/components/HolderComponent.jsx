import React, { useState } from 'react';
import DetailInfo from './DetailInfo';
import ExpInfo from './ExpInfo';
import HardInfo from './HardInfo';
import SkillsInfo from './SkillsInfo';
import images from '../assets/images.js'
import WelcomeMessage from './WelcomeMessage';
import ContactInfo from './ContactInfo';
import cvs from '../assets/curriculums/cvs';

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

    const [theme , setTheme] = useState('dark')

    return (

        
        <div>
            <div className='holder' id={theme}>
                <div className='biggest-box'>
                    <div className='holder-title' >
                        <img className='my-logo' src={images.myLogo} alt="" />
                        <div className='changer-btns' >
                            <button className='box visible' onClick={darkMode} > <img className='darkmodeicon' src={images.darkLight} alt="" />  </button>
                            <button className='box visible' onClick={darkMode} > <img className='darkmodeicon' src={images.darkLight} alt="" />  </button>
                        </div>
                    </div>
                    <div className='box-container'>
                            <div className='icon-img'>
                                <div className='left-info' >
                                        <div className="images-icons box">
                                            <a href="https://api.whatsapp.com/send?phone=573108974714&text=%C2%A1Hola%20Nicol%C3%A1s!%20He%20visto%20tu%20portafolio%20y%20estoy%20interesado%20en%20hablar%20contigo." target='_blank' >
                                                <div className='social-icons-div pulse'>
                                                    <img className='social-icons wpp-icon' src={images.wppcolor} alt="" />
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
                            <a href={cvs.encv} download className='quote-container' >
                                <p className='CVdownload box' >
                                    Download my CV HERE
                                </p>
                            </a>
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
                                ¡Clic here to e-mail with me!
                            </div>
                        </div>
                    
                </div>
            </div>

        </div>
    );
};

export default HolderComponent;