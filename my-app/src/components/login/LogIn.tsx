import React from 'react';
import { onChange, validateForm } from './utils'
import '../../style/login.css';

interface ArrayLogIn{
    name: string, 
    value: string, 
    required: boolean, 
    error: string
}

interface PropsLogIn{
    openAndCloseLogIn:  (props: boolean) => void
}

interface StateLogIn{
   email: ArrayLogIn,
   password: ArrayLogIn,
   rememberMe: {name: string, value: boolean, required: boolean, error: string}
    openAndCloseLogIn:  (props: boolean) => void
}

class LogIn extends React.Component<PropsLogIn, StateLogIn>{
    constructor(props: PropsLogIn){
        super(props);
    
        this.state = {
            email: { name: 'email', value: '', required: true, error: '' },
            password: { name: 'password', value: '', required: true, error: ''},
            rememberMe: { name: 'rememberMe', value: false, required: false, error: ''},
            openAndCloseLogIn: this.props.openAndCloseLogIn
        }
    }

    render(){
        const { email, password, rememberMe } = this.state;
        return(
            <div>
                <div className="shadow"></div>
                <div className="log-in">
                    <div className="buttons-container">
                        <button className="btn-login-cancel" onClick={()=>this.props.openAndCloseLogIn(false)}>X</button>
                        <form onSubmit={this.onSubmit} className="form-login">
                            <div className="form-group">
                            <label className="form-label">Email *</label><br />
                                <input 
                                    name={email.name} 
                                    value={email.value} 
                                    onChange={this.onChange} 
                                    type="email" 
                                    className={email.error.length > 0 ? "is-invalid" : (email.value.length > 0 ? "is-valid" : "form-control")}
                                    placeholder="Vlož email">
                                </input>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Heslo *</label><br />
                                <input 
                                    name={password.name} 
                                    value={password.value} 
                                    onChange={this.onChange} 
                                    type="password" 
                                    className={password.error.length > 0 ? "is-invalid" : (password.value.length > 0 ? "is-valid" : "form-control")}
                                    placeholder="Vlož heslo">
                                </input>
                            </div>
                            <label>
                                <input 
                                    name={rememberMe.name} 
                                    checked={rememberMe.value} 
                                    onChange={this.onChange} 
                                    className="form-check-input"
                                    type="checkbox" />
                                Pamätať si ma
                            </label>
                        <button type="submit" className="btn-login-submit">Potvrdiť</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    onChange = (event: any) => {
        const name = event.target.name;
        let value = event.target.value;
        
        if(name === this.state.rememberMe.name){
            value = event.target.checked;
        }
        onChange(this, name, value)
    }

    onSubmit = (event: any) => {
        event.preventDefault();

        if(validateForm(this)){
            const { email, password, rememberMe } = this.state;
            const model = {
                email: email.value,
                password: password.value,
                rememberMe: rememberMe.value
            }
            console.log(model);
            //hide login
            this.props.openAndCloseLogIn(false)
        }
    }
}

export default LogIn;