import React, { useState } from "react";

type AuthUser = {
  username: string;
  email: string;
};

const User = (props: AuthUser) => {
  //when initial value will change for state
  //eg. initial value is null and then we try to set the value to non-null
  const [user, setUser] = useState<AuthUser | null>(null);
  //const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      username: "Sneha Thakare",
      email: "snhthakare@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <h3>{user?.username}</h3>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;
