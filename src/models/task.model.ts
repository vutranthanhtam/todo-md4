import prisma from "../service/prisma/prisma.service"

class TaskModel {
    
    async getAllTasks() {
        try {
            let data = await prisma.task.findMany()
            return {
                data: data
            }
        } catch (err) {
            return {
                err
            }
        }
    }
    async getTaskById(id: number) {
        try {
            let data = await prisma.task.findUnique({
                where: {
                    id
                }
            })
            return {
                data: data
            }
        } catch (err) {
            return {
                err
            }
        }
    }
    async createTask(data: any) {
        try {
            let newTask = await prisma.task.create({
                data
            })
            return {
                data: newTask
            }
        } catch (err) {
            return {
                err
            }
        }
    }
    async deleteTask(id: number) {
        try {
            let taskDelete = await prisma.task.delete({
                where: {
                    id
                }
            })
            return {
                data: taskDelete
            }
        } catch (err) {
            return {
                err
            }
        }
    }
    async updateTask(id: number, data: any) {
        try {
            let taskUpdate = await prisma.task.update({
                where: {
                    id
                },
                data
            })
            return {
                data: taskUpdate
            }
        } catch (err) {
            return {
                err
            }
        }
    }
}

export default new TaskModel();