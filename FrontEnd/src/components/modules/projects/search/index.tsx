import { alpha, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 10,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
    // marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2) ,
    width: '250px !important',
    marginTop:5,
    [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing(2),
        // width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))

const SearchField = ({title,onchange,value}:any) => {
  return (
    <div style={{
        width:300,
        height:'100%',
        display:'flex',
        flexDirection:'column',
        margin:10
        //   boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.6)',
    }}>
        <span style={{
            display:'flex',
            fontWeight:500,
            fontSize:16,
            marginLeft:23
          }}>{title}</span>
          <Search>
              <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                  placeholder={`Search ${title}`}
                  type={title==='Project Name'?'text':'number'}
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={onchange}
                  value={value}
              />
          </Search>
    </div>
  )
}

export default SearchField