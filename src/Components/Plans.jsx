import React, { useContext, useState } from 'react';
import styles from '../Css/plans.module.css';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';

const Plans = () => {
    const { info } = useContext(GlobalContext)
    const [payableAmounts, setPayableAmounts] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/dashboard');
    };

    const plans = ['Basic', 'Premium', 'Ultra'];
    const interestRates = {
        Basic: 5,
        Premium: 10,
        Ultra: 12
    };

    const calculatePayableAmount = (income, plan) => {
        if (plan in interestRates) {
            return (interestRates[plan] / 100) * income;
        }
        return 0;
    };


    const calculateReceivableAmount = (plan) => {
        let payable = 0
        if (plan == "Basic") {
            const temp = info.monthlyPayment * 6
            payable = temp + ((0.05) * temp)
        }
        else if (plan == "Premium") {
            const temp = info.monthlyPayment * 12
            payable = temp + ((0.1) * temp)
        }
        else if (plan == "Ultra") {
            const temp = info.monthlyPayment * 18
            payable = temp + ((0.12) * temp)
        }
        info.receivableAmount = payable

    }
    const time = new Date()
    const day = String(time.getDate())
    const month = String(time.getMonth() + 1)
    const year = String(time.getFullYear())
    const fullDate = `${day}/${month}/${year}`

    const endDate = () => {
        let newYear = Number(year)
        let NewMonth = 0
        if (info.plan == "Basic") {
            NewMonth = Number(month) + 6
            if (NewMonth >= 12) {
                newYear++
            }
        }
        else if (info.plan == "Premium") {
            newYear += 1
            NewMonth = Number(month)
        }
        else if (info.plan == "Ultra") {
            NewMonth = Number(month) + 18
            if (NewMonth >= 12) {
                NewMonth -= 12
                newYear += 2
            }
        }
        const newDay = Number(day) + 1
        const endDate = `${newDay}/${NewMonth}/${newYear}`
        info.end = String(endDate)
    }

    const handleIncomeChange = (e, plan) => {
        const income = parseFloat(e.target.value);
        info.monthlyIncome = income
        if (!isNaN(income)) {
            const amount = calculatePayableAmount(income, plan);
            info.monthlyPayment = amount
            setPayableAmounts(prevAmounts => ({ ...prevAmounts, [plan]: amount }));
        }
        info.plan = plan
        calculateReceivableAmount(plan)
        info.date = fullDate
        endDate()
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <h1 className={styles.header}>Plans</h1>
                <button className={styles.toDashboard} onClick={() => navigate('/dashboard')}>To Dashboard</button>
                <button className={styles.toDashboard} onClick={() => navigate('/')}>Log Out</button>
            </div>
            <div className={styles.plansWrapper}>
                {plans.map((plan) => (
                    <div key={plan} className={styles.plan}>
                        <h2>{plan}</h2>
                        <form className={styles.fields} onSubmit={handleSubmit}>
                            <div className={styles.field}>
                                <label>Tenure:</label>
                                <input type="text" name={`tenure${plan}`} defaultValue={(plan === 'Basic' ? '6 Months' : '') || (plan === 'Premium' ? '12 Months' : "") || (plan === 'Ultra' ? '18 Months' : "")} readOnly />
                            </div>
                            <div className={styles.field}>
                                <label>Monthly Income:</label>
                                <input type="number" min={5000} name={`income${plan}`} onChange={(e) => handleIncomeChange(e, plan)} />
                            </div>
                            <div className={styles.field}>
                                <label>Interest:</label>
                                <input type="text" name={`interest${plan}`} defaultValue={`${interestRates[plan]}%`} readOnly />
                            </div>
                            <div className={styles.field}>
                                <label>Amount to be paid:</label>
                                <input type="text" value={payableAmounts[plan] ? payableAmounts[plan].toFixed(2) : ''} readOnly />
                            </div>
                            <button className={styles.subBtn} type='submit' onSubmit={handleSubmit} >Select</button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
