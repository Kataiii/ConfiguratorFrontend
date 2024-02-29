import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useContext, useMemo, useState } from "react";
import { Context } from "..";
import SoringIcon from "../assets/icons/icon-sorting.svg";
import { ColorText } from "../entities/Enums/ColorTextPopUp";
import PopUpMenu, { PopUpMenuItem } from "../shared/ui/DropDown/PopUpMenu";
import SelectSize from "../shared/ui/SelectSize";
import styles from "./css/SortingList.module.css";


const SortingList: React.FC = observer(() => {
    const {projectStore} = useContext(Context);
    const [isActive, setIsActive] = useState<boolean>(false);

    const items: PopUpMenuItem[] = useMemo<PopUpMenuItem[]>(() => [
        {
            content: 'По дате',
            action: () => runInAction(() => projectStore.sortFactor = 'По дате'),
            color: ColorText.White
        },
        {
            content: 'По обновлению',
            action: () => runInAction(() =>projectStore.sortFactor = 'По обновлению'),
            color: ColorText.White
        },
        {
            content: 'По названию',
            action: () => runInAction(() => projectStore.sortFactor = 'По названию'),
            color: ColorText.White
        }
    ], []);

    const itemsSort: PopUpMenuItem[] = useMemo<PopUpMenuItem[]>(() => [
        {
            content: 'По убыванию',
            action: () => runInAction(() => projectStore.sortOrder = 'По убыванию'),
            color: ColorText.White
        },
        {
            content: 'По возрастанию',
            action: () => runInAction(() => projectStore.sortOrder = 'По возрастанию'),
            color: ColorText.White
        }
    ], []);

    const closeHandler = () => {
        setIsActive(isActive => !isActive);
    }

    return(
        <div className={styles.WrapModuleMenu} onClick={closeHandler}>
            <div className={styles.DivWrapTitle}>
                <img src={SoringIcon} alt="sorting"/>
                <p className={styles.TitleContent}>Сортировать</p> 
            </div>
            {
                isActive
                    ?
                    <div className={styles.DivWrapPopUpMenu}>
                        <SelectSize size={items.length} items={items} select={items.find(item => item.content === projectStore.sortFactor)?.content ?? items[0].content}/>
                        <div className={styles.DivSplitSort}></div>
                        <SelectSize size={itemsSort.length} items={itemsSort} select={itemsSort.find(item => item.content === projectStore.sortOrder)?.content ?? itemsSort[0].content}/>
                    </div>
                    :
                    null
            }
        </div>
    )
})

export default SortingList;