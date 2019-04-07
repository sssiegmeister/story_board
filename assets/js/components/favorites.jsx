import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Article from './article';
import StackGrid from "react-stack-grid";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.favorites = []
  }

  componentDidMount() {
    let {fcuf} = this.props;
    this.favorites = fcuf() || [];
  }

  render() {
    let {session} = this.props;
    return (<div>
      <StackGrid
          columnWidth={300}
          gutterWidth={20}
          gutterHeight={20}
          monitorImagesLoaded={true}
          gridRef={grid => this.grid = grid}
        >
          {this.favorites.map((source, x) => (
              <Article key={x} source={source} name={source.source} session={session}/>
          ))}
        </StackGrid>
    </div>);
  }
}

export default Favorites;
