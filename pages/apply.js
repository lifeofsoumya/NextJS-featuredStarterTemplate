import React from 'react'
import styles from '../styles/apply.module.css'

const Apply = () => {
  return (
    <>
      <section className=''>
        <div  className={styles.background + " main min-h-screen flex justify-center items-center"}>
          <div className="content form">
              <h1 className="text-2xl font-bold text-white text-center pb-5">Apply for NewsLetter</h1>
              <div className="">
                  <form className="">
                      <input className="border-1 border-gray-100 bg-white text-black shadow-lg p-2 rounded-l-lg focus:outline-none autofocus" type="email" placeholder='Enter your email' required/>
                      <input className="bg-indigo-600 text-white p-2 rounded-r-lg" type="submit" value="Subscribe" />
                  </form>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Apply