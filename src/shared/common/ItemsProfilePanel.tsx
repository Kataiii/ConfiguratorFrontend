import { IRole } from "../../entities/Role";

interface ItemProfile{
    name: string;
    url: string;
}

const UserItemsProfile: ItemProfile[] = [
    {
        name: "Персональная данные", 
        url: "/home/profile"
    },
    {
        name: "Подписка",
        url: "/home/profile/licence"
    }
];

const EmployeeItemsProfile: ItemProfile[] = [
    {
        name: "Данные организации", 
        url: "/home/profile"
    }
];

const CompanyItemsProfile: ItemProfile[] = [
    {
        name: "Данные организации", 
        url: "/home/profile"
    },
    {
        name: "Сотрудники",
        url: "/home/profile/employees"
    },
    {
        name: "Подписка", 
        url: "/home/profile/licence"
    }
]

export const filterItemsPanel = (activeRole: string, roles: IRole[]) => {
    let arrItems: ItemProfile[] = [];
    switch(activeRole){
        case 'user':
            arrItems = UserItemsProfile;
            break;
        case 'company':
            arrItems = CompanyItemsProfile;
            break;
        case 'company_user':
            arrItems = EmployeeItemsProfile;
            break;
    }
    const adminRole = roles.find(item => item.name === "admin");
    if(adminRole != null){
        arrItems.push({
            name: "Админская панель",
            url: "/admin"
        })
    }
    return arrItems.filter((obj, index, self) =>index === self.findIndex((o) => o.name === obj.name));
}