import $ from 'jquery'

export function load({article}) {
  return $.get('/api/comment', {article})
}
