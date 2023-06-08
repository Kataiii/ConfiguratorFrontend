const FormProfilePart = () => {
    return(
        <div>
            <div>
                <p>ФИО</p>
                <div>
                    <input type={'text'} placeholder='Имя'/>
                    <input type={'text'} placeholder='Фамилия'/> 
                    <input type={'text'} placeholder='Отчество'/>
                </div>
            </div>
            <div>
                <div>
                    <p>Email</p>
                    <div>
                        <input type={'email'} placeholder='email@mail.ru'/>
                        <button>Изменить</button>
                    </div>
                </div>
                <div>
                    <p>Телефон</p>
                    <input type={'text'} placeholder='+79603469551'/>
                    <button>Изменить</button>
                </div>
            </div>
            <div>
                <div>
                    <p>Пароль</p>
                    <input type={'password'} placeholder='Старый пароль'/>
                    <input type={'password'} placeholder='Новый пароль'/>
                    <input type={'password'} placeholder='Подтверждение пароля'/>
                    <button>Сохранить изменения</button>
                </div>
                <div>
                    <p>Обо мне</p>
                    <textarea></textarea>
                    <button>Перейти на коммерческий аккаунт</button>
                </div>
            </div>
        </div>
    )
}

export default FormProfilePart;