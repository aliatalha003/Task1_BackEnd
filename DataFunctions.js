const fs = require("fs")

const addPerson=(id, fname, lname, age, city)=> {
    const allData=loadInfo()
    const duplicatedData=allData.filter((obj)=>{
        return obj.id===id
    })
    if(duplicatedData.length==0)
    {
        allData.push({
            id,
            fname,
            lname,
            age,
            city            
        })
        saveAllData(allData)
    }
    else
        console.log("id already present")
}

function loadInfo() {
    try {
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
    }
    catch { return [] }
}

function saveAllData(data){
    const dataJson=JSON.stringify(data)
    fs.writeFileSync("data.json",dataJson)
}

const deleteData=(id)=>{
    const allData=loadInfo()
    const dataToKeep=allData.filter((obj)=>{
        return obj.id!==id
    })
    console.log(dataToKeep)
    console.log("deleted successfully")
    saveAllData(dataToKeep)
}

const readData=(id)=>{
    const allData=loadInfo()
    const itemNeeded=allData.find((obj)=>{
        return obj.id==id
    })
    if(itemNeeded)
    {
        console.log(itemNeeded)
    }
    else{
        console.log("id not found")
    }
}

const list=()=>{
    const allData=loadInfo()
    allData.forEach(obj => {
        console.log("First name:" ,obj.fname, ", City:" ,obj.city)
    });
}

module.exports={
    addPerson,
    deleteData,
    readData,
    list
}