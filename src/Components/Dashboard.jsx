import React, { useContext } from 'react'
import styles from '../Css/dashboard.module.css'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from './GlobalContext.jsx';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/edit');
    };
    const goback = () => {
        navigate('/');
    }
    const { info } = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Dashboard</h1>
            </header>
            <div className={styles.dashboardContent}>
                <div className={styles.userInfo}>
                    <div>
                        <h2>Welcome, {info.username}</h2>
                        <h8>Here are your details and recent activities.</h8>
                    </div>
                    <div>
                        <h3>Account Info</h3>
                        <p>Email: {info.email}</p>
                        <p>Plan: {info.plan}</p>
                    </div>
                </div>
                <div className={styles.statistics}>
                    <div>
                        <div>
                            <h3>Statistics 1</h3>
                            <p>Details about statistics 1</p>
                        </div>
                        <div>
                            <h3>Statistics 2</h3>
                            <p>Details about statistics 2</p>
                        </div>
                        <div>
                            <h3>Statistics 3</h3>
                            <p>Details about statistics 3</p>
                        </div>
                        <div className="btnContainer">
                            <button className='backHome' onClick={goback}>Log Out</button>
                            <button className='editbtn' type='Submit' onClick={handleSubmit}>Edit</button>
                        </div>                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
