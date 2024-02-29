import { useContext, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "..";
import styles from "../routing/layouts/css/DevelopmentArea.module.css";
import { filterItemsPanel } from "../shared/common/ItemsProfilePanel";

const SidePanelProfile: React.FC = () => {
    const {store} = useContext(Context);
    const location = useLocation();

    const items = useMemo(() => filterItemsPanel(store.getActiveRole()?.name ?? localStorage.getItem("role") ?? "user", store.getAccount().roles), [store.getActiveRole()]);

    return (
        <div className={styles.SidePanelWrap}>
            <div className={styles.SidePanel}>
                {
                    items?.map(item => 
                        <Link className={[styles.LinkPersonal, location.pathname == item.url ? styles.LinkPersonalActive : ""].join(" ")} 
                                to={item.url}>{item.name}</Link>)
                }
            </div>
        </div>
    )
}

export default SidePanelProfile;