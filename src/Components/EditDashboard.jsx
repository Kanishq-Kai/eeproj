import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { Link } from 'react-router-dom';
import addons from '../Css/editdashboard.module.css'
const EditDashboard = () => {
    const { info, setInfo } = useContext(GlobalContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    };

    return (
        <div>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={info.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={info.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Plan:</label>
                    <input type="text" name="plan" value={info.plan} onChange={handleChange} />
                </div>
                <div>
                    <label>PAN:</label>
                    <input type="text" name="PAN" value={info.PAN} onChange={handleChange} />
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="number" name="amount" value={info.amount} onChange={handleChange} />
                </div>
                <Link className={addons.lnk} to="/dashboard">Go Back</Link>
            </form>
        </div>
    );
};

export default EditDashboard;
