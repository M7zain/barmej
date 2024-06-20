import React from 'react'
import { Logo } from '../assets'
import {socialMedia, Company,Support } from '../constants'
const Footer = () => {
  return (
    <footer className='flex flex-row bg-slate-300 px-20 py-20 justify-between mb-0 '>
        

        {/* rights and Social media */}
        
        
        <div className='flex flex-col '>
            <img src={Logo} alt="Barmej-Logo" className='w-36 mb-4'/>

            <p>All Rights reserved ® </p>

       <div className=' flex flex-row justify-center '> 
       { 
                    socialMedia.map((social)=> (   
                         <img src={social.src} alt={social.alt} className='bg-primary rounded-full p-2 my-3  hover:bg-slate-400 transition duration-500 ' width={35} height={35}/>
                         ))
                }

       </div>

 </div>

{/*---------company section -------------*/}


                 <div className=' mx-36 flex flex-col'> 
                    <h4 className='font-semibold text-lg '>
                         company
                    </h4>
                    { 
                        Company.map((comp) => (
                            <a className='text-primary hover:text-slate-500 transition durarion-700'>{comp.title}</a>
                        ))
                    }
                  
                </div>

{/* ----------------support section ------------------- */}


    <div className=' mx-36 flex flex-col '> 
                    <h4 className='font-semibold text-lg'>
                         Support
                    </h4>
                    { 
                        Support.map((sup) => (
                            <a className='text-primary hover:text-slate-500 transition durarion-700'>{sup.title}</a>
                        ))
                    }
                  
                </div>

                {/* mail section */}


        <div className=' flex flex-col '> 
                    <h3 className='text-lg font-semibold mb-4'>STAY UP TO DATE</h3>
                    <input type="email" placeholder='enteryourEmail@info.com' className='p-2 w-full rounded-lg '/>   
        </div>

    </footer>
  )
}

export default Footer