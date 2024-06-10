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
        navigate('/plans');
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
                        <p>Here are your details and recent activities.</p>
                    </div>
                    <div>
                        <h3>Account Info</h3>
                        <p>Email: <b>{info.email}</b></p>
                        <p>Plan: <b>{info.plan}</b></p>
                        <p>PAN: <b>{info.PAN}</b></p>
                    </div>
                </div>
                <div className={styles.statistics}>
                    <div>
                        <div>
                            <h2>Amount to be paid monthly</h2>
                            <h3><b>{"₹" + info.monthlyPayment}</b></h3>
                            <u><h2>{(info.plan === 'Basic' ? "for 6 Months" : "") || (info.plan === 'Premium' ? "for 12 Months" : "") ||
                                (info.plan === 'Ultra' ? "for 18 Months" : "")}</h2></u><hr></hr>
                        </div>
                        <div>
                            <h2>Amount receivable at the end of <u>{(info.plan === 'Basic' ? "6th Month" : "") || (info.plan === 'Premium' ? "12th  Month" : "") || (info.plan === 'Ultra' ? "18th Month" : "")}</u> is:</h2>
                            <h3><b>{"₹" + info.receivableAmount}</b></h3><hr></hr>
                        </div>
                        <div>
                            <h3>Date Subscribed: {info.date}</h3>
                            <h3>End Date:{info.end}</h3>
                        </div>

                    </div>
                </div>
                <div className={styles.btns}>
                    <button className='backHome' onClick={goback}>Go Back</button>
                    <button className='editbtn' type='Submit' onClick={handleSubmit}>Edit</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
