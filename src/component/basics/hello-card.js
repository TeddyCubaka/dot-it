import { Icon } from '@rsuite/icons'
import { FaPlayCircle } from 'react-icons/fa'
import React from "react";
import './images/disque.png'

export default function HelloCard (elem){
    // console.log(elem);
    if(elem){return (
            <div className='hello-card'>
                <div>
                    <img src={elem.elem.images[0].url} alt=""/>
                    <h4>{elem.elem.name}</h4>
                </div>
                <div className='big-icon-play'>
                    <Icon as={ FaPlayCircle } size='50px' color='red'/>
                </div>
            </div>
    )}
    return <div className='hello-card'>siiuuuuuuuuui</div>
}


