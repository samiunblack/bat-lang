import React, { useState } from "react";

import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";
import axios from "axios";


const initialCode = `batarang x = 43
batarang y = 68
batarang z = 23

x = x + 1
y = 33
z = ((x + y) * (x + z)) / 34

batSignal("I am Batman")
batSignal(z)

batIf x > 20 {
  batSignal("a is greater than 20")
}
batElif x > 15 {
  batSignal("a is greater than 15")
}
batElse {
  batSignal("a is greater than 10")
}

`;

const Code = (props) => {
  const {} = props;
  const [code, setCode] = useState(initialCode);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const executeCode = async () => {
    console.log("Inside execute Code")
    try {
      const response = await axios.post('https://samiunblack.pythonanywhere.com/api/runCode', { code });
      console.log(response)
      setResult(response.data.result);
      setError('');
    } catch (error) {
      console.log(error)
      setResult('');
      setError(true);
    }
  };

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  const clearCode = () => {
    setCode("");
  };

  return (
    <div id="playground" className="">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl my-4">
          Playground
        </h2>
        <div className="flex">
          <button
            disabled={!code}
            onClick={executeCode}
            className="mx-2 flex items-center justify-center px-8 border border-transparent text-base font-medium rounded-md md:text-lg md:px-10 my-4 sm:my-8 sm:py-3 disabled:opacity-40 bg-neutral-950 text-red-600"
          >
            Run
          </button>

          <button
            onClick={clearCode}
            className="mx-2 flex items-center justify-center px-8 border border-transparent text-base font-medium rounded-md md:text-lg md:px-10 my-4 sm:my-8 sm:py-3 bg-neutral-950 text-slate-50"
          >
            Clear
          </button>
        </div>
      </div>
      <CodeEditor handleChange={handleChange} code={code} />
      <Terminal output={result} isSuccess={error ? false : true} />
    </div>
  );
};

export default React.memo(Code);
