import { useRef,useEffect, useState } from 'react';
import chat from '../assets/chat.svg'
const Notifaction = () => {
    const [first, setfirst] = useState(null)
    const chatRef = useRef(null);
    
    useEffect(() => {
        setfirst(chatRef.current.textContent)
    }, [])

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-8">
            <div className="shrink-0">
                <img className="h-12 w-12" src={chat} alt="ChitChat Logo" />
            </div>
            <div>
                <div className="text-xl font-medium text-black" ref={chatRef}>ChitChat</div>
                <p className="text-slate-500">You have a new message! {first}</p>
            </div>
        </div>
    );
}

export default Notifaction;