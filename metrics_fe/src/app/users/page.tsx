"use client"

import { useQuery } from '@apollo/client';
import { gql } from '../../gql/';
import Client from '../../gql/client';

const GET_USERS = gql(/* GraphQL */ `
  query GetUsers {
    users {
      id
      email
      firstName
      lastName
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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {data && data.users.map(user => (
              <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UsersPage;
