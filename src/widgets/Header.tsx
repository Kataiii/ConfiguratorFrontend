import DropdownMenu from "../features/DropDownMenu";
import LinkLanding from "../shared/ui/LinkLanding";
import { MenuProps } from 'antd';
import styles from "../app/App.module.css"

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
    const className : string = styles.Header;

    return(
        <div className={className}>
            <LinkLanding></LinkLanding>
            <DropdownMenu items={items}></DropdownMenu>
        </div>
    );
}

export default Header;