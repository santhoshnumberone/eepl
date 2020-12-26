import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {FiPhoneCall} from 'react-icons/fi'
import {BsThreeDotsVertical} from 'react-icons/bs'

export const ContactData = [
    {
        icon: (<FiPhoneCall 
            css={`
                color: #0a66c2;
                font-size: 1.6rem;
                
            `}/>),
        desc: "+91-8105415436",
    },
    {
        icon: (<BsThreeDotsVertical 
            css={`
                color: #0a66c2;
                font-size: 3.1rem;
                
            `}/>),
        desc: "",
    },
    {
        icon: (<AiFillLinkedin 
            css={`
                color: #0a66c2;
                font-size: 3.1rem;
                
            `}/>),
        desc: "LinkedIn Link",
    },
    {
        icon: (<BsThreeDotsVertical
            css={`
                color: #0a66c2;
                font-size: 3.1rem;
                
            `}/>),
        desc: "",
    },
    {
        icon: (<HiOutlineMail 
            css={`
                color: #0a66c2;
                font-size: 1.6rem;
                
            `}/>),
        desc: "santhosh@electraanuenergy.com",
    },
    
]