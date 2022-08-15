import { Icon } from '@rsuite/icons';
import { IconContext } from 'react-icons';
import { FaSearch, FaHeart, FaChevronDown, FaUserCircle } from 'react-icons/fa';

export default function Header() {
    return (
        <IconContext.Provider value={{color: '#393938', size : '23px'}}>
            <header>
                <div className="logo">
                    <div className='logo-illustration'>
                        <div><div></div></div>
                    </div>
                    <span>Dot It</span>
                </div>
                <div>
                    <Icon as={FaSearch} color='#F5F5F5' size="30px"/>
                    <input type="text" className="search-input"/>
                </div>
                <button className='user-info'>
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
            </header>
        </IconContext.Provider>
    );
}