import { PrismaClient } from "@prisma/client";

class PrismaService extends PrismaClient {
    constructor(){
        super()
        this.connect()
    }
    connect(){
        this.$connect
    }
    disconnect(){
        this.$disconnect
    }
}

export default new PrismaService();