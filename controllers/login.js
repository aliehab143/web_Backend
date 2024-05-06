const express = require('express')
const app = express()
const login = require('./Login')

const getAllLogin = async (req,res) => {
    const temp = await login.find()
    res.status(200).json(temp)
}

const logIn = async(req,res) =>{
    const data = {
        name:req.body.username,
        password:req.body.password
    }
    try {
        const existingUser = await getAccountByUsername(data.name)
        if(existingUser) {
            if(data.password === existingUser.password) {
                res.status(200).json({existingUser})
            }
            else{
                res.status(235).json("The password is wrong")
            }
        }else {
            res.status(234).json("This username doesnot exist")
        }
    } catch (error) {
        
    }

}
async function getAccountByUsername(username) {
    try {
        const isUsername = await login.findOne({username});
        console.log(isUsername); // Log the result
        return isUsername;
    } catch (error) {
        req.status(500).json('unvaild json')
        
    }
}

const signup = async (req,res)=>{
    try {
        const data = {
            name:req.body.username,
            password:req.body.password
        }
        console.log(data)
        const existingUser = await getAccountByUsername(data.name); 
        console.log(existingUser)

        if (existingUser) {
            res.status(234).json("This username is taken")
        } else {
            const account = await login.create(req.body);
            res.status(200).json({account});
        }
    
    } catch (error) {
        res.status(400).json('error2')
    }
}
module.exports = {
    getAllLogin,
    getLoginByUsername: getAccountByUsername,
    signup,
    logIn,

}
