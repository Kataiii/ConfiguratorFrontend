import Avatar from '../../../assets/icons/icon-avatar.svg';
import Licence from '../../../assets/icons/icon-license.svg';
import Location from '../../../assets/icons/icon-locations.svg';
import Calendar from '../../../assets/icons/icon-calendar.svg';
import styles from './css/TitlePart.module.css';
import { useEffect, useState } from 'react';

interface TitlePartProps{
    srcImg?: string;
    login: string;
    cityName: string;
    created: Date;
    endingLicence: Date;
}

const optionsCreated: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric'
}

const optionsEnding: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}


const TitlePart: React.FC<TitlePartProps> = ({srcImg, login, cityName, created, endingLicence}) => {
    const [visible, setVisibleState] = useState(false);

    const onMouseEnterHandler = () => {
        setVisibleState(true);
    }

    const onMouseLeaveHandler = () => {
        setVisibleState(false);
    }

    return(
        <div className={styles.TitleWrap}>
            <div className={styles.TitleImageWrap}>
                {
                    srcImg != undefined
                    ?
                        <img className={styles.Image} src={srcImg} alt='avatar'></img>
                    :
                        <img className={styles.Image} src={Avatar} alt='avatar'></img>
                }
            </div>
            <div className={styles.TitleWrapMax}>
                <div className={styles.TitleWrap}>
                    <p className={styles.Title}>{login}</p>
                    <div onMouseEnter={onMouseEnterHandler}
                         onMouseLeave={onMouseLeaveHandler}
                         className={styles.WrapLicence}>
                        <img src={Licence} 
                         alt='licence'
                         />
                         {
                            visible
                            ?
                                <div className={styles.LicenceWrap}>
                                    <p className={styles.LicenceTitle}>Дата конца подписки: {endingLicence.toLocaleString('ru', optionsEnding)}</p>
                                </div>
                            :
                                null
                         }
                    </div>
                </div>
                <div className={styles.TitleWrap}>
                    <div className={styles.TitleWrapMin}>
                        <img src={Location} alt='location'></img>
                        <p className={styles.TitleContent}>{cityName}</p>
                    </div>
                    <div className={styles.TitleWrapMin}>
                        <img src={Calendar} alt='calendar'></img>
                        <p className={styles.TitleContent}>Дата регистрации: {created.toLocaleString('ru', optionsCreated)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitlePart;