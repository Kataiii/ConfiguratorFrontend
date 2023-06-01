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
        isCheckedUserAgreement: false,
        isRegist : false
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new RegistUser();