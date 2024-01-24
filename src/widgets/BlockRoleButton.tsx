import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { IRole } from "../entities/Role/Role";
import RoleButton from "../features/RoleButton";
import CompanyService from "../store/services/CompanyService";
import EmployeeService from "../store/services/EmployeeService";
import UserService from "../store/services/UserService";
import Avatar from '../assets/icons/icon-avatar.svg';
import { IUser } from "../entities/User/User";
import { IEmployee } from "../entities/User/Employee";
import { ICompany } from "../entities/User/Company";


const BlockRoleButton: React.FC = () => {
    const { store } = useContext(Context);
    const [accounts, setAccounts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const image = store.getAccount().profile_picture == '' || store.getAccount().profile_picture == null
        ? Avatar
        : store.getAccount().profile_picture;

    useEffect(() => {
        getAccounts();
    }, []);

    useEffect(() => {
        console.log(accounts);
        if(accounts.length > 0){
            setIsLoading(false);
        }
    }, [accounts.length]);

    const getAccounts = () => {
        const account = store.getAccount();
        const roles: IRole[] = store.getAccount().roles;
        roles.forEach(async (role) => {
            await getInfo(role, account.id);
        });
        setIsLoading(false);
    }

    const getInfo = async (role: IRole, id: number) => {
        switch (role.name) {
            case 'user':
                const user: IUser = await UserService.getUserById(id);
                setAccounts(accounts => [...accounts, user]);
                break;
            case 'company_user':
                const employee: IEmployee = await EmployeeService.getEmployeeById(id);
                setAccounts(accounts =>[...accounts, employee]);
                break;
            case 'company':
                const company: ICompany = await CompanyService.getCompanyById(id);
                setAccounts(accounts => [...accounts, company]);
                break;
        }
    }

    return (
        isLoading
            ? <p>Загрузка...</p>
            : <div>
                <>
                {
                    accounts.map((item,index) => {
                        console.log(item.login);
                        return <RoleButton 
                                    key={index} 
                                    image={image} 
                                    title={item.login != undefined ? item.login : item.company_name} 
                                    content={item.surname} 
                                    onClick={() => console.log(item.login)}/>
                    })
                }
                </>
            </div>
    )
}

export default BlockRoleButton;