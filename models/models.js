import query from "../db/db.js"

//return 
export async function getAllProperties(){
    const allProperties = await query("SELECT * FROM properties")
    return allProperties.rows
}

//search by question metaverse
export async function getPropertiesByMetaverse(metaverse){
    const result = await query("SELECT * FROM properties WHERE metaverse LIKE $1", ['%' + metaverse.toUpperCase() + '%'])
    return result.rows
}

//get question by name
export async function getPropertiesByName(name){
    const propertiesByName = await query("SELECT * FROM properties WHERE name LIKE $1", ['%' + name.toLowerCase() + '%'])   
    return propertiesByName.rows[0]
}
//get question by desc
export async function getPropertiesByDescription(description){
    const propertiesByDesc = await query("SELECT * FROM properties WHERE LOWER(description) LIKE $1", ['%' + description.toLowerCase() + '%'])
    return propertiesByDesc.rows   
}
