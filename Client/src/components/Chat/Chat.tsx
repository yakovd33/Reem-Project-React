import '../../style/Chat.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthHelper from '../../helpers/AuthHelper';
import Message from './Message';
const io = require("socket.io-client");

interface message {
    username: string;
    isAdmin: boolean;
    message: string;
    date: string;
}

const Chat = () => {
    const [ message, setMessage ] = useState('');
    const [ messages, setMessages ] = useState<message[]>([]);
    const [ user, setUser ] = useState(AuthHelper.getUser());

    const [ users, setUsers ] = useState<string[]>([]);
    const [ currentUser, setCurrentUser ] = useState('');

    const [ socket, setSocket ] = useState(io.connect('ws://localhost:4444', {
        reconnectionDelay: 1000,
        reconnection: true,
        reconnectionAttemps: 10,
        transports: ['websocket'],
        agent: false,
        upgrade: false,
        rejectUnauthorized: false
    }));

    useEffect(() => {
        if (socket) {
            socket.on("connect", () => {
                socket.emit('register', { user })
            });

            socket.on('message', (message : string) => {
                console.log(message);
                setMessages(oldMessages => [ ...oldMessages, {
                    username: user.isAdmin ? currentUser : 'Admin',
                    isAdmin: user.isAdmin ? false : true,
                    message,
                    date: new Date().toLocaleString()
                } ] );
            });
        }
    }, [ socket ])

    // Send message
    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault();
                
        if (message) {
            let finalUsername = !user.isAdmin ? user.username : currentUser;
            axios.post(`http://localhost:4000/chat/send/`, { message, username: finalUsername, isAdmin: user.isAdmin }).then((response : any) => {
                setMessages(oldMessages => [ ...oldMessages, {
                    username: !user.isAdmin ? user.username : currentUser,
                    isAdmin: user.isAdmin,
                    message,
                    date: new Date().toLocaleString()
                } ] );
                
                socket.emit('message', { isAdmin: user.isAdmin, username: finalUsername, message });

                setMessage('');
            });
        }
    }

    // Get user-admin messages / Connect to socket.io server
    useEffect(() => {
        axios.get(`http://localhost:4000/chat/messages/${ user.username }`).then((response : any) => {
            setMessages(response.data)
        });

        // Socket

    }, []);

    // Get open chats
    useEffect(() => {
        if (user.isAdmin) {
            axios.get(`http://localhost:4000/chat/open_chats/`).then((response : any) => {
                setUsers(response.data);
            });
        }
    }, [ user ])

    // Get admin-user messages
    useEffect(() => {
        if (user.isAdmin) {
            axios.get(`http://localhost:4000/chat/messages/admin/${ currentUser }`).then((response : any) => {
                setMessages(response.data)
            });
        }
    }, [ currentUser ]);

    return (
        <div>
            { !user.isAdmin &&
                <div className="chat">
                    <div className="chat-history">
                        <ul>
                            { messages.map((item) => (
                                <Message self={ !item.isAdmin } message={ item.message } date={ item.date } />
                            )) }
                        </ul>
                    </div>

                    <form className="chat-message clearfix" onSubmit={ (e) => onSubmit(e) }>
                        <textarea name="message-to-send" id="message-to-send" value={ message } onChange={ (e) => setMessage(e.target.value) } placeholder="Type your message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            }

            { user.isAdmin && (
                <div className="container">
                    <h4>Users:</h4>

                    <div>
                        { users.map((item : string) => (
                            <button className={ `user-select-item ${ currentUser == item ? 'active' : '' }` } onClick={ () => setCurrentUser(item) }>{ item }</button>
                        )) }
                    </div>

                    { currentUser &&
                        <div className="chat">
                            <div className="chat-history">
                                <ul>
                                    { messages.map((item) => (
                                        <Message self={ item.isAdmin } message={ item.message } date={ item.date } />
                                    )) }
                                </ul>
                            </div>

                            <form className="chat-message clearfix" onSubmit={ (e) => onSubmit(e) }>
                                <textarea name="message-to-send" id="message-to-send" value={ message } onChange={ (e) => setMessage(e.target.value) } placeholder="Type your message"></textarea>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    }
                </div>
            ) }
        </div>
    );
};

export default Chat;
