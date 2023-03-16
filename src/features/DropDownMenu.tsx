import IconProfile from '../assets/images/icon-profile.svg'
import IconMenu from '../assets/images/icon-dropdown menu.svg'
import styles from "../app/App.module.css"
import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';

const styleText : string = styles.PText;
const divMenu : string = styles.DivMenu;

const DropdownMenu = (props : MenuProps) => (
  <Dropdown 
    menu={props}
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