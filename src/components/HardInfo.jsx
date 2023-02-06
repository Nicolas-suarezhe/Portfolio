import React from 'react';
import images from '../assets/images';

const HardInfo = () => {
    return (
        <div className='interior-info' >
            <br />
            <br />
            <br />
            <h1 className='span' >These are my top hard skills</h1>
            <br />
            <div className='text-big' >
                Here you can see the hard skills I have used the most and can be relevant to projects you may have in mind.
            </div>
            <div className='hard-skills-info' >
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >React</h2>
                    <img src={images.react} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >Node</h2>
                    <img src={images.node} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >HTML</h2>
                    <img src={images.html} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >CSS</h2>
                    <img src={images.css} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >Sequelize</h2>
                    <img src={images.seque} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >JavaScript</h2>
                    <img src={images.js} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >Redux</h2>
                    <img src={images.redux} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >react-router-dom</h2>
                    <img src={images.rrd} alt="" className='skill-image'/>
                </div>
            </div>
        </div>
    );
};

export default HardInfo;