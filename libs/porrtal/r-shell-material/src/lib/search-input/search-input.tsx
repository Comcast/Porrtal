import { Box, Icon, TextField } from '@mui/material';
import { useSearchAction, useSearchText } from '@porrtal/r-shell';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './search-input.module.scss';

/* eslint-disable-next-line */
export interface SearchInputProps {}

export interface SearchInputRef {
  div: HTMLDivElement | null;
  input: HTMLInputElement | null;
}

export const SearchInput = forwardRef<
  SearchInputRef | undefined,
  SearchInputProps
>((props, ref) => {
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchAction = useSearchAction();
  const searchText = useSearchText();
  useImperativeHandle(ref, () => ({
    get div() {
      return divRef.current;
    },

    get input() {
      return inputRef.current;
    },
  }));

  return (
    <div ref={divRef}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Icon
          className={styles['search-icon']}
          onClick={(evt) => {
            evt.stopPropagation();
            searchAction.openSearchDialog();
            inputRef.current?.focus();
          }}
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
});

export default SearchInput;
