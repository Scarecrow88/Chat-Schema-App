import React, {useState} from "react";
import "../css/formContent.css";
import "../css/messageBoxContent.css"
export default function Chat () {
    const [messages, setMessages] = useState ([
        {
            id: 1,
            text: "Hello. How are you today?",
            time: "11:00",
            avatar: "./img/Image14.jpg",
            side: "right",
            darker: false,
        },
        {
            id: 2,
            text: "Hey! I'm fine. Thanks for asking!",
            time: "11:01",
            avatar: "./img/Image15.jpg",
            side: "left",
            darker: true,
        },
        {
            id: 3,
            text: "Sweet! So, what do you wanna do today?",
            time: "11:02",
            avatar: "./img/Image14.jpg",
            side: "right",
            darker: false,
        },
        {
            id: 4,
            text: "Nah, I dunno. Play soccer.. or learn more coding perhaps?",
            time: "11:05",
            avatar: "./img/Image15.jpg",
            side: "left",
            darker: true,
        },
    ]);
    const [input, setInput] = useState ("");
    const handleSubmit = (e) => {
        e.preventDefault ();
        if (!input.trim ()) return;
        const newMessage = {
            id: messages.length + 1,
            text: input,
            time: new Date ().toLocaleTimeString ([], { 
                hour: "2-digit", 
                minute: "2-digit" 
            }),
            avatar: "./img/Image14.jpg",
            side: "right",
            darker: false,
        };
        setMessages ([...messages, newMessage]);
        setInput ("");
    };
    return (
        <main>
            <div className="databox">
                <form id="formtask" onSubmit={handleSubmit}>
                    <h2>Messages</h2>
                    <div>
                        <div className="chatfield">
                            {messages.map ((msg) => (
                                <div
                                    key={msg.id}
                                    className={`container ${msg.darker ? "darker" : ""}`}
                                >
                                    <img
                                        src={msg.avatar}
                                        alt="Avatar"
                                        className={msg.side === "left" ? "right" : ""}
                                        style={{ width: "100%" }}
                                    />
                                    <p>{msg.text}</p>
                                    <span
                                        className={msg.side === "left" ? "time-left" : "time-right"}
                                    >
                                        {msg.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="controlbox">
                        <div>
                            <button className="sendbutton" type="submit">
                                <svg
                                    className="sendicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25px"
                                    height="25px"
                                    viewBox="0 0 32 32"
                                    style={{
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        strokeLinejoin: "round",
                                        strokeMiterlimit: 2,
                                    }}
                                >
                                    <path d="M11.499,19.173l5.801,-5.849c0.389,-0.392 1.022,-0.394 1.414,-0.006c0.392,0.389 0.395,1.022 0.006,1.414l-5.798,5.847l5.306,8.002c0.207,0.313 0.572,0.483 0.945,0.441c0.373,-0.042 0.691,-0.289 0.824,-0.64l9.024,-23.904c0.138,-0.366 0.05,-0.78 -0.226,-1.058c-0.276,-0.278 -0.689,-0.369 -1.057,-0.233l-24.004,8.892c-0.353,0.13 -0.602,0.448 -0.646,0.821c-0.044,0.373 0.125,0.74 0.438,0.948l7.973,5.325Z" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <textarea
                                id="description"
                                className="textdesc"
                                rows="2"
                                placeholder="Enter your message"
                                value={input}
                                onChange={(e) => setInput (e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}
