import { ReactElement, useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";
import styles from "./DropDown/css/PopUpMenu.module.css";

export interface Coodinates{
    left: number;
    top: number;
}

interface TooltipPopoverProps{
    index: number;
    children: ReactElement;
    coord: Coodinates;
    updateTooltipCoords: () => void;
    closeHandler: any;
}

const TooltipPopover: React.FC<TooltipPopoverProps> = ({index, children, coord, updateTooltipCoords, closeHandler}) => {
    const updateCoords = debounce(updateTooltipCoords, 25);
    const sidePanel = document.getElementById('SidePanel');
    const divRef = useRef<HTMLDivElement>(null);


    //Следование за объектом при прокрутке окна
    useEffect(() => {
        window.addEventListener('resize', updateCoords);
        
        return () => window.removeEventListener('resize', updateCoords);
    }, []);

    //Следование за объектом при прокрутке SidePanel
    useEffect(() => {
        sidePanel?.addEventListener('scroll', updateCoords);
        
        return () => sidePanel?.removeEventListener('scroll', updateCoords);
    }, []);

    //Закрытие при нажатии вне компонента
    useEffect(() => {
    
        const onClick = (e: any) => { 
            if(!divRef.current?.contains(e.target)) closeHandler(e);
        }
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [closeHandler]);

    return(
        //@ts-ignore
        <div ref={divRef} id={index} key={index} className={styles.TooltipWrap} style={{...coord}}>
            {
                children
            }
        </div>
    )
}

export default TooltipPopover;