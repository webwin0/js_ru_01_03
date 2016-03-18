import AppDispatcher from '../dispatcher'
import { CREATE_COMMENT } from '../actions/constants'
import SimpleStore from './SimpleStore'

class CommentStore extends SimpleStore {
  constructor(stores, initialState) {
    super(stores, initialState)

    this.token = AppDispatcher.register((action) => {
      const {type, data} = action

      switch (type) {
        case CREATE_COMMENT:
          let id = this._getNextCommentId()
          this.setCurrentId(id)
          let comment = {
            id,
            name: '',
            text: data.text
          }
          this.__add(comment)
          this.emitChange()

          break
      }
    })
  }

  _getNextCommentId() {
    let ids = this.getAll().map((comment) => comment.id)

    return Math.max(...ids) + 1
  }

  setCurrentId(id) {
    this.__currentId = id
  }

  getCurrentId() {
    return this.__currentId
  }

}

export default CommentStore
