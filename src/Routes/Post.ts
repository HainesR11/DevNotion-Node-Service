import {Router} from 'express'
import call from '../utils/MakeCall'
import { GetAllPosts, GetPost, UpdatePost } from '../controllers/Post/Post'

const router = Router()

router.get('/', call(GetAllPosts))

//? Get al post by a specific user
// router.get('/User/:id', call())

//? Get Specific post  
router.get('/:id', call(GetPost))

//? Creator of the post can change details if nessesary 
router.put('/:id', call(UpdatePost))

//? Add type of like ( Later development -> add different type of Like statuses )
router.put('/:id/like', call(() => {})) 

export default router