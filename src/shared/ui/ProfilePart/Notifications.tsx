import { ConfigProvider, Switch } from "antd";
import styles from './css/ProfilePartMain.module.css';
import stylesWrap from './css/Notification.module.css';

const Notifications = () => {

    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <ConfigProvider
            theme={{
            token: {
                colorPrimary: '#E73C3C',
                colorTextQuaternary: '#4A4A4A'
            },
            }}
        >
            <div className={stylesWrap.WrapMain}>
                <div className={stylesWrap.Wrap}>
                    <p className={styles.Title}>Уведомления</p>
                    <Switch defaultChecked onChange={onChange} />
                </div>
                <div className={stylesWrap.Wrap}>
                    <p className={styles.Title}>Новостная рассылка</p>
                    <Switch defaultChecked onChange={onChange} />
                </div>
            </div>
        </ConfigProvider>
    )
}

export default Notifications;