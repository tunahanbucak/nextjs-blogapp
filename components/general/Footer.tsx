"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-white shadow-xs py-8 px-6">
      <div className="max-w-7xl  flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="mb-6 sm:mb-0">
          <h1 className="text-2xl font-semibold text-gray-800">
            Yaz <span className="text-blue-600">Lab</span>
          </h1>
          <p className="text-gray-700 text-sm mt-2">
            En güncel içerikleri keşfedin yazılarımıza göz atın!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 text-gray-800 font-medium sm:justify-center mt-6 sm:mt-0 w-full">
          <div className="flex justify-center gap-4 w-full">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Hakkında
            </Link>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              İletişim
            </Link>
          </div>
        </div>
        <div className="flex gap-4 mt-6 sm:mt-0">
          <a
            href="https://github.com/tunahanbucak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-gray-800 hover:text-gray-900 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/tunahan-buçak-473812247"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-gray-800 hover:text-blue-600 transition-colors" />
          </a>
          <a
            href="https://twitter.com/tunahanbucak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="w-6 h-6 text-gray-800 hover:text-blue-500 transition-colors" />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-700 text-sm ">
        © {new Date().getFullYear()} Yaz Lab. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
