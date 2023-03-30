import { useQuery, gql } from "@apollo/client";

const GET_CURRENT_USER = gql`
  query getUserID($id: ID!) {
    getUserID(id: $id) {
      name
    }
  }
`;

export function CurrentUser(userID: string) {
  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    variables: { id: userID },
  });

  if (userID === "") return "Guest";
  if (loading) return "Loading...";
  if (error) return "Error";

  return `${data.getUserID.name}`;
}
