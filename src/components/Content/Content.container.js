import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ContentItem from './Content.component'

function Content(props) {

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item container direction="row" xs={11}>
          <Typography variant="overline">
            搜尋結果： {props.data.total}
          </Typography>
        </Grid>
      </Grid>
      {props.data.content.map((item, index) => (
        <ContentItem key={index} item={item}/>
      ))}
    </div>
  );
}

export default Content;