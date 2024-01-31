import { ReactElement, useEffect } from "react";
import debounce from "lodash/debounce";
import styles from "./DropDown/css/PopUpMenu.module.css";

interface Cooddinates{
    left: number;
    top: number;
}

interface TooltipPopoverProps{
    children: ReactElement;
    coord: Cooddinates;
    updateTooltipCoords: any;
}



const TooltipPopover: React.FC<TooltipPopoverProps> = ({children, coord, updateTooltipCoords}) => {
    const updateCoords = debounce(updateTooltipCoords, 25);
    const sidePanel = document.getElementById('SidePanel');

    useEffect(() => {
        window.addEventListener('resize', updateCoords);
        
        return () => window.removeEventListener('resize', updateCoords);
    }, []);

    useEffect(() => {
        console.log('sidePanel', sidePanel);
        sidePanel?.addEventListener('scroll', updateCoords);
        
        return () => sidePanel?.removeEventListener('scroll', updateCoords);
    }, [])

    return(
        <div className={styles.TooltipWrap} style={{...coord}} >
            {
                children
            }
        </div>
    )
}

export default TooltipPopover;