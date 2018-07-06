import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ArticlesBox extends Component {
  renderArticles() {
    if(!this.props.articles[0]) {
      return <p>No articles</p>;
    }

    return this.props.articles[0].articles.map((article, i) => {
      return (
        <ListItem key={article.i}>
          <img width="150" src={article.urlToImage} alt={article.title} />
          <ListItemText
            primary={article.title}
            secondary={article.description}
          />
        </ListItem>
      );
    });
  }

  render() {
    return (
      <div>{this.renderArticles()}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
  }
}

export default connect(mapStateToProps)(ArticlesBox);