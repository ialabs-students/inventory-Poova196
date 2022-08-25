class Biscuits{
    count:number;
    Biscuits:string[];

    products(count:number,Biscuits:string[]):void{
       this.count=count;
        this.Biscuits=Biscuits;
    }

    display():void{
        console.log("Biscuits : "+ this.Biscuits);
    }

    defect(name1:string | object):void{
        console.log("The defect Biscuit is "+name1);
    }
}

let roll=new Biscuits();
let wafer=new Biscuits();

roll.products(71,['Chocobytes','dairyshots','milkmaid']);
wafer.products(77,['cheesecrackers','caramel','dairymilk']);
roll.products(86,['goodday','unibic','oreo']);
wafer.products(99,['parle-g','happyhappy','monaco']);
console.log("------------------------------------------------------------------------------------------------");
console.log("AVAILABLE BISCUITS");
console.log("------------------------------------------------------------------------------------------------");
roll.display();
wafer.display();
console.log("------------------------------------------------------------------------------------------------");

//Added Products

roll.Biscuits.push("milk-shakthi");
wafer.Biscuits.push("tiger");
roll.Biscuits.push("bourbon");
wafer.Biscuits.push("50-50");
console.log("------------------------------------------------------------------------------------------------");
console.log("ADDED BISCUITS");
console.log("------------------------------------------------------------------------------------------------");
roll.display();
wafer.display();
console.log("------------------------------------------------------------------------------------------------");

//Defect Products

console.log("------------------------------------------------------------------------------------------------");
console.log("DEFECTED PRODUCTS");
console.log("------------------------------------------------------------------------------------------------");

let remove_name:string="bourbon";
for(let rem_name in roll.Biscuits){
    if(roll.Biscuits[rem_name] === remove_name){
        console.log("The Location is "+rem_name+"  "+roll.Biscuits[rem_name] )
        console.log("------------------------------------------------------------------------------------------------");
    }
    // } console.log("------------------------------------------------------------------------------------------------");
}



//Update Products

console.log("------------------------------------------------------------------------------------------------");
console.log("UPDATED PRODUCTS");
console.log("------------------------------------------------------------------------------------------------");
for(let rem_name in roll.Biscuits){
    if(roll.Biscuits[rem_name] === remove_name){
        roll.Biscuits[rem_name]="milkmaid";
        roll.display();
        console.log("------------------------------------------------------------------------------------------------");
        
    }
}

//Delete Products

console.log("------------------------------------------------------------------------------------------------");
console.log("DELETED PRODUCTS")
console.log("------------------------------------------------------------------------------------------------");
for(let delete_biscuit in wafer.Biscuits)
{
    if(wafer.Biscuits[delete_biscuit]==="50-50"){
        delete roll.Biscuits[delete_biscuit];
        roll.display();
        console.log("------------------------------------------------------------------------------------------------");
    }
}

//Threshold Products

console.log("------------------------------------------------------------------------------------------------");
console.log("THRESHOLD PRODUCTS")
console.log("------------------------------------------------------------------------------------------------");
if(roll.count<100){
    console.log(roll.count);
    roll.defect(roll.Biscuits);
    console.log("------------------------------------------------------------------------------------------------");
}
   