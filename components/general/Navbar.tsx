"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState } from "react";
import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";

export function Navbar() {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="py-5 px-6 flex items-center justify-between bg-white shadow-xs">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Yaz <span className="text-blue-500">Lab</span>
          </h1>
        </Link>
      </div>
      <div className="hidden sm:flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-medium hover:text-blue-500 transition-colors"
        >
          Ana Sayfa
        </Link>
        <Link
          href="/dashboard"
          className="text-sm font-medium hover:text-blue-500 transition-colors"
        >
          Kontrol Paneli
        </Link>
      </div>
      <button className="sm:hidden" onClick={toggleMenu}>
        <Menu className="w-7 h-7 text-gray-700" />
      </button>
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg flex flex-col items-start px-6 py-10 sm:hidden z-50"
        >
          <button className="self-end mb-4" onClick={toggleMenu}>
            <X className="w-7 h-7 text-gray-700" />
          </button>
          <Link
            href="/"
            className="text-lg font-medium hover:text-blue-500 transition-colors py-2"
            onClick={toggleMenu}
          >
            Ana Sayfa
          </Link>
          <Link
            href="/dashboard"
            className="text-lg font-medium hover:text-blue-500 transition-colors py-2"
            onClick={toggleMenu}
          >
            Kontrol Paneli
          </Link>
          <div className="mt-6">
            {user ? (
              <div className="flex flex-col gap-4">
                <p className="text-lg">{user.given_name}</p>
                <LogoutLink
                  className={buttonVariants({ variant: "destructive" })}
                >
                  Çıkış Yap
                </LogoutLink>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <LoginLink className={buttonVariants()}>Giriş Yap</LoginLink>
                <RegisterLink
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Kayıt Ol
                </RegisterLink>
              </div>
            )}
          </div>
        </motion.div>
      )}
      <div className="hidden sm:flex items-center gap-4">
        {user ? (
          <>
            <p>{user.given_name}</p>
            <LogoutLink className={buttonVariants({ variant: "destructive" })}>
              Çıkış Yap
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink className={buttonVariants()}>Giriş Yap</LoginLink>
            <RegisterLink className={buttonVariants({ variant: "secondary" })}>
              Kayıt Ol
            </RegisterLink>
          </>
        )}
      </div>
    </nav>
  );
}
