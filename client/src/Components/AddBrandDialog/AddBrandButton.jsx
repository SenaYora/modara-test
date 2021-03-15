import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = {
  main: {
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  button: {
    borderRadius: '50%',
    width: 80,
    height: 80,
    outline: 'none',
    border: '2px solid #000',
    '&:active': {
      border: '1px solid #000b'
    }
  },
  plusText: {
    fontSize: 50,
    fontWeight: 900
  }
}

function AddBrandButton({ classes, onClick }) {
  return (
    <div className={classes.main}>
      <button className={classes.button} onClick={onClick}>
        <div className={classes.plusText}>+</div>
      </button>
    </div>
  )
}

export default withStyles(styles)(AddBrandButton)