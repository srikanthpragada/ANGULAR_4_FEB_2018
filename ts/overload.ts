
function add(n1 : number, n2 : number) : void;
function add(s1 : string, s2 : string): void;

function add(v1 : any, v2 : any): void 
{
    if ( typeof(v1) == 'number')
         console.log(v1 + v2);
    else
        console.log("Full name : " + v1 + v2)
}

add(10,20)
add("Abc", "Xyz")

