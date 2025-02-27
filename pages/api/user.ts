import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma=new PrismaClient();

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if (req.method==='GET'){
        const users=await prisma.user.findMany();
        res.status(200).json(users);
    }
    if (req.method==='POST'){
        const {name,email}=req.body;
        const newUser=await prisma.user.create({
            data:{name:name,email:email},
        });
        res.status(201).json(newUser);
    }
    res.status(405).json({message:'Method not allowed'});
}