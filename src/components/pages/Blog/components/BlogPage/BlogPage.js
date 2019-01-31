import React from 'react';
import PropTypes from 'prop-types';

import BlogPost from './components/BlogPost/BlogPost';

import classes from './BlogPage.module.css';

const BlogPage = props => {
  let blogPosts = props.currentPosts.map((post, i) => (
    <BlogPost post={post} key={i} index={i} arrLength={props.currentPosts.length} />
  ));
  return <div className={classes.wrapper}>{blogPosts}</div>;
};

BlogPage.propTypes = {
  currentPosts: PropTypes.array.isRequired
};

export default BlogPage;
