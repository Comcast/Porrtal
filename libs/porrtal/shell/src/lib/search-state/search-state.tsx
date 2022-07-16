import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

/* eslint-disable-next-line */
export interface SearchStateProps {}

export interface SearchAction {
  closeSearchDialog: () => void;
  openSearchDialog: () => void;
  toggleSearchDialog: () => void;
  setSearchText: (searchText: string) => void;
}

const SearchTextContext = createContext<string>('');
const DebouncedSearchTextContext = createContext<string>('');
const IsSearchDialogOpenContext = createContext<boolean>(false);
const SearchActionContext = createContext<SearchAction>({
  closeSearchDialog: () => {
    // do nothing
  },
  openSearchDialog: () => {
    // do nothing
  },
  toggleSearchDialog: () => {
    // do nothing
  },
  setSearchText: (searchText: string) => {
    // do nothing
  },
});

export function SearchState(props: PropsWithChildren<SearchStateProps>) {
  const debounceMillis = 500;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const timeout = useRef<NodeJS.Timeout>();

  console.log('search state');

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, debounceMillis);
  }, [debounceMillis, searchText]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDialogOpen) {
        event.preventDefault();
        setIsDialogOpen(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [isDialogOpen]);

  const searchAction: SearchAction = useMemo(
    () => ({
      closeSearchDialog: () => {
        setIsDialogOpen(false);
      },
      openSearchDialog: () => {
        setIsDialogOpen(true);
      },
      toggleSearchDialog: () => {
        setIsDialogOpen((isDialogOpen) => !isDialogOpen);
      },
      setSearchText: (searchText: string) => {
        setSearchText(searchText);
      },
    }),
    [setIsDialogOpen, setSearchText]
  );

  return (
    <SearchTextContext.Provider value={searchText}>
      <DebouncedSearchTextContext.Provider value={debouncedSearchText}>
        <IsSearchDialogOpenContext.Provider value={isDialogOpen}>
          <SearchActionContext.Provider value={searchAction}>
            {props.children}
          </SearchActionContext.Provider>
        </IsSearchDialogOpenContext.Provider>
      </DebouncedSearchTextContext.Provider>
    </SearchTextContext.Provider>
  );
}

export function useSearchText() {
  const state = useContext(SearchTextContext);
  return state;
}

export function useDebouncedSearchText() {
  const state = useContext(DebouncedSearchTextContext);
  return state;
}

export function useIsSearchDialogOpen() {
  const state = useContext(IsSearchDialogOpenContext);
  return state;
}

export function useSearchAction() {
  const state = useContext(SearchActionContext);
  return state;
}

// export function useSearchTextDebounce(
//   debounceMillis: number,
//   doSearch: (searchText: string) => void
// ) {
//   const searchText = useSearchText();
//   const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
//   const timeout = useRef<NodeJS.Timeout>();

//   useEffect(() => {
//     clearTimeout(timeout.current);
//     timeout.current = setTimeout(() => {
//       // setDebouncedSearchText(searchText);
//       doSearch(searchText);
//     }, debounceMillis);
//   }, [debounceMillis, searchText, setDebouncedSearchText, doSearch]);

//   return; // debouncedSearchText;
// }

export default SearchState;
