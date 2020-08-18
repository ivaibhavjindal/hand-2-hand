import React from "react";
import { useQuery } from "@apollo/client";
import GET_ALL_MESSAGE from "../graphql/queries/GetAllMessage";

function AdminGetAllMessage() {
  const { loading, error, data } = useQuery(GET_ALL_MESSAGE);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading ...</h1>;
  console.table(data);
  const message = data.getAllMessage.map((message) => (
    <div key={message._id}>
      <h3>FirstName: {message.firstName}</h3>
      <h3>LastName: {message.lastName}</h3>
      <h3>Email: {message.email}</h3>
      <p>Message: {message.message}</p>
    </div>
  ));
  return message;
}

export default AdminGetAllMessage;
