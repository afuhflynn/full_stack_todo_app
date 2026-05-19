import { 
  PrismaClient
} from "@prisma/client"; 

export class DbService { 
  private database: PrismaClient | undefined; 

  async getDatabase(){ 
    if(this.database) return this.database; // proper single ton class in service  
    
    this.database = new PrismaClient(); 

    return this.database; 
  }

  

}