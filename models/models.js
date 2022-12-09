import query from "../db/db.js"

//return 
export async function getAllProperties(){
    const allProperties = await query("SELECT * FROM properties")
    return allProperties.rows
}

//search by question topic
export async function getPropertiesByLocation(location){
    const result = await query("SELECT * FROM properties where location LIKE $1," [`%${location}%`])
    return result.rows
}

//get question by id
export async function getPropertiesByName(name){
    const propertiesByName = await query("SELECT * FROM properties where  name LIKE $1%", [`%${name}%`])
        
    return propertiesByName.rows[0]
}
//get question by id
export async function getPropertiesByDescription(description){
    const propertiesByDesc = await query("SELECT * FROM properties where  description LIKE $1%", [`%${description}%`])
        
    return propertiesByDesc.rows[0]
}