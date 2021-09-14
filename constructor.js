function teacher(name,dept,id){

    this.name=name;
    this.dept=dept;
    this.id=id;
    this.print=function(){
        console.log('Name : '+this.name+' Dept : '+this.dept+'('+this.id+')');
    }
}

var tec1= new teacher('Shajalal ','CSE',2000001);
var tec2=new teacher('Abu Bokor','ECE',21000000);
var tec3=new teacher('Fazle Rabbi','CSE',2000045)
//tec1.print();
//tec2.print();
tec3.desti='Chairman';
//tec3.print();
//console.log(tec3);
// for(var data in tec3){
//     console.log(data +' : '+tec3[data]);
// }

var tech_arr=[tec1,tec2,tec3];

tech_arr.forEach(function(args){
    var idnum=args.id
    //console.log(args.dept);
    args.print();
})



function Book (name,author,price){
    this.name=name;
    this.author=author;
    this.price=price;
}

var book= new Book('Rahe Belayat','Dr.Abdullah Jahangir',250);
console.log(book.constructor);