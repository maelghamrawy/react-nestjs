import React from 'react'
import { bumba } from '../utlis/images'


const Footer = () => {
  return (
    <>
    <section className='container mt-[100px]'>


        <div className=" text-center">
          <h1 className="text-3xl "> لماذا تبدا متجرك عبر رف </h1>
          <hr className="w-16  h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
          <p className="r mb-6">لوضوح هو أسلم الطرق نحو الوجهة المطلوبة، أما المجازات والاستعا </p>
        </div>

        <div className='grid grid-cols-5 gap-5 sm:px-14 mb-12 '>
            <img src={bumba} alt='bumba'/>
            <img src={bumba} alt='bumba'/>
            <img src={bumba} alt='bumba'/>
            <img src={bumba} alt='bumba'/>
            <img src={bumba} alt='bumba'/>
            <img src={bumba} alt='bumba'/>
            <img src={bumba} alt='bumba'/>
            <img src={bumba} alt='bumba'/>
            <img src={bumba} alt='bumba'/>
            <img src={bumba} alt='bumba'/>
        </div>

        <div className='flex p-4 w-3/4 bg-blue-500 mx-auto  rounded items-center justify-between relative top-12 '>
        
            <div className=' w-2/5 '>
                <form >   
                    <div className="relative">
                        <input type="search" id="default-search" className=" w-full p-4 pl-10  text-gray-900 border border-gray-300 rounded-full bg-gray-50 " placeholder="البريد الالكترونى" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-orange-400 font-medium rounded-full text-sm px-4 py-2">ارسال</button>
                    </div>
                </form>
            </div>

            <div className='w-1/2 text-end text-white '>
                <h1 className='font-bold text-lg'>كن على تواصل</h1>
                <p>لوضوح هو أسلم الطرق نحو الوجهة المطلوبة، أما المجازات والاستعالطرق نحو الوجهة المطلوبة، أما المجازات والاستع</p>
            </div >

        </div>


    </section>
    
    <div className='w-full bg-slate-100 h-40  '>
        <div className='container flex justify-between pt-20'>
            <div className='flex gap-2'> 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-300 border rounded-full border-spacing-2"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>


                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-300 border rounded-full "
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
            </div>

            <div>
                <p className='text-slate-300'> 2023 جميع الحقوق محفوظه</p>
            </div>
        </div>
       
    </div>
    

    </>
  )
}

export default Footer