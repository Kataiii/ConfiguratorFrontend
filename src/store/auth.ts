import { makeAutoObservable } from "mobx"
import axios from "axios"


export interface IFormLogin {
  email: string,
  password: string,
  failEmail: boolean,
  failPassword: boolean,
  isAuthorised : boolean
}

class Auth {
    
    formLogin : IFormLogin = {
        email: "",
        password: "",
        failEmail: false,
        failPassword: false,
        isAuthorised : false
    }

    constructor(){
        makeAutoObservable(this)
    }

    visibleError = (isVisible: boolean) => {
        this.formLogin.failEmail = isVisible;
        this.formLogin.failPassword = isVisible
    }

    onBlurEmail = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        if (typeof e != 'string') this.formLogin.email = e.target.value
    }
    
    onBlurPassword = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        if (typeof e != 'string') this.formLogin.password = e.target.value
    }
    
    onFocusEmail = () => {
        this.formLogin.failEmail = false
    }
    
    onFocusPassword = () => {
        this.formLogin.failPassword = false
    }

    apiLogin = async () => {
        const apiLoginUrl = 'http://127.0.0.1:9000/api/login';
        let response = await axios.post(apiLoginUrl,
          {
            email: this.formLogin.email,
            password: this.formLogin.password
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            withCredentials: true
          })
          .then((response) => {
            this.visibleError(false);
            this.formLogin.isAuthorised = true;
            localStorage.setItem('token', response.data.token);
          }
          )
          .catch((error) => {
            if (error.response) {
                this.visibleError(true);
                this.formLogin.isAuthorised = false;
            }
          });
          return this.formLogin;
      }
}

export default new Auth()