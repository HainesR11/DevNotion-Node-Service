import {Router} from 'express'
import call from '../utils/MakeCall'
import { GetAllPosts, GetPost } from '../controllers/Post/Post'

const router = Router()

router.get('/', call(GetAllPosts))
// router.get('/User/:id', call())
router.get('/:id', call(GetPost))

export default router