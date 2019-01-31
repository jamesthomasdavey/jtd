import React, { Component } from 'react';
import axios from 'axios';

import classes from './Blog.module.css';

import BlogPage from './components/BlogPage/BlogPage';
import LeftArrow from './components/LeftArrow/LeftArrow';
import RightArrow from './components/RightArrow/RightArrow';

const url = 'https://api.tumblr.com/v2/blog/jamesthomasdavey.tumblr.com';
const apiKey = 'GPFs9wx2Y6jaEyhsxfrhXqcbYlmGefKkngraQ7jOUH5xFmXZy1';

class Blog extends Component {
  state = {
    posts: [],
    pageNumber: 0,
    isLoading: true,
    transitionPage: false
  };
  componentDidMount = () => {
    this.mounted = true;
    this.getPosts();
  };
  componentDidUpdate = () => {
    if (!this.props.match.params.page) {
      if (this.state.pageNumber > 1) {
        this.getPosts();
      }
    }
  };
  componentWillUnmount = () => {
    this.mounted = false;
  };
  getPosts = () => {
    if (!this.mounted) return;
    axios.get(`${url}/posts/text?api_key=${apiKey}`).then(data => {
      this.setState({ posts: data.data.response.posts }, this.fixUrl);
    });
  };
  fixUrl = () => {
    const numberOfPosts = this.state.posts.length;
    const pageParam = this.props.match.params.page;
    let isValidPageParam = true;
    if (pageParam) {
      if ((Number(pageParam) - 1) * 4 > numberOfPosts) {
        isValidPageParam = false;
      } else if (Number(pageParam) <= 1) {
        isValidPageParam = false;
      }
    }
    if (isValidPageParam) {
      if (pageParam) {
        this.setState({ pageNumber: Number(pageParam), isLoading: false });
      } else {
        this.setState({ pageNumber: 1, isLoading: false });
      }
    } else {
      this.props.history.push('/blog');
      this.setState({ pageNumber: 1, isLoading: false });
    }
  };
  advanceToFuture = () => {
    this.setState({ transitionPage: true }, () => {
      setTimeout(() => {
        this.setState({ transitionPage: false }, () => {
          if (this.state.pageNumber === 2) {
            this.props.history.push('/blog');
            this.setState({ pageNumber: 1 }, () => {
              window.scrollTo(0, 0);
            });
          } else {
            this.props.history.push(`/blog/${this.state.pageNumber - 1}`);
            this.setState({ pageNumber: this.state.pageNumber - 1 }, () => {
              window.scrollTo(0, 0);
            });
          }
        });
      }, 300);
    });
  };
  advanceToPast = () => {
    this.setState({ transitionPage: true }, () => {
      setTimeout(() => {
        this.setState({ transitionPage: false }, () => {
          this.props.history.push(`/blog/${this.state.pageNumber + 1}`);
          this.setState({ pageNumber: this.state.pageNumber + 1 }, () => {
            window.scrollTo(0, 0);
          });
        });
      }, 300);
    });
  };
  render() {
    let blogPage;
    let blogFooter;
    if (!this.state.isLoading) {
      const startIndex = (this.state.pageNumber - 1) * 4;
      const endIndex = (this.state.pageNumber - 1) * 4 + 4;
      const currentPosts = this.state.posts.slice(startIndex, endIndex);
      blogPage = <BlogPage currentPosts={currentPosts} />;
    }
    if (!this.state.isLoading) {
      console.log('hi');
      let disableLeftArrow = false;
      let disabledRightArrow = false;
      if (this.state.pageNumber === 1) {
        disableLeftArrow = true;
      }
      if (this.state.pageNumber * 4 > this.state.posts.length) {
        disabledRightArrow = true;
      }
      blogFooter = (
        <div className={classes.footer}>
          <LeftArrow advanceToFuture={this.advanceToFuture} disabled={disableLeftArrow} />
          <RightArrow advanceToPast={this.advanceToPast} disabled={disabledRightArrow} />
        </div>
      );
    }
    return (
      <div
        className={[
          classes.wrapper,
          this.state.transitionPage ? classes.transition : '',
          this.state.isLoading ? '' : classes.visible
        ].join(' ')}
      >
        {blogPage}
        {blogFooter}
      </div>
    );
  }
}

export default Blog;
