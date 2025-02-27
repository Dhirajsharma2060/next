import { NextApiRequest, NextApiResponse } from "next";

type Product={
    id:number;
    name:string;
    price:number;
}

const products:Product[]=[
    {id:1,name:'Laptop',price:1000},
    {id:2,name:'Mobile',price:500},
];

export default function handler(req:NextApiRequest,res:NextApiResponse){
    res.status(200).json(products);
}