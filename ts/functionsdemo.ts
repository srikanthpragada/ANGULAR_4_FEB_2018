function f1()
{
    console.log("In f1()")
}

function f2(n : number, s : string = "Hello")
{
    console.log(n);
    console.log(s);
}


f1()

f2(10) 
f2(10,"Abc")
