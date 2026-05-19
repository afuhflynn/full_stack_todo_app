import { 
  auth
} from "@/lib/auth"; 

import { 
  toNextJsHandler
} from "better-auth/next-js"; 


export function authController(){
  const methods = toNextJsHandler(auth);
  return { 
    ...methods
  }
}