import { useQuery, gql } from "@apollo/client";

const GET_CURRENT_USER = gql`
  query getUserID($id: ID!) {
    getUserID(id: $id) {
      name
    }
  }
`;

export function CurrentUser(userID: string) {
  console.log(userID);
  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    variables: { id: userID },
  });

  if (userID === "") return;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <p>User: {data.getUserID.name}</p>;
}
