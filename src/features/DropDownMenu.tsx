import IconProfile from '../assets/icons/icon-profile.svg'
import IconMenu from '../assets/icons/icon-dropdown menu.svg'
import styles from "../app/App.module.css"
import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

const styleText : string = styles.PText;
const divMenu : string = styles.DivMenu;

export interface DropdownButtonItem {
  label: string,
  action: () => void
}

interface DropdownMenuProps {
  links: DropdownButtonItem[]
}


const DropdownMenu: React.FC<DropdownMenuProps> = ({links}) => (
  <Dropdown 
    dropdownRender= {(origin) => <div className={styles.Aaa}>
      <Space direction='vertical' size={[20, 0]}>
        {links.map((item, index) => (
          <div key={index} onClick={item.action}>{item.label}</div>
        ))}
      </Space>
        
    </div>}
    >
    <Typography.Link>
      <Space>
        <img src={IconProfile}/>
        <p className={styleText}>Личный кабинет</p>
        <img src={IconMenu}></img>
      </Space>
    </Typography.Link>
  </Dropdown>
);

export default DropdownMenu;