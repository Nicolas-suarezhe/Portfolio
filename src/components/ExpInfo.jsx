import React from 'react';
import images from '../assets/images';

const ExpInfo = ({language}) => {

    const content = {
        english:{
            title:'These are the projects I have worked on',
            description:'Here you can see some projects, the ones I feel most proud of.',
            chinita:'Chinita web page',
            chinitadesc:'This is a web page in process for a small business where I have worked on, it is going to be a full web site with e-commerce.',
            rickdesc:'Here I used an API to create a wiki that can be used to display information about the famous series Rick & Morty.',
            pokedesc:'Here I used an API to create a pokedex that can be used to display information about your favorite pokemons.',
            freelancerpro:'Freelancer project',
            freedesc:'This is a project where I developed a business idea similar to Tripadvisor, based on a Colombian small town.',
            skills:'Skills applied:'

        },
        spanish:{
            title:'Estos son proyectos en los que he trabajado',
            description:'Acá verás algunos proyectos, de los que más orgulloso estoy',
            chinita:'Página web Chinita',
            chinitadesc:'Esta es una página web en proceso para una pequeña empresa de mi zona, será una página completa con e-commerce.',
            rickdesc:'Acá usé una API para crear una wiki que se puede usar para ver información de la famosa serie Rick & Morty.',
            pokedesc:'Acá usé una API para crear una pokedex que se puede usar para ver información de tus pokemones favoritos.',
            freelancerpro:'Proyecto freelanceer',
            freedesc:'Este es un proyecto basado en una idea de negocio similar a Tripadvisor, basado en una pequeño pueblo de Colombia',
            skills:'Habilidades usadas:'

        }
    }

    return (
        <div className='interior-info' >
            <br />
            <br />
            <br />
            <h1 className='span' > {content[language].title} </h1>
            <br />
            <div className='text-big' >
                {content[language].description}
            </div>
            <div className='' >

                <div className='project-detail' >
                    <h2 className='span' > {content[language].chinita} </h2>
                    <div className='text-and-skills' >
                        <a href='' target='_blank'  className="project-image">
                            <img src={images.chinitaSS} alt="" className='project-image' />
                        </a>
                        <div>
                            <p className='project-description'> {content[language].chinitadesc} </p>
                            <h3> {content[language].skills } </h3>
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
                    <div className='text-and-skills' >
                    <a href='https://nicosricknmortywiki.netlify.app/' target='_blank'  className="project-image">
                            <img src={images.rickSS} alt="" className='project-image' />
                        </a>
                        <div>
                            <p className='project-description'> {content[language].rickdesc} </p>
                            <h3> {content[language].skills } </h3>
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
                    <div className='text-and-skills' >
                    <a href='https://nicolaspokedex.netlify.app/' target='_blank'  className="project-image">
                            <img src={images.pokedexSS} alt="" className='project-image' />
                        </a>
                        <div>
                            <p className='project-description' > {content[language].pokedesc} </p>
                            <h3> {content[language].skills } </h3>
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
                    <h2 className='span' > {content[language].freelancerpro} </h2>
                    <div className='text-and-skills' >
                    <a href='https://uradvisorproject.netlify.app/' target='_blank'  className="project-image">
                            <img src={images.freelancer} alt="" className='project-image' />
                        </a>
                        <div>
                            <p className='project-description'> {content[language].freedesc} </p>
                            <h3> {content[language].skills } </h3>
                            <div className="skills-used">
                                <img src={images.react} alt="" className='skill-used-img' />
                                <img src={images.rrd} alt="" className='skill-used-img' />
                                <img src={images.css} alt="" className='skill-used-img' />
                                <img src={images.redux} alt="" className='skill-used-img' />
                                <img src={images.node} alt="" className='skill-used-img' />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ExpInfo;