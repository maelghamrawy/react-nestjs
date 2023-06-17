import React from 'react'
import phone from '../images/phone.png'
import security from '../images/security.png'
import haulage from '../images/haulage.png'


const About = () => {
  return (
   <>
    <section className=' '>

        <div className='container'>

        <div>
        <h1 className= "text-3xl text-center"> لماذا تبدا متجرك عبر رف </h1>
        <hr className= "w-16  h-1 mx-auto my-4 bg-blue-500 border-0 rounded"/>
        <p className='text-center mb-6'>لوضوح هو أسلم الطرق نحو الوجهة المطلوبة، أما المجازات والاستعا</p>
        </div>

        <div className='grid grid-cols-3 gap-9'>
        <div className='bg-slate-100 text-center rounded py-2  '>
            <img src={phone} alt='good' className=' mx-auto'/>
            <h2 className=''>تصميم متجاوب</h2>
            <h2 className=''>تصميم متجاوب</h2>
        </div>
        <div className='bg-slate-100 text-center rounded py-2  '>
            <img src={phone} className=' mx-auto'/>
            <h2 className=''>تصميم متجاوب</h2>
            <h2 className=''>تصميم متجاوب</h2>
        </div>
        <div className='bg-slate-100 text-center rounded py-2  '>
            <img src={phone} className=' mx-auto'/>
            <h2 className=''>تصميم متجاوب</h2>
            <h2 className=''>تصميم متجاوب</h2>
        </div>
        
        </div>

        </div>
        
    </section>

    
  
    
   
   
   </>
  )
}

export default About