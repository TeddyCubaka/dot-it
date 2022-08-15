import { Icon } from '@rsuite/icons';
import { FaSearch, FaHeart, FaChevronDown, FaUserCircle } from 'react-icons/fa';
import UserInfo from './account-info';

export default function Header() {
    return (
        <header>
                <div className="logo">
                    <div className='logo-illustration'>
                        <div><div></div></div>
                    </div>
                    <span>Dot It</span>
                </div>
                <div className='search'>
                    <Icon as={FaSearch} color='#F5F5F5' size="30px" className='icon-search'/>
                    <input type="text" className="search-input"/>
                </div>
                <UserInfo />
        </header>
    );
}