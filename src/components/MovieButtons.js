import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function SimpleTooltips(props) {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Delete"  >
        <IconButton aria-label="Delete" onClick={props.onDelete}>
          <DeleteIcon  />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit" aria-label="Edit">
        <Fab color="secondary"fontSize="small"className={classes.fab}>
          <EditIcon onClick={props.OnEdit}/>
        </Fab>
      </Tooltip>

    </div>
  );
}