import IconProfile from '../../../assets/icons/icon-profile.svg'
import IconMenu from '../../../assets/icons/icon-dropdown menu.svg'
import styles from "../../../app/App.module.css"
import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ColorText } from '../../../entities/Enums/ColorTextPopUp';
import { PopUpMenuItem } from './PopUpMenu';
import stylesMenu from "./css/PopUpMenu.module.css";

const styleText : string = styles.PText;
const divMenu : string = styles.DivMenu;

export interface DropdownButtonItem {
  content: string,
  action: () => void,
  color: ColorText
}

interface DropdownMenuProps {
  links: PopUpMenuItem[]
}


const DropdownMenu: React.FC<DropdownMenuProps> = ({links}) => (

    <Dropdown 
      dropdownRender= {() => 
          <ul className={[stylesMenu.popUpMenu, stylesMenu.popUpRight, stylesMenu.personMenu].join(' ')}>
            {links.map((item, index) => (
              <li key={index} 
                  className={[stylesMenu.popUpMenuItem, item.color == ColorText.White? stylesMenu.itemWhite : stylesMenu.itemRed].join(' ')}
                  onClick={item.action}
              >
                {item.content}
              </li>
            ))}
          </ul>}
      >
      <Typography.Link>
        <Space>
          <img src={IconProfile} alt='image-profile'/>
          <p className={styleText}>Личный кабинет</p>
          <img src={IconMenu} alt='image-dropdownmenu'></img>
        </Space>
      </Typography.Link>
    </Dropdown>
);

export default DropdownMenu;