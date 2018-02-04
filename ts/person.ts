interface Person 
{
    first : string;
    second : string;
}

function  print(p : Person) {
     console.log(p.first);
     console.log(p.second)
}

// duck typing 
var p1 = { 'first': 'Srikanth', 'second' : 'Pragada', 'initial' : 'Mr'};

print(p1)



