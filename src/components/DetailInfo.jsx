import React from 'react';

const DetailInfo = ({language}) => {

    const content = {
        english:{
            title:'A little bit more about me',
            firstParag:"I would describe myself as a goal focused and detail oriented person, I like taking leadership roles as well as being lead by coworkers.",
            secondParag:"I have worked on react applications such as e-commerces, portfolios, wikis (by API consuming) and full web pages for small businesses (this ones can be seen on the 'My work' department).",
            thirdParag:'The process of adjusting to new environments for me is not a problem, that includes learning new skills, which is one of the things I enjoy the most when using my spare time.',
            fourthParag:'Something I can bring as a great asset of myself, is that',
            final:'¡I am always going to be in development, I love learning!'
        },
        spanish:{
            title:'Un poco más acerca de mí',
            firstParag:'Me describiría a mi mismo como una persona enfocada en los objetivos y muy orientada al detalle, me gusta tomar liderazgo y tampoco soy ajeno a recibir indicaciones de mis compañeros.',
            secondParag:"He trabajado en aplicaciones realizadas con React, como e-commerces, portafolios, wikis (consumiendo APIs) y páginas web completas para pequeñas empresas (estas se pueden ver en el apartado de 'Mi trabajo')",
            thirdParag:'El proceso de ajustarme a nuevos ambientes laborales no es un problema para mí, esto incluye aprender nuevas habilidades, lo cual es una de las cosas que más disfruto hacer en mi tiempo libre',
            fourthParag:'Algo que puedo resaltar como una gran cualidad en mí es que',
            final:'¡Siempre estaré en constante crecimiento, me encanta aprender!'
        }
    }

    return (
        <div className='interior-info' >
            <br />
            <br />
            <br />
            <h1 className='span' >{content[language].title}</h1>
            <br />
            <p className='text-big' >
            {content[language].firstParag}
            <br /><br />
            {content[language].secondParag}
            <br /><br />
            {content[language].thirdParag}
            <br /><br />
            {content[language].fourthParag}
            <br /><br />
            <span className='span' >
                {content[language].final}
            </span>
            <br /><br /><br />
            </p>
        </div>
    );
};

export default DetailInfo;