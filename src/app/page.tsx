"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // e.preventDefault();
    authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          //redirect to the dashboard or sign in page
          alert("success");
        },
        onError: () => {
          // display the error message
          alert("something went wrong");
        },
      }
    );
  };
  const onLogin = () => {
    // e.preventDefault();
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          //redirect to the dashboard or sign in page
          alert("success");
        },
        onError: () => {
          // display the error message
          alert("something went wrong");
        },
      }
    );
  };

  if (session) {
    return (
      <div className="flex flex-col p-4 gap-4">
        <p>Logged in as {session.user?.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 p-4">
        <h1>Sign Up</h1>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>Sign Up</Button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h1>Log in </h1>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onLogin}>Log in</Button>
      </div>
    </div>
  );
}
