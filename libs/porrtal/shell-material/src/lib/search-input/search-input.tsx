import { Box, Button, Icon, InputAdornment, TextField } from '@mui/material';
import { useSearchAction, useSearchText } from '@porrtal/shell';
import { useRef } from 'react';
import styles from './search-input.module.scss';

/* eslint-disable-next-line */
export interface SearchInputProps {}

export function SearchInput(props: SearchInputProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchAction = useSearchAction();
  const searchText = useSearchText();

  return (
    <div ref={divRef}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Icon
          className={styles['search-icon']}
          onClick={(evt) => alert('hello')}
        >
          search
        </Icon>

        <TextField
          className={styles['search-input']}
          margin="dense"
          variant="standard"
          onChange={(evt) => {
            searchAction.openSearchDialog();
            searchAction.setSearchText(evt.target.value);
          }}
          inputRef={inputRef}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <Icon onClick={(evt) => alert('hello')}>search</Icon>
          //     </InputAdornment>
          //   ),
          // }}
          value={searchText}
        ></TextField>
      </Box>
    </div>
  );
}

export default SearchInput;
