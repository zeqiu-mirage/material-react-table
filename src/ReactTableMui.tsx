import React, { FC } from 'react';
import {
  TableContainerProps,
  TableFooterProps,
  TableHeadProps,
  TablePaginationProps,
  TableProps,
} from '@mui/material';
import { Column } from 'react-table';
import { ReactTableMuiProvider } from './useReactTableMui';
import { RTM_TableContainer } from './RTM_TableContainer';
import { defaultOptions } from './defaults';

export interface ReactTableMuiOptions {
  showPagination: boolean | 'top' | 'bottom' | 'both' | 'none';
  showSearch: boolean;
  showHead: boolean;
  showFooter: boolean;
  showToolbar: boolean;
  showFilters: boolean;
  showSorting: boolean;
}

type ReactTableMuiOptionProps = Partial<ReactTableMuiOptions>;

export interface ReactTableMuiOptionalProps {
  options?: ReactTableMuiOptionProps;
  tableContainerProps?: TableContainerProps;
  tableFooterProps?: TableFooterProps;
  tableHeadProps?: TableHeadProps;
  tablePaginationProps?: TablePaginationProps;
  tableProps?: TableProps;
}

export interface ReactTableMuiProps extends ReactTableMuiOptionalProps {
  columns: Column[];
  data: any[];
}

export const ReactTableMui: FC<ReactTableMuiProps> = ({
  options = defaultOptions,
  ...rest
}) => {
  return (
    <ReactTableMuiProvider options={options} {...rest}>
      <RTM_TableContainer />
    </ReactTableMuiProvider>
  );
};
