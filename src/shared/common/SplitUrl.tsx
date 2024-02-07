import React from "react";
import { Link, NavLink } from "react-router-dom";
import { folderStore } from "../..";
import { BreadAppItem } from "../ui/Breadcrumb";


export class SplitUrl{
    static splitUrl = (url: string): BreadAppItem[] => {
        const arrayNames: string[] = url.split('/');
        let items: BreadAppItem[] = [];
        items.push(this.getItem(arrayNames[2]));

        const activeFolder = folderStore.getAciveFolder();
        if(activeFolder != null){
            items.push({
                key: arrayNames[arrayNames.length - 1],
                title: <Link to={url}>{activeFolder.name}</Link>
            });
        }
        return items;
    }

    static getItem = (name: string) => {
        if(name === 'projects') 
        {
            return {
                key: 'all_projects',
                title: <Link to={'/home'}>{'> Все проекты'}</Link>
            } as BreadAppItem;
        }
        return {
            key: 'all_renders',
            title: <Link to={'/home/renders'}>{'> Все рендеры'}</Link>
        } as BreadAppItem;
    }
}