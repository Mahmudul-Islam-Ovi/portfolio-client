import React from 'react';
import ProjectSetting from './ProjectSetting';
import './Setting.css';

const Settings = () => {
    return (
        <div className="container">
            <h1 className='mt-5 pt-5'>Setting</h1>
            <h2>Portfolio Update</h2>
        <form onSubmit={''}>
          <input type="text"name="user_name" className="user"  placeholder="Name"/>
          <br />
          <textarea name="message"  className="user" placeholder="Description"/>
          <br />
          <input type="submit" value="Submit" className="btn-primary m-3 p-1"/>
        </form>
        <ProjectSetting></ProjectSetting>
        </div>
    );
};

export default Settings;