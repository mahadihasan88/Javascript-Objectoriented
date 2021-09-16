
/*
var obj={
    name:'Mahadi Hasan',
    print:function(){
        console.log(this);
    }
}
obj.print();*/

// function myfun()
// {
//     //console.log(this);
//     function inner(){
//         console.log(this);
//     }
//    new inner();
// }

//    myfun();

// var person={
//     name:'Mahadi Hasan',
//     print:function(){
//         console.log(this);
//         console.log('Hellow '+this.name );
//     }
// }
// // var myname=person.name;
// // console.log(myname);
// var myfun=person.print.bind(person);
// //console.log(myfun);
// myfun();
// function add(num){
//    var result= this.value+num;
//    console.log(result);
// }
// var obj={
//     value:500,
// }

// // var result=add(40);
// // console.log(result);
// var binded=add.bind(obj);
//  var result=binded(411);

var person={
    name:'Hellow Bangladesb',
    print:function(){
        setTimeout(function(){
            console.log('Function called '+this.name); 
        }.bind(this),5000)
    }
}
person.print();