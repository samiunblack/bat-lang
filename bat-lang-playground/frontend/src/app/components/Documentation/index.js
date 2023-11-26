import React from 'react';
import CodeBlock from './CodeBlock';

const variableCode = `batarang x = 43
batarang y = 68
batarang z = 23

x = x + 1
y = 33
z = ((x + y) * (x + z)) / 34
`

const typesCode = `batarang x = 43
batarang y = 12.34
batarang z = "dark knight"
batarang a = mystery
batarang b = True
batarang c = False`

const ioCode = `batSignal("I am Batman")

batarang a = 34
batSignal(a)

prompt = batDirective()
batSignal(prompt)`

const conditionalCode = `batarang a = 30

batIf a > 20 {
    batSignal("a is greater than 20")
}
batElif a > 15 {
    batSignal("a is greater than 15")
}
batElse {
    batSignal("a is greater than 10")
}`

const loopCode = `batarang a = 5

fight till a > 0 {
    batSignal(a)
    a = a - 1
}`

const functionCode = `batCave add(a, b)
{
    return a + b
}

batarang z = add(10, 5)
batSignal(z)`

const arrCode = `utilityBelt arr = [1, 2, 3, 4, 5]
batSignal(arr)

batarang i = arr[0]
batSignal(i)`

const Documentation = () => {

    return (
        <div className='mt-10 flex flex-col gap-4'>
            <div className='mt-10 flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>Run on Local Machine</h1>
                <p>Install the language with pip</p>
                <CodeBlock code={`pip install bat-lang`}/>
                <p>Install the <a href="https://marketplace.visualstudio.com/items?itemName=SamiunBlack.bat-lang-highlighter" className='text-blue-600' target='_blank'>syntax highlighter extension</a> in vs code</p>
                <p className='font-bold text-xl'>Usage</p>
                <p>Create a new file <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>test.batsy</code></p>
                <CodeBlock code={`batSignal("Hello Gotham!")`}/>
                <p className='font-bold'>Run</p>
                <CodeBlock code={`bat-lang test.batsy`}/>
                <p className='font-bold'>Output</p>
                <CodeBlock code={`Hello Gotham!`}/>
            </div>
            <div className='mt-10 flex flex-col gap-6'>
                <h1 className='text-3xl font-bold'>Documentation</h1>
                <p className='text-xl font-bold'>Variables</p>
                <p>Variables can be declared using <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>batarang</code></p>
                <CodeBlock code={variableCode}/>
                <p className='text-xl font-bold'>Types</p>
                <p>Numbers, strings and boolean are like other languages. Null value can denoted using <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>mystery</code>. String values can be only defined with <code className="px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm">&quot;</code> (double quotes)</p>
                <CodeBlock code={typesCode}/>
                <p className='text-xl font-bold'>Input/Output</p>
                <p>Use <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>batSignal()</code> to print anything to console and use <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>batDirective()</code> to take number or string as input. You can&apos;t take input in the web playground!</p>
                <CodeBlock code={ioCode}/>
                <p className='text-xl font-bold'>Conditionals</p>
                <p><code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>batIf</code> defines a if statement, <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>batElif</code> defines a else if statement, <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>batElse</code> defines a else statement.</p>
                <CodeBlock code={conditionalCode}/>
                <p className='text-xl font-bold'>Loops</p>
                <p>Statements inside <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>fight till</code> blocks are executed as long as specified condition evaluates to True. If the condition becomes <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>False</code>, statement withing the loop stops executing and control passes to the statement following the loop. The <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>break</code> and <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>continue</code> keywords have not been implemented yet.</p>
                <CodeBlock code={loopCode}/>
                <p className='text-xl font-bold'>Functions</p>
                <p>A function can be defined with the keyword <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>batCave</code> and function name. <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>return</code> can be used inside the function.</p>
                <CodeBlock code={functionCode}/>
                <p className='text-xl font-bold'>Array</p>
                <p>An array can be created with the keyword <code className='px-2 py-1 text-red-600 bg-zinc-900 rounded text-sm'>utilityBelt</code> and array name.</p>
                <CodeBlock code={arrCode}/>
            </div>
        </div>
    );
};

export default Documentation;