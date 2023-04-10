import { makeAutoObservable } from "mobx"
import { FormValues } from "../entities/User/User"
import axios from "axios"

class RegistUser {
    formRegist: FormValues = {
        login: '',
        email: '',
        password: '',
        repeatPassword: '',
        isCheckedMailing: true,
        isCheckedUserAgreement: false
    }

    constructor() {
        makeAutoObservable(this)
    }

    apiRegistUser = async () => {
        const apiRegistUrl = 'http://127.0.0.1:9000/api/regist-user';
        let response = await axios.post(apiRegistUrl,
            {
                login: this.formRegist.login,
                email: this.formRegist.email,
                password: this.formRegist.password,
                isCheckedMailing: this.formRegist.isCheckedMailing,
                isCheckedUserAgreement: this.formRegist.isCheckedUserAgreement
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                withCredentials: true
            })
            .then((response) => {
                console.log(response);
                // this.visibleError(false);
                // this.formLogin.isAuthorised = true;
                // localStorage.setItem('token', response.data.token);
            }
            )
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    // this.visibleError(true);
                    // this.formLogin.isAuthorised = false;
                }
            });
        return this.formRegist;
    }
}

export default new RegistUser();