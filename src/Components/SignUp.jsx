import React, { useContext } from 'react';
import style from '../Css/login.module.css'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/dashboard');
    };

    const { info, setInfo } = useContext(GlobalContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    };

    return (
        <div className="root">
            <div className={style.container}>
                <form >
                    <div className={style.username}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" onChange={handleChange} placeholder="Enter your username" />
                    </div>
                    <div className={style.password}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <button className={style.btn} onClick={handleSubmit} type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
