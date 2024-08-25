import React from "react";

import fakeUserData from "./chance";
import { createUser, deleteUser } from "../store/slices/userSlice";

import { useDispatch, useSelector } from "react-redux";
import { clearUsers } from "../store/action";

export default function UserDetails() {
  // perform action
  const dispatch = useDispatch();

  const addnewUser = () => {
    dispatch(createUser(fakeUserData()));
  };

  const delUser = (name) => {
    dispatch(deleteUser(name));
  };

  const clearAll = () => {
    dispatch(clearUsers());
  };

  // fetch store data from users reducer
  const data = useSelector((state) => state.users);

  return (
    <div>
      <h5>USER CREATION</h5>
      <button onClick={addnewUser}>Create</button>
      <button onClick={clearAll}>clear all</button>

      {data.map((name, index) => (
        <p key={name + "1"}>
          {index + 1}. {name}{" "}
          <button onClick={() => delUser(index)}>Del</button>
        </p>
      ))}
    </div>
  );
}
