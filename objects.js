// creds = {
//     "username" : "Admin",  
//     "password" : "admin123",
//     "wrongusername" : "Adhbkinhjmin",
//     "wrongpassword" : "admkmbkuhin123",
 
//   }

//   console.log(creds["wrongpassword"])

// car ={

//     "Manufacturer": "Maruthi Suzuki",
//     "Model": 2015,
//     "Manual" : true,
//     "automatic": false
   
//  }

//  console.log(car.Manual)

 
//    car["place"] = "Bangalore"

//    console.log(car.place)

//    console.log(car.automatic)

//    car["automatic"] = true

//    console.log(car.automatic)
  

//    delete car["Manufacturer"]

//    console.log(car.Manufacturer)

//    console.log(car.Raju)


   students = {

      "student1" :"Akshata",
      "student2" :"Ashwini",
      "student3" : "Renuka",
      "student4" :"Ashwini K",
      "student5" : "Ranjitha",
      "student6" :"sandeep",
      "student7" : "Bharath"

   }

//    createuser(){

//       cr.get("locator").type(studentname)

//    }


//es6 - for in 

//to work with objects  for in 

for ( let i in students){

    // console.log("Name of student")

    // console.log(i)

    //  console.log(students[i])

    //  console.log("loop end")

    // // console.log(users[nameofuser])

    console.log(i + " : "+students[i])

}