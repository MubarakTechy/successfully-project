import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [sending, setSending] = useState(false)

    async function fetchApi(e) {
        e.preventDefault()
        if(!name || !email || !message){
            toast.error("Please fill in all required fields")
            return
        }
        setSending(true)
        try {
           const baseurl ='https://formserver-srjh.onrender.com/submit-form/f93837d0-30b7-40d9-bfd2-5d0df4b61e8f'
           const response  = await fetch(baseurl,{
              method:'POST',
              headers: {'Content-type' : 'application/json'},
              body : JSON.stringify({name, email, subject, message})    
           }); 
           const resData = await response.json();           
            setSending(false)
            toast.success('Message sent!!!')    
            setName(""); setEmail(""); setSubject(""); setMessage("");
            console.log("data ", resData) 
        } catch (error) {
            setSending(false)
            toast.error ('Unable to send, please check your internet.');
            console.log(error)
        }
    }

    return (
        <div id='Contact' className='flex justify-center max-md:flex-col max-lg:items-start max-lg:flex-col overflow-hidden items-center p-[5%] gap-[20%] bg-black'>
            {/* Form */}
            <form onSubmit={fetchApi} method='post'>
                <div className='flex shape flex-col justify-center items-start text-start gap-5'>
                    <h1 className='font-mono text-[35px] text-[#CF1F1F]'>Contact</h1>
                    <input onChange={(e)=> setName(e.target.value)} name='name' value={name} className='w-[35vw] max-lg:w-[80vw] max-sm:w-[90vw] bg-[#1E1E1E] p-3 border-none text-white rounded-[5px] hover:border-b' type="text" placeholder="Name" required />
                    <input onChange={(e)=> setEmail(e.target.value)} name='email' value={email} className='w-[35vw] max-lg:w-[80vw] max-sm:w-[90vw] bg-[#1E1E1E] p-3 border-none text-white rounded-[5px] hover:border-b' type="email" placeholder='Email' required />
                    <input onChange={(e)=> setSubject(e.target.value)} name='subject' value={subject} className='w-[35vw] max-lg:w-[80vw] max-sm:w-[90vw] bg-[#1E1E1E] p-3 border-none text-white rounded-[5px] hover:border-b' type="text" placeholder='Subject' />
                    <div className='flex flex-col gap-4 text-start'>
                        <textarea onChange={(e)=> setMessage(e.target.value)} name='message' value={message} className='max-lg:w-[80vw] max-sm:w-[90vw] w-[35vw] bg-[#1E1E1E] rounded-[5px] text-[grey] p-3 h-[30vh] border-1' placeholder='Message'></textarea>
                        <button disabled={sending} className={`p-2 font-mono max-sm:w-[25vw] max-lg:w-[30vw] w-[10vw] rounded ${sending ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#CF1F1F] hover:bg-black'} text-[#E9E9E9]`}>
                            {sending ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </div>
                <ToastContainer position="bottom-right" autoClose={3000} />
            </form>

            {/* Info */}
            <div className='flex flex-col max-md:justify-start max-sm:items-start max-sm:text-start gap-5 p-2'>
                <h1 className='font-serif text-[35px] text-[#CF1F1F]'>Info</h1>
                <p className='text-lg text-white w-[30vw] max-sm:w-[80vw] font-mono text-start'>Please fill out the form in this section to contact me.</p>
                
                {/* Email */}
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-3 items-center'>
                        <MdEmail className='text-[#CF1F1F] animate-bounce' size={30} />
                        <h1 className='font-serif text-[22px] text-[#CF1F1F]'>Email</h1>
                    </div>
                    <a href='mailto:kadirmubarak27@gmail.com' className='font-mono text-[15px] text-white hover:underline'>
                        kadirmubarak27@gmail.com
                    </a>
                </div>

                {/* WhatsApp */}
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-3 items-center'>
                        <FaWhatsapp className='text-[#CF1F1F] animate-bounce' size={40} />
                        <h1 className='font-serif text-[22px] text-[#CF1F1F]'>WhatsApp</h1>
                    </div>
                    <a href='https://wa.me/2347066214165' target="_blank" rel="noopener noreferrer" className='font-mono text-[15px] text-white hover:underline'>
                        +234 706 621 4165
                    </a>
                </div>

                {/* Instagram */}
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-3 items-center'>
                        <FaInstagram className='text-[#CF1F1F] animate-bounce' size={30} />
                        <h1 className='font-serif text-[22px] text-[#CF1F1F]'>Instagram</h1>
                    </div>
                    <a href='https://www.instagram.com/mk__tech1?igsh=MTc4MnRrOXBkanlpcg==' target="_blank" rel="noopener noreferrer" className='font-mono text-[15px] text-white hover:underline'>
                        @mk__punk
                    </a>
                </div>

                {/* TikTok */}
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-3 items-center'>
                        <FaTiktok className='text-[#CF1F1F] animate-bounce' size={30} />
                        <h1 className='font-serif text-[22px] text-[#CF1F1F]'>TikTok</h1>
                    </div>
                    <a href='https://www.tiktok.com/@mktech__001?_t=ZS-8z7KSKvtDQw&_r=1' target="_blank" rel="noopener noreferrer" className='font-mono text-[15px] text-white hover:underline'>
                        @mkpunk2
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact
