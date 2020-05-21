import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import ButtonBurger from '../ui/ButtonBurger/ButtonBurger';
import SidebarItem from './SidebarItem';
import IconUser from '../ui/icons/IconUser';
import IconPlay from '../ui/icons/IconPlay';
import IconBarChart from '../ui/icons/IconBarChart';
import IconEnvelope from '../ui/icons/IconEnvelope';
import IconChat from '../ui/icons/IconChat';
import IconHelp from '../ui/icons/IconHelp';
import IconSettings from '../ui/icons/IconSettings';

import './Sidebar.sass';

const Sidebar = () => {
  const [isMobileMenu, toggleMobileMenu] = useState(false);

  const handleMobileMenu = () => toggleMobileMenu(!isMobileMenu);

  return (
    <div className={isMobileMenu ? 'sidebar active' : 'sidebar'}>
      <div>
        <div className="sidebar__header">
          <Link to={'/'}>
            <img src={logo} alt="Logo"/>
          </Link>
          <ButtonBurger isMobileMenu={isMobileMenu}
                        onClick={handleMobileMenu}
          />
        </div>
        <SidebarItem href={'/users'}
                     label={'Users'}
                     icon={<IconUser/>}
                     onClick={handleMobileMenu}
        />
        <SidebarItem href={'/sessions'}
                     label={'Sessions'}
                     icon={<IconPlay/>}
                     info={'85'}
                     onClick={handleMobileMenu}
        />
        <SidebarItem href={'/analytics'}
                     label={'Analytics'}
                     icon={<IconBarChart/>}
                     info={'Soon'}
                     onClick={handleMobileMenu}
        />
        <SidebarItem href={'/messages'}
                     label={'Messages'}
                     icon={<IconEnvelope/>}
                     onClick={handleMobileMenu}
        />
        <SidebarItem href={'/chats'}
                     label={'Chats'}
                     icon={<IconChat/>}
                     onClick={handleMobileMenu}
        />
        <SidebarItem href={'/help'}
                     label={'Help center'}
                     icon={<IconHelp/>}
                     onClick={handleMobileMenu}
        />
        <SidebarItem href={'/settings'}
                     label={'Settings'}
                     icon={<IconSettings/>}
                     onClick={handleMobileMenu}
        />
      </div>
      <div className="sidebar__user-info">
        <div className="sidebar__user-info__photo"
             style={{backgroundImage: `url('')`}}
        />
        <div>
          <div className="sidebar__user-info__first-name">Peterson</div>
          <div className="sidebar__user-info__last-name">Jacksonmom</div>
        </div>
      </div>
    </div>
  )
};

export default Sidebar;
