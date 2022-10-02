import React, { useMemo } from 'react';
import type { MRT_ColumnDef } from 'material-react-table';
import MaterialReactTable from 'material-react-table';
import type { FC } from 'react';

import { useAppSelector } from '../../../@store/configureStore';
import { usersSelector } from '../../../@store/users/selectors';
import type { Person } from '../../../@types';

const TableSection: FC = () => {
  const { data: usersData } = useAppSelector(usersSelector);

  // should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name.firstName', // access nested data with dot notation
        header: 'First Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'age', // normal accessorKey
        header: 'Age',
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={usersData} />;
};

export default TableSection;
