const mongodb= require('mongodb')
const mongoose=require('mongoose')

let conn=mongoose.connect('mongodb://127.0.0.1:27017/appmixo')

if(conn){
    console.log("database Conncted ")
}else{
    console.log("database Connection error")

}