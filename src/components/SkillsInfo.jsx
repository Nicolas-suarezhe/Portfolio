import React from 'react';
import images from '../assets/images';

const SkillsInfo = () => {
    return (
        <div className='interior-info' >
            <br />
            <br />
            <br />
            <h1 className='span' >These are my top soft skills</h1>
            <br />
            <div className='text-big' >
                Here you can see the Soft skills I have used the most and make me proud of my intergrity.
            </div>
            <div className='hard-skills-info' >
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >Leadership</h2>
                    <img src={images.leader} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >Assertive communication</h2>
                    <img src={images.assertive} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >Detail orientation</h2>
                    <img src={images.detail} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >Attentive listener</h2>
                    <img src={images.attentive} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >Solving problems creatively</h2>
                    <img src={images.solve} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >Knowledge hunger</h2>
                    <img src={images.knowledge} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >Team work</h2>
                    <img src={images.team} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >Adaptability</h2>
                    <img src={images.adapt} alt="" className='skill-image'/>
                </div>
            </div>
        </div>
    );
};

export default SkillsInfo;