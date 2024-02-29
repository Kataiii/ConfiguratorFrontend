import { PopUpMenuItem } from "./DropDown/PopUpMenu";
import styles from "./css/Select.module.css";
import { useState } from "react";

interface SelectSizeProps{
    size: number;
    items: PopUpMenuItem[];
    select: string;
}

const SelectSize: React.FC<SelectSizeProps> = ({size, items, select}) => {
    const [selected, setSelected] = useState<string>(select);

    return(
        <select size={size} className={styles.SelectSize} value={selected} onChange={ e => setSelected(e.target.value)}>
            {
                items.map(item => {
                    return (
                        <option key={item.content}
                                className={[styles.SelectSize_Option, selected === item.content ? styles.SelectSize_Option_Selected : ''].join(' ')} 
                                onClick={item.action}>
                            {item.content}
                        </option>
                    );
                })
            }
        </select>
    )
}

export default SelectSize;