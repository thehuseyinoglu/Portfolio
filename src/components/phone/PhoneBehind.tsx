import React from 'react'

const PhoneBehind = () => {
  return (
    <div className=" h-[550px] w-[280px] bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-300 rounded-[3rem] flex items-center justify-center border-box p-[0.2rem] relative shadow-[1rem_1rem_6rem_rgba(0,0,0,0.2),0_0_0.1rem_rgba(0,0,0,0.4),0_0_0.2rem_rgba(0,0,0,0.8)_inset]">
    <div className="w-1 h-20 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-l from-neutral-400 via-blue-300 to-blue-300 border-l border-blue-100 absolute -left-1 top-[30%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>
    <div className="w-1 h-10 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-r from-neutral-400 via-blue-300 to-blue-300 border-r border-blue-100 absolute -right-1 top-[38%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>
    <div className="w-1 h-10 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-r from-neutral-400 via-blue-300 to-blue-300 border-r border-blue-100 absolute -right-1 top-[28%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>
    <div className="w-1 h-5 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-r from-neutral-400 via-blue-300 to-blue-300 border-r border-blue-100 absolute -right-1 top-[20%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>
    
    <div className="absolute h-[99%] w-[98%] border border-blue-900 border-opacity-20 rounded-[2.8rem]">
    </div>
    
    <div className="absolute w-[7rem] h-[7rem] top-[0.8rem] left-[0.8rem] rounded-[2.4rem] shadow-[0.2rem_0.2rem_0.1rem_rgba(255,255,255,0.6)_inset,-0.1rem_-0.1rem_0.1rem_rgba(255,255,255,0.4),0.2rem_0.2rem_0.2rem_rgba(0,0,0,0.05),0rem_0.2rem_0.2rem_rgba(0,0,0,0.05),-0.2rem_-0.2rem_0.2rem_rgba(0,0,0,0.05)_inset] flex items-center justify-center">
      <div className="w-[95%] h-[95%] bg-blue-200 rounded-[2.2rem] shadow-[0.2rem_0.2rem_0.1rem_rgba(0,0,0,0.1)_inset] relative">
        
        <div className="bg-[rgb(30,30,30)] rounded-full w-[47%] h-[47%] absolute top-[0.4rem] left-[0.4rem] border-[0.15rem] border-blue-100 shadow-[0.05rem_0.05rem_0rem_0.05rem_rgba(0,0,0,0.4),0.4rem_0.6rem_0.4rem_rgba(0,0,0,0.2)] flex items-center justify-center">
          <div className="w-[55%] h-[55%] bg-gradient-to-br from-neutral-900 to-neutral-600 rounded-full flex items-center justify-center">
            <div className="w-[50%] h-[50%] bg-gradient-to-tl from-neutral-900 to-neutral-800 rounded-full shadow-[0.05rem_0.05rem_rgba(255,255,255,0.2),0.08rem_0.08rem_0.2rem_rgba(255,255,255,0.5)_inset]"></div>
          </div>
        </div>
        
        <div className="bg-[rgb(30,30,30)] rounded-full w-[47%] h-[47%] absolute right-[0.4rem] bottom-[0.4rem] border-[0.15rem] border-blue-100 shadow-[0.05rem_0.05rem_0rem_0.05rem_rgba(0,0,0,0.4),0.4rem_0.6rem_0.4rem_rgba(0,0,0,0.25)] flex items-center justify-center">
          <div className="w-[55%] h-[55%] bg-gradient-to-br from-neutral-900 to-neutral-600 rounded-full flex items-center justify-center">
            <div className="w-[50%] h-[50%] bg-gradient-to-tl from-neutral-900 to-neutral-800 rounded-full shadow-[0.05rem_0.05rem_rgba(255,255,255,0.2),0.08rem_0.08rem_0.2rem_rgba(255,255,255,0.5)_inset]"></div>
          </div>
        </div>
        
        <div className="w-[0.6rem] h-[0.6rem] bg-gradient-to-br from-neutral-600 to-neutral-400 rounded-full absolute left-[1.6rem] bottom-[1.4rem] border-blue-200 border-[0.1rem] shadow-[0.15rem_0.2rem_0.2rem_rgba(0,0,0,0.2)]"></div>
        
        <div className="w-[1.4rem] h-[1.4rem] bg-gradient-to-br from-[rgba(200,200,200,0.8)] to-[rgba(230,230,230,0.8)] rounded-full right-[1rem] top-[1.2rem] absolute shadow-[0.15rem_0.2rem_0.2rem_rgba(0,0,0,0.2)] flex items-center justify-center border-r-[0.1rem] border-b-[0.1rem] border-blue-100">
          <div className="w-[30%] h-[30%] rounded-full bg-gradient-to-tl from-neutral-300 to-neutral-100 border-[0.05rem] border-neutral-300 shadow-[-0.2rem_-0.2rem_0.2rem_rgba(255,255,255,0.6)]"></div>
        </div>
      </div>
    </div>
    
    <svg viewBox="0 0 170 170" className="absolute w-[5.5rem] fill-blue-200">
  <title>Apple Logo</title>
  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z"/>
</svg>
  </div>


  )
}

export default PhoneBehind