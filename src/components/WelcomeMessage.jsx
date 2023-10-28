import React from 'react';

const WelcomeMessage = ({language}) => {

    const content = {
        english:{
            title:'Welcome to my portfolio',
            description:"If you're watching this page, you may be interested in working with me, please make sure to go through all the details and see the great asset I can be to any company."
        },
        spanish:{
            title:'Bienvenido a mi portafolio',
            description:'Si estás acá, posiblemente estés interesado en trabajar conmigo, por favor tómate el tiempo de ver todos lo detalles dentro de este portafolio para que reconozcas lo mucho que tengo por aportar a cualquier empresa.'
        }
    }
    
    return (
        <div className='interior-info' >
            <br />
            <br />
            <br />
            <h1 className='span' >{content[language].title}</h1>
            <br />
            <p className='text-big' >{content[language].description}</p>
        </div>
    );
};

export default WelcomeMessage;