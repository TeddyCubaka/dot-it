import { Icon } from '@rsuite/icons'
import { FaPlayCircle } from 'react-icons/fa'
import './images/disque.png'

export default function HelloCard (){
    return (
        <div className='hello-card'>
            <div>
                <img src='https://www.thebackpackerz.com/wp-content/uploads/2018/09/damso-lithopedion-backpackerz.jpg' alt=""/>
            </div>
            <h2>Titre de la chanson</h2>
            <div className='big-icon-play'>
                <Icon as={ FaPlayCircle } size='50px' color='red'/>
            </div>
        </div>
    )
}