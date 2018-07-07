import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import Zoom from '@material-ui/core/Zoom';

class ArticlesBox extends Component {
  state = {
    initialLoad: false,
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.articles) {
      setTimeout(() => {
        this.setState({ initialLoad: true });
      }, 500);
    }
  }

  renderArticles() {
    return this.props.articles.articles.slice(0,5).map((article, i) => {
      let image = '';
      if(article.urlToImage) {
        image = <img width="150" src={article.urlToImage} alt={article.title} />;
      }
      
      return (
        <ListItem 
          dense 
          button
          component="a"
          href={article.url}
          target="_blank"
          key={article.i+article.title}
        >
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
      <Zoom in={this.state.initialLoad}>
        <div>
          {this.renderArticles()}
          <Divider />
        </div>
      </Zoom>
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