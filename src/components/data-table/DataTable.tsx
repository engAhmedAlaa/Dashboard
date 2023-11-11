import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import {
  ColumnDef,
  RowSelectionState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import classNames from 'classnames';
import { useAuth } from '../../hooks/use-auth';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { deleteMultipleDocs } from '../../firebase/firestore';
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import { ToastMessage } from '../toast/Toast';
import {
  ArrowDownTallIcon,
  ArrowUpTallIcon,
  ColumnsIcon,
  DeleteIcon,
  ErrorIcon,
  LoadingIcon,
  SearchIcon,
  SuccessIcon,
} from '../Icons';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table/Table';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu/DropdownMenu';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog/AlertDialog';
import Button from '../ui/button/Button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select/Select';
import './data-table.scss';

interface DataTableProps<TData extends { id: string }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  slug: string;
  AddComponent: () => JSX.Element;
}

function DataTable<TData extends { id: string }, TValue>({
  columns,
  data,
  slug,
  AddComponent,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      columnVisibility,
      rowSelection,
    },
    getRowId(originalRow) {
      return originalRow.id;
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
  });
  const rowSelectionIds = useMemo(
    () => Object.keys(rowSelection),
    [rowSelection]
  );

  return (
    <div className="data-table">
      <div className="data-table-header">
        <div className="search-input-container">
          <SearchIcon className="search-icon" />
          <input
            placeholder="Search..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(String(e.target.value))}
            className={classNames(
              'search-input',
              !!data.length && !table.getRowModel().rows?.length && 'invalid'
            )}
          />
        </div>
        <div className="data-table-header-actions">
          {!!rowSelectionIds.length && (
            <DeleteSelected
              rowSelectionIds={rowSelectionIds}
              setRowSelection={setRowSelection}
              slug={slug}
            />
          )}
          <AddComponent />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="data-table-dropdown-trigger">
                <ColumnsIcon className="column-icon" />
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  const label = column.columnDef.header as string;

                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {label}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="data-table-body">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className={classNames(
                  !table.getRowModel().rows?.length && 'no-results-table-row'
                )}
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={classNames(
                        header.column.getCanSort() && 'data-table-head'
                      )}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div
                        className={classNames(
                          header.column.getCanSort() &&
                            'data-table-head-content'
                        )}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        {(header.column.getCanSort() &&
                          {
                            asc: (
                              <ArrowUpTallIcon className="table-head-icon" />
                            ),
                            desc: (
                              <ArrowDownTallIcon className="table-head-icon" />
                            ),
                          }[header.column.getIsSorted() as string]) ?? (
                          <ArrowUpTallIcon className="table-head-icon not-active" />
                        )}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="data-table-cell-not-results"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="data-table-footer">
        <div className="data-table-footer-info">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="data-table-footer-actions">
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(newValue) => {
              table.setPageSize(Number(newValue));
            }}
          >
            <SelectTrigger className="data-table-select-trigger">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 15, 20, 25].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  Show {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;

function DeleteSelected({
  rowSelectionIds,
  setRowSelection,
  slug,
}: {
  rowSelectionIds: string[];
  setRowSelection: Dispatch<SetStateAction<RowSelectionState>>;
  slug: string;
}) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  async function handleDelete() {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      await deleteMultipleDocs(user!.uid!, slug, rowSelectionIds);
      setOpen(false);
      setRowSelection({});
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description={`${slug.at(0)?.toUpperCase()}${slug.slice(
            1,
            -1
          )} has been deleted.`}
        />,
        {
          icon: SuccessIcon,
        }
      );
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Oops! Something went wrong"
          description={errorMessage}
        />,
        {
          icon: ErrorIcon,
        }
      );
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          className="delete-selection-alert-dialog-trigger"
          aria-label={`Delete ${slug.at(0)?.toUpperCase()}${slug.slice(1, -1)}`}
        >
          <DeleteIcon className="delete-icon" />
          Delete selected
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="delete-selection-alert-dialog-content">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            selected {slug} from your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Formik initialValues={{}} onSubmit={handleDelete}>
          {({ isSubmitting }) => (
            <Form className="form-delete-selection">
              <div className="form-actions">
                <AlertDialogCancel asChild>
                  <Button variant="outline" transform shadow>
                    Cancel
                  </Button>
                </AlertDialogCancel>
                <Button
                  type="submit"
                  variant="destructive"
                  className="submit-button"
                  shadow
                  transform
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <LoadingIcon className="loading-icon" />
                  ) : (
                    'Delete'
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </AlertDialogContent>
    </AlertDialog>
  );
}
