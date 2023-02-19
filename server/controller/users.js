import express from 'express'
import User from '../models/user.js'

//controller to get User
export const getUser=async(req, res)=>{ 
    try{
        const {id} = req.params;
        const $match = {
            id
        }
        const data = await User.findOne($match);
        if(data) res.status(200).send({message:'User Login Successfully', status:true, data}) 
        res.status(404).send({message:'User Not Found', status:false, data:[]})

    }catch(error){
        res.status(400).send(error.message)
    }
}
export const getUserFriends=async(req, res)=>{
     try{
        const {id} = req.params;
        const $match={
            id
        }
        const data = await findOne($match).select({
            friends:1
        })

        const friends = await Promise.all(data.map(async (id)=> await User.findOne(id).select({
            _id:1,
            firstName:1,
            lastName:1,
            email:1,
            occupation:1,
            location:1,
            picturePath:1 
        })))

        if(friends) res.status(200).send({message:'got user friends Successfully', status:true, friends}) 
        res.status(404).send({message:'User Friends Not Found', status:false, data:[]})

     }catch(error){res.status(400).send(error.message)} }

export const addRemoveFrinds=async(req, res)=>{
    try{
        const {id, friendId} = req.params;
        const user = await User.findOne(id).lean()
        const friend = await User.findOne(friendId).lean()

        if(user.freinds.includes(friendId)){
            user.freinds = user.freinds.filter(id=> id !== friendId)
            friend.freinds = friend.freinds.filter(id !== id)
        }else{
            user.push(friendId)
            friend.push(id)
        }
        await user.save();
        await friend.save();

        if(friend) res.status(200).send({message:'added friend successfully!!', status:true, friend}) 
        res.status(404).send({message:'User Friends Not Found', status:false, data:[]})

    }catch(error){
        res.status(400).send(error.message)
    }
 }

