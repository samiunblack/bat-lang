# Bat Lang
A Batman inspired programming language written in Python


### Playground
Test the languge on [Bat Lang Playground](https://bat-lang.vercel.app/)


### Installation
Install the language with `pip`

```
pip install batlang 
```
Install the [syntax highlighter extension](https://marketplace.visualstudio.com/items?itemName=SamiunBlack.bat-lang-highlighter) in VS Code



### Usage
Create a new file (`test.batsy`)

```
batSignal("Hello Gotham!")
```

**Run**
```
bat-lang test.batsy
```

**Output**
```
Hello Gotham!
```


## Documentation
### Variables

Variables can be declared using `batarang`
```
batarang x = 43
batarang y = 68
batarang z = 23

x = x + 1
y = 33
z = ((x + y) * (x + z)) / 34
```

### Types
Numbers, strings and boolean are like other languages. Null value can denoted using `mystery`. String values can be only defined with `""`  (double quotes)

```
batarang x = 43
batarang y = 12.34
batarang z = "dark knight"
batarang a = mystery
batarang b = True
batarang c = False
```

### Input / Output

Use `batSignal()` to print anything to console and use `batDirective()` to take number or string as input

```
batSignal("I am Batman")

batarang a = 34
batSignal(a)

prompt = batDirective()
batSignal(prompt)
```

### Conditionals
`batIf` defines a if statement, `batElif` defines a else if statement, `batElse` defines a else statement.

```
batarang a = 30

batIf a > 20 {
    batSignal("a is greater than 20")
}
batElif a > 15 {
    batSignal("a is greater than 15")
}
batElse {
    batSignal("a is greater than 10")
}
```

### Loops
Statements inside `fight till` blocks are executed as long as specified condition evaluates to True. If the condition becomes False, statement withing the loop stops executing and control passes to the statement following the loop. The `break` and `continue` keywords have not been implemented yet.

```
batarang a = 5

fight till a > 0 {
    batSignal(a)
    a = a - 1
}
```

### Functions
A function can be defined with the keyword `batCave` and function name. `return` can be used inside the function.

```
batCave add(a, b)
{
    return a + b
}

batarang z = add(10, 5)
batSignal(z)
```

### Array
An array can be created with the keyword `utilityBelt` and array name.

```
utilityBelt arr = [1, 2, 3, 4, 5]
batSignal(arr)

batarang i = arr[0]
batSignal(i)
```

### License
<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/samiunblack/bat-lang">Bat Lang</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/samiunblack">Samiun Black</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>
