import {useContext} from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {SearchBoxContext} from '../App';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (

    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


  const SearchResults = ({searchResults}) => {
  const searchBoxContext = useContext(SearchBoxContext)

  const {searchOpen, setDisplayLocation, setSearchOpen, handleSearchClose} = searchBoxContext;

  const searchClickHandler = (item) => {
    setDisplayLocation(item);
    console.log("Search item clicked: ", item);
    setSearchOpen(false);
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleSearchClose}
        aria-labelledby="search-results"
        open={searchOpen}
      >
        <BootstrapDialogTitle id="search-results" onClose={handleSearchClose}>
          Search Results
        </BootstrapDialogTitle>
        <DialogContent dividers>
            <List>
                {searchResults &&
                    searchResults.map((item, index) => {
                        return (
                            <ListItem disablePadding key={index}>
                                <ListItemButton onClick={e => searchClickHandler(item)}>
                                    <ListItemText primary={`${item.LocalizedName}, ${item.AdministrativeArea.LocalizedName === item.LocalizedName 
                                        ? `${item.Country.LocalizedName}`
                                        : `${item.AdministrativeArea.LocalizedName}, ${item.Country.LocalizedName}`}`}>
                                        
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

export default SearchResults
