import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  CssBaseline,
  Button
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => ({
  toolbarTitle: {
    flex: 1
  },
  appBar: {
    position: "relative",
    margin: theme.spacing.unit * 10
  },
  link: {
    color: "white",
    fontSize: "inherit",
    textDecoration: "none",
    padding: theme.spacing.unit * 1,
    fontFamily: ['"Comic Sans MS"', "cursive", "sans-serif"].join(" ,")
  },
  menuList: {
    marginRight: theme.spacing.unit * 2
  }
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogOut = () => {
    // const { history } = this.props;
    // window.localStorage.removeItem("token");
    // history.push(LOGIN);
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.AppBar} color="primary" position="static">
        <CssBaseline />
        <Toolbar>
          <Typography
            className={classes.toolbarTitle}
            variant="h6"
            color="inherit"
            noWrap
          >
            TalkTalk
          </Typography>
          <Button
            onClick={this.handleLogOut}
            className={classes.link}
            color="default"
            variant="text"
          >
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired
};
export default withStyles(styles)(NavBar);
