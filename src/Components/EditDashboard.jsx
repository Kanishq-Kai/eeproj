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
    const hmm = (event) => {
        event.preventDefault()
        console.log('Changes Saved')
    }

    return (
        <div>
            <form onSubmit={hmm}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={info.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={info.email} onChange={handleChange} />
                </div>
                <div>
                    <label>PAN:</label>
                    <input type="text" name="PAN" value={info.PAN} onChange={handleChange} />
                </div>
                <Link className={addons.lnk} to="/dashboard">Go Back</Link>
                <button className={addons.btnbtn} type='submit' onSubmit={hmm}>Save</button>
            </form>
        </div>
    );
};

export default EditDashboard;
