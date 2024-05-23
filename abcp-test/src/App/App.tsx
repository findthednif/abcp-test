import React, { useState, useCallback } from "react";
import Button from "../Button/Button.tsx";
import UserInfo from "../UserInfo/UserInfo.tsx";
import useThrottle from "../Services/Hooks/useTrottle.tsx";
import { User } from "../Services/Types/types.ts";
import './App.css'

const URL = "https://jsonplaceholder.typicode.com/users";

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [cache, setCache] = useState<Map<number, User>>(new Map());

  const receiveRandomUser = useCallback(async () => {
    const id = Math.floor(Math.random() * 10) + 1;

    if (cache.has(id)) {
      setUser(cache.get(id) || null);
      return;
    }

    try {
      const response = await fetch(`${URL}/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const _user = (await response.json()) as User;
      setUser(_user);
      setCache((prevCache) => new Map(prevCache).set(id, _user));
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  }, [cache]);

  const throttledReceiveRandomUser = useThrottle(receiveRandomUser, 2000);

  const handleButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      throttledReceiveRandomUser();
    },
    [throttledReceiveRandomUser]
  );

  return (
    <div className="app">
      <header>Get a random user</header>
      <Button onClick={handleButtonClick} />
      <UserInfo user={user} />
    </div>
  );
};

export default App;
