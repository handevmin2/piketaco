import React, { useEffect, useState } from "react"

export default function BadgerChatroom(props) {

    const [messages, setMessages] = useState([]);

    const loadMessages = () => {
        fetch(`https://cs571.org/api/s24/hw6/messages?chatroom=${props.name}&page=1`, {
            headers: {
                "X-CS571-ID": 'bid_7a78b66ef2c579bc9275b361f6d2094e34c411077ae30314258b9ffe513347ea'
            }
        }).then(res => res.json()).then(json => {
            setMessages(json.messages)
        })
    };


    // Why can't we just say []?
    // The BadgerChatroom doesn't unload/reload when switching
    // chatrooms, only its props change! Try it yourself.
    useEffect(loadMessages, [props]);

    return <>
        <h1>{props.name} Chatroom</h1>
        {
            /* TODO: Allow an authenticated user to create a post. */
        }
        <hr/>
        {
            messages.length > 0 ?
                <>
                    {
                        /* TODO: Complete displaying of messages. */
                    }
                </>
                :
                <>
                    <p>There are no messages on this page yet!</p>
                </>
        }
    </>
}