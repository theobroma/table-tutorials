import React, { useMemo } from 'react';
import type { MRT_ColumnDef } from 'material-react-table';
import MaterialReactTable from 'material-react-table';
import type { FC } from 'react';

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  gender: string;
};

// nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    age: 21,
    gender: 'male',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    age: 32,
    gender: 'female',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    age: 42,
    gender: 'male',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    age: 33,
    gender: 'male',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    age: 45,
    gender: 'male',
  },
];

const TableSection: FC = () => {
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

  return <MaterialReactTable columns={columns} data={data} />;
};

export default TableSection;
