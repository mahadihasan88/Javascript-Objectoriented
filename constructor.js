
function Person(name,email,id){
    //console.log('This is constructed');
    this.name=name;
    this.email=email;
    this.id=id;
    this.print=function(){
        console.log('Name : '+this.name);
    }
   // console.log(this.name,this.email);
}
var p1= new Person('Mahadi Hasan','Mahadi@gmail.com');
// console.log(p1.name);
// console.log(p1.email);
// console.log(p1.id);
// console.log(p1);

var p2=new Person('Karim Haidar','karimhaidar@gmail.com',1802006);
// console.log(p2.name);
// console.log(p2.email);
// console.log(p2.id);
var p3=new Person('Arpon Haidar','arpon@gmail.com',32432424323)
var people=[p1,p2,p3];
//console.log(people);
// people.forEach(function(data){
//     //console.log('Email = '+data.print());
//     data.print();
// })
for(var item in p1)
{
    console.log(item);
}