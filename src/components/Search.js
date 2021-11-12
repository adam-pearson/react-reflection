import { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {SearchContext} from '../App';

const Search = () => {

    const searchContext = useContext(SearchContext);

    console.log("searchContext: ", searchContext);

    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={searchContext.searchSubmitHandler}
        >
          <div>
            <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                value={searchContext.searchValue}
                onChange={e => {searchContext.setSearchValue(e.target.value)}}
            />
          </div>
        </Box>
      );
}

export default Search