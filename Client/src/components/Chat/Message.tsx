import React from 'react'

interface componentProps {
    self: boolean;
    date: string;
    message: string;
}

const Message = ({ self, date, message } : componentProps) => {
  return (
    <li>
        <div className={ `message-data ${ self ? 'align-left' : '' }` }>
            <span className="message-data-time">{ date }</span> &nbsp; &nbsp;
            { self && <span>You</span> }
        </div>
        
        <div className={ `message ${ self ? 'my-message' : 'other-message' }` }>
            { message }
        </div>
    </li>
  )
}

export default Message