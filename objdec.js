var obj={
    name:'Mahadi',
    age:20,
    id:1802006,
    print:function(){
        //console.log(this.name+' '+this.age);
        var total=this.age+this.id;
        //console.log(total);
        return total;
    },
   
}
obj.dept='CSE';
obj['Campus']='HSTU';
//console.log(obj.print());
//console.log(obj);
//console.log(obj['name']);
//console.log(obj.age);
//obj.print();

for(var item in obj){
    console.log(item +' = '+obj[item]);
}
// var obj1 = new Object;
// obj1.name='Karim';
// obj1.age=22;
// obj1.dept='CSE';

 //console.log(obj1);