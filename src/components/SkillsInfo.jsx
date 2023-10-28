import React from 'react';
import images from '../assets/images';

const SkillsInfo = ({language}) => {

    const content = {
        english:{
            title:'These are my top soft skills',
            description:'Here you can see the Soft skills I have used the most and make me proud of my intergrity.',
            one:'Leadership',
            two:'Assertive communication',
            three:'Detail orientation',
            four:'Attentive listener',
            five:'Solving problems creatively',
            six:'Knowledge hunger',
            seven:'Team work',
            eight:'Adaptability'

        },
        spanish:{
            title:'Estas son mis mejores habilidades blandas',
            description:'Acá verás las habilidades blandas que más destaco de mí mismo y me hacen sentir orgulloso de mi integridad',
            one:'Liderazgo',
            two:'Comunicación asertiva',
            three:'Atención al detalle',
            four:'Escucha activa',
            five:'Creatividad para los problemas',
            six:'Hambre de conocimiento',
            seven:'Trabajo en equipo',
            eight:'Adaptabilidad'

        }
    }

    return (
        <div className='interior-info' >
            <br />
            <br />
            <br />
            <h1 className='span' >{content[language].title}</h1>
            <br />
            <div className='text-big' >
                {content[language].description}
            </div>
            <div className='hard-skills-info' >
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >{content[language].one}</h2>
                    <img src={images.leader} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >{content[language].two}</h2>
                    <img src={images.assertive} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' > {content[language].three} </h2>
                    <img src={images.detail} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' > {content[language].four} </h2>
                    <img src={images.attentive} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' > {content[language].five} </h2>
                    <img src={images.solve} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >{content[language].six}</h2>
                    <img src={images.knowledge} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >{content[language].seven}</h2>
                    <img src={images.team} alt="" className='skill-image' />
                </div>
                <div className='skill-detail' >
                    <br />
                    <h2 className='span' >{content[language].eight}</h2>
                    <img src={images.adapt} alt="" className='skill-image'/>
                </div>
            </div>
        </div>
    );
};

export default SkillsInfo;