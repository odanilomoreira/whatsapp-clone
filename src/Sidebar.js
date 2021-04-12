import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


function Sidebar() {
    return (
        <div className='sidebar'>
                
            <div className="sidebar__header">
                <Avatar /><span>Danilo Moreira</span>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>    
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="Search or start a new chat" type="text" />
                </div>
                
            </div>

            <div className="sidebar__chats">
                <h1>chats commit</h1>
            </div>

        </div>
    )
}

export default Sidebar
