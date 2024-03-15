const knex = require("../database/knex")

async function checkUserExist(req, res, next){
    const {user_id} = req.params
    const user = await knex("users").where({id: user_id})
    
    if(!user){
        return res.status(400).json("Tarefa não encontrada")
    }
    next()
}
module.exports = checkUserExist