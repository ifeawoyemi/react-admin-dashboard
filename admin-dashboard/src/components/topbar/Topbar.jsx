import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
      <div className="topbar">
          <div className="topbarWrapper">
              <div className="topLeft">
                  <span className='logo'>Ifeoluwa</span>
              </div>
              <div className="topRight">
                  <div className='topbarIconContainer'>
                      <NotificationsNone />
                      <span className='topIconBadge'>2</span>
                  </div>
                  <div className='topbarIconContainer'>
                      <Language />
                      <span className='topIconBadge'>2</span>
                  </div>
                  <div className='topbarIconContainer'>
                      <Settings />
                  </div>
                  <img src="https://images.pexels.com/photos/7319030/pexels-photo-7319030.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="topAvatar" />
              </div>
          </div>
      </div>
    )
  }
  
