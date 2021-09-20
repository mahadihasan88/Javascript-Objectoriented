function teacher(name,dept,id){
    this.name=name;
    this.dept=dept;
    this.id=id;
   
  }
 //  teacher.prototype.print=function(){
 //   console.log('Hellow '+this.name+'('+this.id+')',this.email);
 // }
 // teacher.prototype.output=function(){
 //   console.log(this.dept);
 // }
 // teacher.prototype.email='HSTU@gmail.com'
  teacher.prototype={
    print:function(){
     console.log('Hellow '+this.name+'('+this.id+')',this.email);
    },
    email:'HSTU@gmail.com',
    output:function(){
      console.log(this.dept);
    }
  }
  var tech1=new teacher('Sahjalal','CSE',456321);
  var tech2=new teacher('Dr. Arshad Ali','CSE',789456);
 // console.log(tech1);
 // console.log(tech2);
 tech1.__proto__.email='anything@.com';
 //console.log(tech1.__proto__==tech2.__proto__);
 //console.log(tech2.email);
 tech1.print();
 tech2.print();
 tech1.output();
 
 
 