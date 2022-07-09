import { response, Router } from 'express'

const router = Router();

router.get('/', (requere, response)=>{
    return response.json({message:'Olá dev'});
});

export default router;