import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ConvertionDate } from "../../shared/common/ConvertionDate";
import styles from "../css/CardInfo.module.css";


interface CardInfoProps {
    name: string;
    date?: Date;
    name_folder?: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ name, date, name_folder }) => {
    const navigate = useNavigate();
    const locate = useLocation();
    const [style, setStyle] = useState<string>(`${styles.CardInfo_Title} ${ locate.pathname === "/home/projects" ? styles.CardLink_TitleMain : ""}`);

    useEffect(() => {
        setStyle(`${styles.CardInfo_Title} ${ locate.pathname === "/home/projects" ? styles.CardLink_TitleMain : ""}`);
    }, [locate.pathname]);

    const clickHandler = () => {
        navigate(`/home/projects/${name_folder}`);
    }

    return (
        <div>
            <div className={styles.CardInfo_DivTitle}>
                <p className={style}>{name}</p>
                {
                    name_folder != undefined
                        ? <p className={styles.CardInfo_Link} onClick={clickHandler}> {'> ' + name_folder}</p>
                        : null
                }
            </div>
            {
                date != undefined
                ? <p className={styles.CardInfo_Date}>{ConvertionDate.convertionDateForProject(new Date(String(date)))}</p>
                : null
            }
        </div>
    )
}

export default CardInfo;