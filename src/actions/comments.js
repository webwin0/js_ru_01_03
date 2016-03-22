import { ADD_COMMENT, LOAD_COMMENTS } from './constants'
import AppDispatcher from '../dispatcher'
import { asyncAC } from './api/utils'
import { load} from './api/comments'

export function addComment(comment, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {comment, articleId}
    })
}

export const loadComments = asyncAC(load, LOAD_COMMENTS)
