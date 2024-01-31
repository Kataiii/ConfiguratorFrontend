import { ReactElement, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps{
    children: ReactElement;
}

const Portal: React.FC<PortalProps> = ({children}) => {
    const mount = document.getElementById('context_menu-content');

    //@ts-ignore
    return createPortal(children, mount);
}

export default Portal;