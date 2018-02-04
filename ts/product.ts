class Product { 
     protected name :string; 
     protected price : number; 
     constructor(name :string, price : number)
     { 
          this.name = name; 
          this.price = price;
     }
     
     print():void 
     {
          console.log(this.name); 
          console.log(this.price); 
     }
}


var v1 = new Product ("Product1", 10000)
v1.print(); 