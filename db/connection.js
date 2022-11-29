import mongoose from 'mongoose';


const connection=async(username,password)=>{
    // const URL='mongodb+srv://anasaliw:fluffy122997@anas.0be97.mongodb.net/user-blogs?retryWrites=true&w=majority'
    const URL=`mongodb+srv://rahil10x:rahil10x@cluster0.wfyxtqo.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log('connection to database is successful')
    } catch (error) {
        console.log('Error : '+ error);
    }
}
export default connection;