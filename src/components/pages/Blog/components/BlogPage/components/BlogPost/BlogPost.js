import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

import classes from './BlogPost.module.css';

const BlogPost = props => {
  const getFormattedDate = date => {
    let newDate = date.split(' ')[0];
    newDate = new Date(newDate);
    let formattedDate = '';
    formattedDate +=
      (newDate.getMonth() + 1).toString().length === 2
        ? `${newDate.getMonth() + 1}.`
        : `0${newDate.getMonth() + 1}.`;
    formattedDate +=
      newDate.getDate().toString().length === 2
        ? `${newDate.getDate()}.`
        : `0${newDate.getDate()}.`;
    formattedDate += newDate.getFullYear();
    return formattedDate;
  };

  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classes.heading}>
          <h2 className={classes.title}>{props.post.title}</h2>
          <span className={classes.date}>{getFormattedDate(props.post.date)}</span>
        </div>
        <div className={classes.content}>{renderHTML(props.post.body)}</div>
      </div>
      {props.index < props.arrLength - 1 && <hr />}
    </Fragment>
  );
};

BlogPost.propTypes = {
  post: PropTypes.object.isRequired
};

export default BlogPost;
