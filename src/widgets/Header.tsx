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
// const items: MenuProps['items'] = [
//   {
//     key: '1',
//     label: 'Item 1',
//   },
//   {
//     key: '2',
//     label: 'Item 2',
//   },
//   {
//     key: '3',
//     label: 'Item 3',
//   },
// ];

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