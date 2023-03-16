import DropdownMenu from "../features/DropDownMenu";
import LinkLanding from "../shared/ui/LinkLanding";
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
    {
      label: 'Регистрация',
      key: '1',
    },
    {
      label: 'Войти',
      key: '2'
    }
  ];

const Header = () => {
    return(
        <div className="Header">
            <LinkLanding></LinkLanding>
            <DropdownMenu items={items}></DropdownMenu>
        </div>
    );
}

export default Header;