import { Fragment, memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { linksList } from '../../data/links-list';
import {
  CommandDialog,
  CommandDialogHeader,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../../components/ui/command/Command';
import Button from '../ui/button/Button';
import './main-search.scss';

const MainSearch = memo(() => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  function handleClick() {
    setOpen(true);
  }

  function handleSelect(path: string) {
    navigate(path);
    setOpen(false);
  }

  return (
    <>
      <Button
        variant="outline"
        className="command-dialog-trigger"
        onClick={handleClick}
      >
        Search...
        <kbd className="key">
          <span className="special">⌘</span>k
        </kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="main-search-command-dialog"
      >
        <CommandDialogHeader>
          <CommandInput placeholder="Type a search..." />
        </CommandDialogHeader>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {linksList.map(({ heading, linksGroup }, index, arr) => (
            <Fragment key={heading}>
              <CommandGroup key={heading} heading={heading}>
                {linksGroup.map(({ path, pathName, icons: { Outlined } }) => (
                  <CommandItem
                    key={pathName}
                    value={pathName}
                    onSelect={() => handleSelect(path)}
                  >
                    <Outlined className="path-icon" />
                    <span>{pathName}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              {index + 1 !== arr.length && <CommandSeparator />}
            </Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
});

export default MainSearch;
