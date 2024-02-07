import React, { useContext, useEffect } from "react";
//import "./index.css";
import { Breadcrumb } from "antd";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import folder from "../../store/folderStore";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

export interface BreadAppItem {
    title: JSX.Element;
    key: string;
}

interface BreadAppProps{
    items: BreadAppItem[];
}

const BreadApp: React.FC<BreadAppProps> = ({items}) => {

    return (
        <div className="demo">
            <Breadcrumb items={items} />
        </div>
    );
};

export default BreadApp;

