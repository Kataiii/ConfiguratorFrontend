import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import IconProfile from '../assets/images/icon-profile.svg'

const DropdownMenu = (props : MenuProps) => {
  return (
      <Dropdown.Button
        type="primary"
        menu={props}
      >
        <img src={IconProfile}/>
        <p>Личный кабинет</p>
      </Dropdown.Button>
  );
};

export default DropdownMenu;