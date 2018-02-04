var marks: number[]; 
marks = [60, 70, 66]; 
console.log(marks.length) 
console.log(marks[0]); 

var subjects: string[] = ["Java", "TypeScript", "Angular"]; 
subjects.splice(0,1)   //  remove element at position 0 

// Use iterator 
for (var sub of subjects) 
   console.log(sub); 


// Array Methods 
subjects.push("jQuery"); 
console.log("Top Element : " + subjects.pop());

