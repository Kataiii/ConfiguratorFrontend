import React from "react";
//import "./index.css";
import { Breadcrumb } from "antd";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { title } from "process";
import folder from "../../store/folder";

//Тут должен будет быть запрос на бек для получения папок и ссылки на них


let breadcrumbNameMap: Record<string, string | null> = {
  '/unsorted' : 'Неотсортированные',
  '/incoming' : 'Входящие',
  '/sent' : 'Отправленные',
  '/archive' : 'Архив',
  '/basket' : 'Корзина'
};

const Home = (props : {title : {title : JSX.Element, key : string}}) => {
  const location = useLocation();
  breadcrumbNameMap = folder.splitForBreadcrumd(breadcrumbNameMap);
  let pathSnippets = location.pathname.split("/").filter((i) => i);
  pathSnippets = pathSnippets.filter(item => (item != 'home' && item != 'projects' && item != 'folders' && item != 'renders'));
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const urlForLink = '/home/projects/folders'+url;
    return {
      key: url,
      title: <Link to={urlForLink}>{breadcrumbNameMap[url]}</Link>
    };
  });

  const breadcrumbItems = [
    props.title
  ].concat(extraBreadcrumbItems);

  return (
    <div className="demo">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

const BreadApp = (props :{title:{title : JSX.Element, key : string}}) => (
    <Home title={props.title}/>
);

export default BreadApp;

