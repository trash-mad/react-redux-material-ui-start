import React, {PropTypes, Component} from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

export default class Posts extends Component {
  render() {
    return (
      <div className="margin-1">
        <List>
          {this.props.posts.map((post, i) =>
            <ListItem primaryText={post.title} />
          )}
        </List>
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
