import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, CREATE_COMMENT } from '../actions/constants'
import SimpleStore from './SimpleStore'
import {commentStore} from './index'

class ArticleStore extends SimpleStore {
    constructor(stores, initialState) {
        super(stores, initialState)

        AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    this.emitChange()
                    break;

                case CREATE_COMMENT:
                    AppDispatcher.waitFor([commentStore.token])
                    let commentId = commentStore.getCurrentId()
                    let article = this.getById(data.articleId)
                    article.comments.push(commentId)
                    this.emitChange()
                    break
            }
        })
    }
}

export default ArticleStore