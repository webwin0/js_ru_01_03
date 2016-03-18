import AppDiscpatcher from '../dispatcher'
import { CREATE_COMMENT } from './constants'

export function createComment(text, articleId) {
  AppDiscpatcher.dispatch({
    type: CREATE_COMMENT,
    data: {
      text,
      articleId
    }
  })
}
