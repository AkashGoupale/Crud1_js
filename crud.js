// const input=require('readline-sync')
// const fs = require('fs');
// 
// 
// 
// 
// info={}
// 
// function create() {
    // if (fs.existsSync("akash.json")) {
        // let data= fs.readFileSync("akash.json")
        // Biodata=JSON.parse(data)
        // let mail=input.question("enter your mail:-")
        // if (mail.includes("@") && (mail.length>=8)) {
            // let password=input.question("set your password:-")
            // if ((password.length>=8) && (password.includes("@"))) {
                // data={name:input.question("enter your name:"),age:input.questionInt("enter your age:-"),class:input.question("enter your class:-")}
                // Biodata[mail]=data
                // Biodata[mail]["password"]=password
                // fs.writeFileSync("akash.json",JSON.stringify(Biodata))
                // console.log("Your account create successfully...")
            // }
            // else {
            // console.log("wrong password..\n password length should be 8 or more and @ character compulsory.. ")
            // }
        // }
        // else {
        //   console.log("Invalid email..")
        // }
    // }
    // else {
        // fs.writeFileSync("akash.json",JSON.stringify({}))
        // create()
    // }
// }
// 
// function read() {
// try {
    // let data=fs.readFileSync("akash.json")
    // let Biodata=JSON.parse(data)
    // let mail=input.question("Enter your mail:")
    // if (mail in (Biodata)) {
    // let password=input.question("Enter your mail password:")
        // if (Biodata[mail]["password"]==password) {
        // console.log(Biodata[mail])
        // }
        // else {
        // console.log("Your password is wrong. Try again !!")
        // read()
        // }
    // }
    // else {
    //    console.log("Invalid email.Try again !!!")
    //    read()
    // }
// }
// catch {
//   console.log("File does not exist. please create File before file reading anythig.")
//   }
// }
// 
// function update() {
    // try {
        // data=fs.readFileSync("akash.json")
        // Biodata=JSON.parse(data)
        // mail=input.question("Enter your mail which you want to update:")
        // if (mail in (Biodata)) {
        // let password=input.question("Enter your mail password:")
            // if (Biodata[mail]["password"]==password) {
            //    let newmail=input.question("enter your new mail:")
            //    if (newmail.includes("@") && (newmail.length>=8)) {
                //    let pass=input.question("set your new mail password:-")
                    // if ((pass.length>=8) && (pass.includes("@"))) {
                        // data={name:input.question("enter your new name:"),age:input.questionInt("enter your new age:-"),class:input.question("enter your new class:-")}
                        // Biodata[newmail]=data
                        // Biodata[newmail]["password"]=pass
                        // delete Biodata[mail]
                        // fs.writeFileSync("akash.json",JSON.stringify(Biodata))
                        // console.log("your update successfully.")
                        // }
                        // else {
                        // console.log("wrong password..\nyour password length should be 8 or more and @ character compulsory..Try again !!!!")
                        // update()
                        // }
                    // }
                // else {
                    // console.log("Invalid password.Try again !!!!")
                    // update()
                // }
            // 
            // }
            // else {
            // console.log("your password is wrong.Try again !!!")
            // update()
            // }
        // 
    // }
    // else {
    // console.log("your email does not exist.")
    // }
    // }
    // catch {
    // console.log("please create file before updating anything.")
    // }
// }
// 
// function Delete() {
//    try {
    // let data= fs.readFileSync("akash.json")
    // Biodata=JSON.parse(data)
    // let mail=input.question("enter your mail:-")
        // if (mail in (Biodata)) {
            // pass=input.question("Enter your passord:")
            // if (Biodata[mail]["password"]==pass) {
                // delete Biodata[mail]
                // fs.writeFileSync("akash.json",JSON.stringify(Biodata))
                // console.log("Your account delete successfully...")
            // }
            // else {
                // console.log("Your password is wrong..Try again !!!!")
                // Delete()
            // }
    // } 
    // else {
    // console.log("Your email does not exist..")
    // }
    //    }
//    catch {
// console.log("Please create account before deleting...")
//    }
// }
// 
// 
// 
// while (true) {
    // console.log("press for......\n1.Create\n2.Read\n3.Update\n4.Delete\n 5.for exist")
    // let n=input.question("enter what you do::-")
// 
    // if (n==1) {
    //    create()
    //    }
    // else if (n==2) {
    //    read()
    //    }
    // 
    // else if (n==3) {
    //    update()
    // }
    // 
    // else if (n==4) {
        // Delete()
    //    }
    // 
    // else if (n==5) {
        // console.log("you exist successfully...")
        // Break
    // }
// }
// 