// class A {

//     Method1(){

//         console.log("This is method 1")
//     }


//     Method2(){

//         console.log("This is method 2")
//     }
// }

// const obj1 = new A()

// obj1.Method2()


// Encapsulation 

// Binding Data between methods 


// class Student {

//     constructor() {
//         let name, marks;
//     }

//     setName(value){
//         this.name=value
//     }

//     setMarks(value){
//         this.marks=value
//     }


//     getname() {
//         return this.name;
//     }

//     getMarks() {
//         return this.marks;
//     }

// }

// let stud = new Student()

// stud.setName("Raju")

// x = stud.getname()

// console.log(x)






// class Employee{

//     setdetails(value1, value2, value3){

//         this.empName=value1

//         this.empPlace=value2

//         this.empDept = value3

//     }


//     Displaydetails(){

//         console.log(this.empName, this.empPlace, this.empDept)
//     }
// }

// let empobj = new Employee()

// empobj.setdetails("Raju", "blr", "L&D")
// empobj.Displaydetails()

// // Orderprocession{

    
   
//     //Orderaproduct(){

     

//     return orderid 
//     }


//    processtheorder(ordewrid){


//    }

// }



//=====================================================

// class A{
//     a=100;
//     display(){
//         console.log(this.a)
//     }
//     messageofclassA(){

//         console.log("Parent class message")
//     }

// }



// class B extends A
// {
//     b=200;
//     show(){
//         console.log(this.b)
//     }

//     messageofClassB(){

//         console.log("Clild class message")
//     }
// }


// class C extends A
// {
//     c=200;
//     show2(){
//         console.log(this.c)
//     }

//     messageofClassC(){

//         console.log("C Clild class message")
//     }
// }




// const cobj = new C()

// cobj.messageofclassA()
// //cobj.messageofClassB()
// cobj.messageofClassC()

// //Prototype 


// class employee {

//     constructor (val1, val2, val3){
//     this.empname = val1;
//     this.empnum = val2;
//     this.empdept = val3;
//     }
    

// }


//  employee.prototype.Org = "DBS QA"

// employee.prototype.displaydetails= function (){

//     console.log(this.empname, this.empnum, this.empdept, this.Org)
// }

//  emp1 = new employee("Raju", 418, "L&D")


//  emp1.displaydetails()





// emp2 = new employee("Radha", 419, "L&D");

// emp2.displaydetails()



// emp3 = new employee("Ashok", 420, "L&D");

// emp3.displaydetails()


//Polymorphism 

// Method overriding

//Method Overloading 



class A{

    display(a,b){
        console.log(a)
        console.log(b)
        console.log("result :"+ (a+b))
    }
    message(){

        console.log("Parent class message")
    }

}
class B extends A
{
    display(a,b,c){
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(a+b+c)
    } 

    message(){

        console.log("Clild class message")
    }
}



let x = new A()

x.message()

//Method overriding

x.display(2,4,7)

//Method overloading 

//================================================


Map
set 

Promises 

callback

