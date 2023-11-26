import React, { useEffect } from 'react';
import { batlangSyntax } from "../../common/syntax";

const CodeBlock = (props) => {
    useEffect(() => {
        Prism.highlightAll()
      }, []);
    return (
        <div>
            <pre>
                <code className='language-batlang'>
                    {
                        props.code
                    }
                </code>
            </pre>
        </div>
    );
};

export default CodeBlock;