import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import fetchDataAction from '../actions/fetchDataAction';
import { getData } from '../reducers/dataReducer';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Content from '../components/Content/Content.container'
import SearchBar from '../components/SearchBar/SearchBar'
import CircularProgress from '@material-ui/core/CircularProgress';

function Explore() {
  const data = useSelector(getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAction);
  }, []);

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
        <SearchBar/>
        {
          data.isFetching ? <CircularProgress size={50} style={{margin: 50}}/> : <Content data={data}/>
        }
    </Container> 
  );
}

export default Explore;