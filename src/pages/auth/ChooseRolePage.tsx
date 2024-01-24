import BlockRoleButton from "../../widgets/BlockRoleButton";


const ChooseRoleRage: React.FC = () => {
    return(
        <div>
            <h1>Вход в аккаунт</h1>
            <p>Мы нашли у вас несколько аккаунтов, под каким вы хотите зайти?</p>
            <BlockRoleButton/>
        </div>
    );
}

export default ChooseRoleRage;