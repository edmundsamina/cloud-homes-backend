import query from "../db/db.js"

//return 
export async function getAllProperties(){
    const allProperties = await query("SELECT * FROM properties")
    return allProperties.rows
}

//search by question topic
export async function getPropertiesByLocation(location){
    const result = await query("SELECT * FROM properties WHERE location LIKE $1", ['%' + location.toLowerCase() + '%'])
    return result.rows
}

//get question by id
export async function getPropertiesByName(name){
    const propertiesByName = await query("SELECT * FROM properties WHERE name LIKE $1", ['%' + name.toLowerCase() + '%'])   
    return propertiesByName.rows[0]
}
//get question by id
export async function getPropertiesByDescription(description){
    const propertiesByDesc = await query("SELECT * FROM properties WHERE LOWER(description) LIKE $1", ['%' + description.toLowerCase() + '%'])
    return propertiesByDesc.rows   
}