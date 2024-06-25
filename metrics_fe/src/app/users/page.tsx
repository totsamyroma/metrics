"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useQuery } from '@apollo/client';
import { gql } from '../../gql/';
import Client from '../../gql/client';

const GET_USERS = gql(/* GraphQL */ `
  query GetUsers {
    users {
      id
      email
      fullName
    }
  }
`);

const UsersPage = () => {
  // our query's result, data, is typed!
  const { loading, data } = useQuery(GET_USERS, { client: Client });

  return (
    <div>
      <h3>Users</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Table radius="none" aria-label="Users list">
          <TableHeader>
            <TableColumn>FULL NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>ACTION</TableColumn>
          </TableHeader>
          <TableBody>
            {data && data.users.map(user => (
              <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button
                      href={{ pathname: '/metrics', query: { user_id: user.id } }}
                      as={Link}
                      variant="solid"
                    >
                      List user metrics
                    </Button>
                    <Button
                      href={{ pathname: '/metrics/create', query: { user_id: user.id } }}
                      as={Link}
                      variant="solid"
                    >
                      Add new metric
                    </Button>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default UsersPage;
