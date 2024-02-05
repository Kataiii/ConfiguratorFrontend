import React, { useContext, useEffect } from "react";
//import "./index.css";
import { Breadcrumb } from "antd";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import folder from "../../store/folderStore";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

interface BreadAppItem {
    title: JSX.Element;
    key: string;
}

interface BreadAppProps {
    title: BreadAppItem;
}

let breadcrumbNameMap: Record<string, string | null> = {
    '/unsorted': 'Неотсортированные',
    '/incoming': 'Входящие',
    '/sent': 'Отправленные',
    '/archive': 'Архив',
    '/basket': 'Корзина'
};

const items = [
    {
        title: 'Home',
    },
    {
        title: <a href="">Application Center</a>,
    },
    {
        title: <a href="">Application List</a>,
    },
    {
        title: 'An Application',
    },
]

const BreadApp: React.FC<BreadAppProps> = observer(({ title }) => {
    const location = useLocation();
    const {folderStore} = useContext(Context);

    useEffect(() => {
        console.log(folderStore.getAciveFolder());
    }, [location.pathname]);
    // breadcrumbNameMap = folder.splitForBreadcrumd(breadcrumbNameMap);
    // let pathSnippets = location.pathname.split("/").filter((i) => i);
    // pathSnippets = pathSnippets.filter(item => (item != 'home' && item != 'projects' && item != 'folders' && item != 'renders'));

    // const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    //   const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    //   const urlForLink = '/home/projects/folders'+url;
    //   return {
    //     key: url,
    //     title: <Link to={urlForLink}>{breadcrumbNameMap[url]}</Link>
    //   };
    // });

    // const breadcrumbItems = [
    //   title
    // ].concat(extraBreadcrumbItems);

    return (
        <div className="demo">
            <Breadcrumb items={items} />
        </div>
    );
})

// const BreadApp: React.FC<BreadAppProps> = ({title}) => (
//     <Home title={title}/>
// );

export default BreadApp;

