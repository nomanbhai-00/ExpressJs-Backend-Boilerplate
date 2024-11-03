import {DecodeToken, EncodeToken} from "../utility/tokenUtility.js";
import * as path from "node:path";

export const TokenEncode = async(req,res,next) => {
 let result = EncodeToken("engr.noman@gmail.com",'124')
    res.json({token: result})
}
export const TokenDecode=async (req, res) => {
    let result= DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVuZ3Iubm9tYW5AZ21haWwuY29tIiwidXNlcl9pZCI6IjEyNCIsImlhdCI6MTczMDYxMjUwMCwiZXhwIjoxNzMzMjA0NTAwfQ.agGT2dc7fyeKQfYPjw5dnn5zElp1HHsjbQ5piILlleE")
    res.json({token:result});
}

export const Profile=async(req,res)=>{
    res.json({status:"ok"});
}

export const CreateCookies=async (req,res)=>{
    let cookieOptions={expires:new Date(Date.now() + 3600*1000), httpOnly:true, sameSite:true,}
    let data="engr.noman@gmail.com"
    let cookieName="MERN07"
    res.cookie(cookieName,data,cookieOptions)
    res.json({status:"ok"});
}

export const RemoveCookies=async (req,res)=>{
    let cookieOptions={expires:new Date(Date.now() - 3600*1000), httpOnly:true, sameSite:true,}
    let data=""
    let cookieName="MERN07"
    res.cookie(cookieName,data,cookieOptions)
    res.json({status:"ok"});
}

// export const FileUpload=async (req,res)=> {
//
//     // Catch The File
//     let myImg = req.files['myImg']
//     let myFileName = myImg.name;
//
//     // Prepare File Storage Path
//     let myFilePath = path.resolve(process.cwd(), 'storage', myFileName)
//
//     // Move The File Catch Before
//      await myImg.mv(myFilePath, function (err) {
//          if (err) {
//              res.json({status: "not ok"});
//          } else {
//              res.json({status: "ok"});
//          }
//      })
// }
