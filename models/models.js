import query from "../db/db.js"

//return           
export async function getAllProperties(){
    const allProperties = await query("SELECT * FROM properties")
    return allProperties.rows
}
      
// //search by  metaverse   
// export async function getPropertiesByMetaverse(metaverse){
//     const result = await query("SELECT * FROM properties WHERE metaverse LIKE $1", ['%' + metaverse.toUpperCase() + '%'])
//     return result.rows
// }    
     
//search by  metaverse AND rent or buy
export async function getPropertiesByMetaverse(metaverse, rent, type, bedrooms, bathrooms){

let params = []
    let sqlquery = 'SELECT * FROM properties';
     if(metaverse) {
        sqlquery += ` WHERE metaverse = '${metaverse.toUpperCase()}'`;
        params.push('%' + metaverse.toUpperCase() + '%');
     }
  
     if (rent) {
        if (params.length > 0) {
            sqlquery += ' AND';
          } else {
            sqlquery += ' WHERE';
          }
          sqlquery += ` rent = ${rent}`;
        params.push(rent);
      }
      if (type) {
        if (params.length > 0) {
            sqlquery += ' AND';
          } else {
            sqlquery += ' WHERE';
          }
          sqlquery += ` property_type = '${type}'`;
        params.push(type);
      }
    if (bedrooms > 0) {
        if (params.length > 0) {
            sqlquery += ' AND';
          } else { 
            sqlquery += ' WHERE';
          }
          sqlquery += ` bedrooms = ${bedrooms}`;
      params.push(bedrooms);
    }
  
    if (bathrooms > 0) {
      if (params.length > 0) {
        sqlquery += ' AND';
      } else {
        sqlquery += ' WHERE';
      }
      sqlquery += ` bathrooms = ${bathrooms}`;
      params.push(bathrooms);
    }
    console.log(sqlquery)
    console.log(params)
  
    const result = await query(sqlquery)
    return result.rows


    // if(!bedrooms && !bathrooms){
    //     const result = await query("SELECT * FROM properties WHERE metaverse LIKE $1 AND rent = $2 AND property_type LIKE $3", ['%' + metaverse.toUpperCase() + '%', rent, '%' +type + '%'])  
    //     return result.rows
    // }   
    // if(!type){
    //     const result = await query("SELECT * FROM properties WHERE metaverse LIKE $1 AND rent = $2 AND bedrooms = $3 AND bathrooms = $4", ['%' + metaverse.toUpperCase() + '%', rent,  bedrooms,  bathrooms])
    //     return result.rows
    // }
    // else if(!bedrooms){
    //     const result = await query("SELECT * FROM properties WHERE metaverse LIKE $1 AND rent = $2 AND property_type LIKE $3  AND bathrooms = $4", ['%' + metaverse.toUpperCase() + '%', rent, '%' +type + '%', bathrooms])
    //     return result.rows
    // }
    // else if(!bathrooms){
    //     const result = await query("SELECT * FROM properties WHERE metaverse LIKE $1 AND rent = $2 AND property_type LIKE $3 AND bedrooms = $4 ", ['%' + metaverse.toUpperCase() + '%', rent, '%' +type + '%', bedrooms])
    //     return result.rows
    // } else if(metaverse && rent && type && bedrooms && bathrooms){
          
    //     const result = await query("SELECT * FROM properties WHERE metaverse LIKE $1 AND rent = $2 AND property_type LIKE $3 AND bedrooms = $4 AND bathrooms = $5", ['%' + metaverse.toUpperCase() + '%', rent, '%' +type + '%',  bedrooms,  bathrooms])
    
    //     return result.rows
    // }   
      
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
