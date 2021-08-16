import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

FilterSkeleton.propTypes = {
  length: PropTypes.number,
};

FilterSkeleton.defaultProps = {
  length: 6,
}

const useStyles = makeStyles(theme => ({
  menu: {
    marginTop: theme.spacing(1),
  },
}));

function FilterSkeleton({length}) {
  const classes = useStyles();

  return (
    <div>
      {Array.from(new Array(length)).map((x, index) => (
           <Skeleton className={classes.menu} height={20} key={index} variant="text" />
      ))}
    </div>
  );
}

export default FilterSkeleton;