import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './Dashboard.css';

const Dashboard = (props) => {
    return (
        <div className="DashBoard">
            <NavBar user={props.user} />
        </div>
    );
};

export default Dashboard;