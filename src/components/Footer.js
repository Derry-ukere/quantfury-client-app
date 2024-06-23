/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {Appdetails} from '../config';
import { getSettingsDetails } from '../utils/compute';


function Footer() {
const [settings,setSettings] = useState({})

useEffect(() => {
  async function fetchData() {
    const settingsObject = await getSettingsDetails();
    setSettings(settingsObject);
  }
  fetchData();
}, []);

  return (
    <footer className="bg">
      <div className="container">
        <div className="row container app-py-1">
          <div className="col l8 s12 app-mobile-center">
            <img src={Appdetails.logo} style={{ height: '72px' }} />
            <p> 
              <span className="material-icons notranslate">mail</span>  {settings.contactDetails?.email || ""}
            </p>
          </div> 
          <div className="col l4 s12 app-mobile-center">
            <br />
            <h3 style={{ marginBottom: '15px' }}>Quick Links</h3>
            <Link to="/pages/contact">Contact Us</Link>
            <br />
            <Link to="/signin">My Account</Link>
            <br />
            <Link to="/signup">Create Account</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
