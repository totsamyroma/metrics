"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  ButtonGroup,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { gql } from "../../gql/";
import Client from "../../gql/client";

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
  const { data, loading } = useQuery(GET_USERS, { client: Client });

  return (
    <div className="w-full flex flex-col gap-4">
      <h3>Users</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Table radius="none" aria-label="Users list">
          <TableHeader radius="none">
            <TableColumn>FULL NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>ACTION</TableColumn>
          </TableHeader>
          <TableBody>
            {data &&
              data.users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.fullName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <ButtonGroup className="flex">
                      <Button
                        href={{
                          pathname: "/metrics",
                          query: { user_id: user.id },
                        }}
                        as={Link}
                        variant="solid"
                      >
                        List user metrics
                      </Button>
                      <Button
                        href={{
                          pathname: "/metrics/create",
                          query: { user_id: user.id },
                        }}
                        as={Link}
                        variant="solid"
                      >
                        Add new metric
                      </Button>
                      <Button
                        variant="solid"
                        onClick={() => {
                          handleDeleteUser(user.id);
                        }}
                      >
                        Delete User
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default UsersPage;
