import { FaChevronDown, FaUserCircle } from 'react-icons/fa';
import { Icon } from '@rsuite/icons';

export default function UserInfo (hide){
    return (
        <button className="user-info">
            <div className="user-info-icons">
                <Icon as={ FaUserCircle } size="35px"/>
                <Icon as={ FaChevronDown } size="15px"/>
            </div>
            <div className='user-details'>
                <div>
                <span className="indetif">Nom : </span>
                <strong>Nom de l'utilisateur</strong></div>
                <div><span className="indetif">Type d'abonnement :</span> Free account</div>
            </div>
            <button className='login-button hide'>Changer de compter</button>
        </button>
    )
}