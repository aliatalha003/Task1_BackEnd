const yargs=require("yargs")
const dataFunctions=require("./DataFunctions")
yargs.command({
    command:"add",
    describe:"to add a person",
    builder:{
        fname: {
            describe: "this is the first name desc in add command",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "this is the last name desc in add command",
            demandOption: true,
            type: "string"
        }
    },
    handler:(x)=>{
        dataFunctions.addPerson(x.id,x.fname,x.lname,x.age,x.city)
    }
})

yargs.command({
    command:"delete",
    describe:"to delete a person",
    handler:(x)=>{
        dataFunctions.deleteData(x.id)
    }
})


yargs.command({
    command:"read",
    describe:"to read a person details",
    builder:{
        id:{
            describe:"this is id description in read",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        dataFunctions.readData(x.id)
    }
})

yargs.command({
    command:"list",
    describe:"to list all people",
    handler:()=>{
        dataFunctions.list()
    }
})
yargs.parse()