import Image from 'next/image';
import React from 'react';

function Header(props) {
    const handleClick = () => {
        navigator.clipboard.writeText("pip install bat-lang")
    }

    return (
        <div className='flex items-center justify-center flex-col gap-5 mb-10'>
           <div className='flex justify-center items-center flex-col text-center'>
            <img src="/../../images/icon.svg" alt="" style={{width:"500px", height: "300px"}}/>
            <p>A Batman inspired programming language written in Python.</p>
           </div>
            {/* TODO: Add Copy Toolpick */}
            <code className={`mt-5 cursor-pointer px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm`} onClick={handleClick}>pip install bat-lang</code>
           <div className='flex gap-5 flex-wrap justify-center'>
           <a href="https://pypi.org/project/batlang/"><button className='bg-neutral-950 text-red-600 px-5 py-4 rounded-md w-11/12 md:w-max lg:w-max'>PyPI Package</button></a>
            <a href="https://marketplace.visualstudio.com/items?itemName=SamiunBlack.bat-lang-highlighter"><button className='bg-neutral-950 text-red-600 px-5 py-4 rounded-md w-11/12 md:w-max lg:w-max'>VS Code Extension</button></a>
           </div>
           <p>Made by <a className='text-red-500 cursor-pointer' href="https://github.com/samiunblack" target='_blank'>@Samiun Black</a></p>
        </div>
    );
}

export default Header;
