import React from 'react';
import images from '../assets/images';

const ExpInfo = () => {
    return (
        <div className='interior-info' >
            <br />
            <br />
            <br />
            <h1 className='span' >These are the projects I have worked on</h1>
            <br />
            <div className='text-big' >
                Here you can see some projects, the ones I feel most proud of.
            </div>
            <div className='' >
                <div className='project-detail' >
                    <h2 className='span' >Chinita web page</h2>
                    <br />
                    <div className='text-and-skills' >
                        <a href='' target='_blank'  className="project-image">
                            <img src={images.chinitaSS} alt="" className='project-image' />
                        </a>
                        <div>
                            <p className='project-description' >This is a full web page for a small business where I have worked on, it was made alongside a group of students and friends.</p>
                            <h3>Skills applied:</h3>
                            <div className="skills-used">
                                <img src={images.react} alt="" className='skill-used-img' />
                                <img src={images.rrd} alt="" className='skill-used-img' />
                                <img src={images.css} alt="" className='skill-used-img' />
                                <img src={images.node} alt="" className='skill-used-img' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-detail' >
                    <h2 className='span' >Rick & Morty wiki</h2>
                    <br />
                    <div className='text-and-skills' >
                    <a href='https://nicosricknmortywiki.netlify.app/' target='_blank'  className="project-image">
                            <img src={images.rickSS} alt="" className='project-image' />
                        </a>
                        <div>
                            <p className='project-description' >Here I used an API to create a wiki that can be used to display information about the famous series Rick & Morty</p>
                            <h3>Skills applied:</h3>
                            <div className="skills-used">
                                <img src={images.react} alt="" className='skill-used-img' />
                                <img src={images.rrd} alt="" className='skill-used-img' />
                                <img src={images.css} alt="" className='skill-used-img' />
                                <img src={images.redux} alt="" className='skill-used-img' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-detail' >
                    <h2 className='span' >Pokedex</h2>
                    <br />
                    <div className='text-and-skills' >
                    <a href='https://nicolaspokedex.netlify.app/' target='_blank'  className="project-image">
                            <img src={images.pokedexSS} alt="" className='project-image' />
                        </a>
                        <div>
                            <p className='project-description' >Here I used an API to create a pokedex that can be used to display information about your favorite pokemons.</p>
                            <h3>Skills applied:</h3>
                            <div className="skills-used">
                                <img src={images.react} alt="" className='skill-used-img' />
                                <img src={images.rrd} alt="" className='skill-used-img' />
                                <img src={images.css} alt="" className='skill-used-img' />
                                <img src={images.redux} alt="" className='skill-used-img' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-detail' >
                    <h2 className='span' >Freelancer project</h2>
                    <br />
                    <div className='text-and-skills' >
                    <a href='https://uradvisorproject.netlify.app/' target='_blank'  className="project-image">
                            <img src={images.freelancer} alt="" className='project-image' />
                        </a>
                        <div>
                            <p className='project-description' >This is a project where a group of people developed a business idea similar to shutterstock, based on a Colombian small town.</p>
                            <h3>Skills applied:</h3>
                            <div className="skills-used">
                                <img src={images.react} alt="" className='skill-used-img' />
                                <img src={images.rrd} alt="" className='skill-used-img' />
                                <img src={images.css} alt="" className='skill-used-img' />
                                <img src={images.redux} alt="" className='skill-used-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpInfo;