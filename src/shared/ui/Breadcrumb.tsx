import React from "react";
//import "./index.css";
import { Breadcrumb } from "antd";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { title } from "process";

//Тут должен будет быть запрос на бек для получения папок и ссылки на них

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Дом</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Офис</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const breadcrumbNameMap: Record<string, string> = {
  "/apps": "Дом",
  "/apps/1": "Офис",
  "/apps/2": "Application2",
  "/apps/1/detail": "Detail",
  "/apps/2/detail": "Detail"
};

const Home = (props : {title : {title : JSX.Element, key : string}}) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>
    };
  });

  const breadcrumbItems = [
    props.title
  ].concat(extraBreadcrumbItems);

  return (
    <div className="demo">
      <Routes>
        <Route path="/apps" element={<Apps />} />
      </Routes>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

const App = (props :{title:{title : JSX.Element, key : string}}) => (
    <Home title={props.title}/>
);

export default App;

