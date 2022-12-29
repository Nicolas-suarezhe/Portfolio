import Particles from "react-tsparticles";
import {loadSlim} from 'tsparticles-slim'
import React, { useCallback, useMemo } from "react";

const ParticlesBackground = () => {

const options = useMemo(()=>{
    return{
        fullScreen: {
            enable: true,
            zIndex: 0
        },
        interactivity:{
            events:{
                onClick:{
                    enable: true,
                    mode: "push"
                },
                onHover:{
                    enable: true,
                    mode: "repulse"
                }
            },
            modes:{
                push:{
                    quantity: 5
                },
                repulse:{
                    distance: 100
                }
            }
        },
        particles: {
            links:{
                enable: true,
                distance: 150
            },
            move:{
                enable: true
            },
            size:{
                value:{
                    min:1,
                    max:4
                }
            }
        }
    }
},[])



const particlesInit = useCallback((engine)=>{
 loadSlim(engine)
},[])


return <Particles init={particlesInit} options={options} ></Particles>

};

export default ParticlesBackground