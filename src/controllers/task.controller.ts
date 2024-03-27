import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";
import TaskModel from "../models/task.model";

const prisma = new PrismaClient();
class TaskController {
    async getAll(req: Request, res: Response) {
        try {
            let result = await TaskModel.getAllTasks()
            res.status(200).json({
                message: "Find task successfully!",
                data: result
            })
        } catch (err) {
            return res.status(500).json({
                message: "Lỗi chưa xác định"
            })
        }
    }
    async getTaskById(req: Request, res: Response) {
        try {
            let id = parseInt(req.params.id)
            let result = await TaskModel.getTaskById(id)
            res.status(200).json({
                message: `Find task id:'${id}' successfully!`,
                data: result
            })
        } catch (err) {
            return res.status(500).json({
                message: "Lỗi chưa xác định"
            })
        }
    }
    async createTask(req: Request, res: Response) {
        try {
            let newTask = req.body
            let  data  = await TaskModel.createTask(newTask)
            res.status(200).json({
                message: "Create task successfully!",
                data: data
            })

        } catch (err) {
            return res.status(500).json({
                message: "Lỗi ko xác định" 
            })
        }
    }
    async deleteTask(req: Request, res: Response) {
        try {
            let id = parseInt(req.params.id)
            let result = await TaskModel.deleteTask(id)
            res.status(200).json({
                message: `Delete task id:"${id}" successfully!`,
                data: result
            })
        } catch (err) {
            return res.status(500).json({
                message: "Lỗi chưa xác định"
            })
        }
    }
    async updateTask(req: Request, res: Response) {
        try {
            let id = parseInt(req.params.id)
            let data = await TaskModel.getTaskById(id)
            let dataUpdate = {
                ...data,
                ...req.body
            }
            let result = await TaskModel.updateTask(id, dataUpdate)
            res.status(200).json({
                message: `Update task id:"${id}" successfully!`,
                data: result
            })
        } catch (err) {
            return res.status(500).json({
                message: "Lỗi chưa xác định"
            })
        }
    }
}

export default new TaskController();