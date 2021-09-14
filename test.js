function  person(name,email,id){
    this.name=name;
    this.email=email;
    this.id=id;
    this.print=function(){
        console.log(this.name+'('+this.id+')');
    }
    
    
}


var obj1=new person('Mahadi Hasan','mahadi@gmail.com',1802006);
// console.log(obj1);

var obj2= new person('Arefin Kabir','arefin@gmail.com',1502009);

obj2.campus='Hstu';
var obj3=new person('Jabe Arefin','arefin@gmail.com',1302045);

for(var data in obj2){
    console.log(obj2[data]);
}
