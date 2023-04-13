import React, { CSSProperties } from 'react';
import { MenuProps, ConfigProvider } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from "./css/Menu.module.css"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  style: CSSProperties,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    style
  } as MenuItem;
}

//Папки запрос с бека

const styleStartItem : CSSProperties = { 
  backgroundColor: '#313131', 
  padding: '5px 0 5px 13px', 
  width: '110px', 
  marginLeft: '20px', 
  borderRadius: '0px 11px 0px 0px', 
  fontWeight: 300 
}

const styleMiddleItem : CSSProperties = {
  backgroundColor: '#313131', 
  padding: '5px 0 5px 13px', 
  width: '110px', 
  marginLeft: '20px', 
  borderRadius: '0px 0px 0px 0px', 
  fontWeight: 300 
}

const styleEndItem : CSSProperties = {
  backgroundColor: '#313131', 
  padding: '5px 0 5px 13px', 
  width: '110px', 
  marginLeft: '20px',
  borderRadius: '0px 0px 11px 11px', 
  fontWeight: 300 
}

const items: MenuProps['items'] = [
  getItem('Папки', 'sub4', { backgroundColor: '#4A4A4A', padding: 0, width: '130px', fontWeight: 400 }, null, [
    getItem('Дом', 'house', styleStartItem),
    getItem('Офис', 'office', styleMiddleItem),
    getItem('Option 11', '11', styleMiddleItem),
    getItem('Option 12', '12', styleEndItem),
  ]),
];

const App: React.FC = () => {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate('/home/projects/folders/'+e.key);
  };

  return (
    <ConfigProvider theme={{
      token: {
        colorBgContainer: '#4A4A4A',
        colorText: '#FCFCFC',
        padding: 0,
        paddingXS: 0,
        paddingXL: 0,
        margin: 0,
        marginXS: 0,
        marginXXS: 0,
        fontFamily: 'Ubuntu, sans-serif',
        colorPrimary : '#FCFCFC'
      }
    }}>
      <Menu
        onClick={onClick}
        style={{ border: 'none', padding: 0, margin: 0 }}
        mode="inline"
        items={items}
      />
    </ConfigProvider>
  );
};

export default App;