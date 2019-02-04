import React from 'react';

import classes from './ContactIcon.module.css';

const ContactIcon = () => (
  <a href="mailto:james.t.davey@gmail.com" className={classes.wrapper}>
    <div className={classes.envelope} />
  </a>
);

export default ContactIcon;
