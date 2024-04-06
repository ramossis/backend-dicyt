const User =require('../models/User')

const getUsers = async(req,res)=>{
    try {
        const users = await User.getUsers()
        res.json(users)
    } catch (error) {
        console.log('Error getting users',error)
        res.status(500).json({
            error:'INterbal Server Error'
        })
    }
}
module.exports={
    getUsers
}