import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

class ArticlesBox extends Component {
  renderArticles() {
    return this.props.articles.articles.slice(0,5).map((article, i) => {
      let image = '';
      if(article.urlToImage) {
        image = <img width="150" src={article.urlToImage} alt={article.title} />;
      }
      
      return (
        <ListItem key={article.i+article.title}>
          {image}
          <ListItemText
            primary={article.title}
            secondary={article.description}
          />
        </ListItem>
      );
    });
  }

  render() {
    if(this.props.loading)
      return <CircularProgress />;
      
    if(!this.props.articles)
      return false;
      
    return (
      <div hidden={this.props.loading ? 'hidden' : ''}>
        {this.renderArticles()}
        <Divider />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.articles.loading,
    articles: state.articles.data,
  }
}

export default connect(mapStateToProps)(ArticlesBox);