import React, { useEffect, useRef } from 'react';
import PrintArray from '../PrintArray';

function Terminal(props) {
    const {output, isSuccess} = props
    const terminalRef = useRef(null);

    useEffect(() => { 
        if (output.length) {
          setTimeout(() => terminalRef.current?.scrollIntoView(false), 100);
        }
      }, [output, terminalRef]);

    return (
        <div>
            <div
                ref={terminalRef}
                className={`${
                    isSuccess !== null ? "terminal" : "terminal-collapsed"
                } bg-black text-white my-6`}
                >
                {isSuccess !== null && !isSuccess ? (
                    <div className="text-red-700 output opacity-0">❌ Cannot enter Bat Cave!!!!</div>
                ) : (
                    <div className="text-gray-500 output opacity-0">Welcome to Bat Cave 🦇</div>
                )}
                {output && output.map((line, i) => {
                    console.log(typeof line)
                    return (
                    <div
                        key={i}
                        className={`${line.isError ? "text-red-500" : ""} output opacity-0`}
                    >
                        &gt; {typeof line == 'object' ? <PrintArray array={line}/> : line}
                    </div>
                    );
                })}
                </div>
        </div>
    );
}

export default Terminal;