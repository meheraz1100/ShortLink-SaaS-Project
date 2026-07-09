"use client";

import Container from "../shared/container";
import {
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <h2 className="text-xl font-bold">ShortLink</h2>

          <nav className="flex items-center gap-6">
            <a href="#">Features</a>
            <a href="#">Pricing</a>

            {isSignedIn ? (
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            ) : (
              <SignInButton mode="modal">
                <Button>Login</Button>
              </SignInButton>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
}