"use client";

import { useEffect, useState } from "react";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
//import "../../globals.css";
//import "./globals.css";
import React from "react";

// ✅ Use only Google Poppins font
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// ✅ Properly typed children props
interface ChildProps {
  role?: string | null;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<string | null>(null);
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <ClerkProvider>
      <UserInfo setRole={setRole} />
      <div className={`${poppinsFont.className} antialiased min-h-screen flex flex-col`}>
        <SignedOut>{!isLandingPage && <SignInButton />}</SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <main className="flex-grow p-6 bg-gray-100">
          {/* ✅ Ensuring proper typing for children */}
          {React.Children.map(children, (child) =>
            React.isValidElement<ChildProps>(child) ? React.cloneElement(child, { role }) : child
          )}
        </main>
      </div>
    </ClerkProvider>
  );
}

// ✅ Correctly handling Clerk user data
function UserInfo({ setRole }: { setRole: (role: string | null) => void }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const userRole = typeof user.publicMetadata?.role === "string" ? user.publicMetadata.role : null;
      setRole(userRole);
    }
  }, [user, setRole]);

  return null;
}
