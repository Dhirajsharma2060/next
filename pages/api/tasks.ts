import { NextApiRequest,NextApiResponse } from "next";

type Task={
    id:number;
    name:string;
    completed:boolean;

};

let tasks:Task[]=[
    {id:1,name:'Task 1',completed:false},
];

export default function handler(req:NextApiRequest,res:NextApiResponse){
    if (req.method==='GET'){
        res.status(200).json(tasks);
    }
    if (req.method==='POST'){
        const {name}=req.body;     
        if (!name){
            return res.status(400).json({message:'Title is required'});
        }
        const newTask={
            id:tasks.length+1,
            name:name,
            completed:false,
        };
        tasks.push(newTask);
        res.status(201).json(newTask);
    }
}
