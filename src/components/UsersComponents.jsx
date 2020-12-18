import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";
import Card from "./CardComponents";

const Users = () => {
  const dispatch = useDispatch;
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {/* {users.loading && <p>Loading...</p>} */}
      {users && users.map((user) => <Card user={user} key={user.id} />)}
      {/* {error && !loading && <p>{error}</p>} */}
    </>
  );
};

export default Users;
