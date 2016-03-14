import React from 'react';

export default (Component) => {
  return class extends React.Component {
    state = {
        openArticleId: null
    }

    render () {
      return <Component {...this.props} {...this.state}
        openArticleId = {this.state.openArticleId}
        openArticle = {this.openArticle}

        />
    }

    openArticle = (openArticleId) => (ev) => {
        if (ev) ev.preventDefault()
        this.setState({ openArticleId })
    }
  }
}
