"use client";

import { Instagram, Facebook, Mail } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <div className="z-50 fixed bottom-0 left-0 w-full h-fit py-3 bg-background/20 text-muted backdrop-blur-[2px] hidden xs:block">
      <footer>
        <ul className="flex items-center justify-center gap-3 md:gap-6">
          <li className="hover:text-foreground flex items-center gap-1">
            <p className="text-xl">&copy;</p>
            <p className="text-sm">
              {new Date().getFullYear()} All Rights Reserved
            </p>
          </li>
          <li className="hidden sm:block">
            <a
              href="https://www.instagram.com/sumanbshrestha714/"
              className="hover:text-foreground flex gap-1 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
              Instagram
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href="https://www.facebook.com/masters.suman"
              className="hover:text-foreground flex gap-1 text-sm "
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
              Facebook
            </a>
          </li>
          <li className="flex gap-1 text-sm hover:text-foreground">
            <Mail />
            <a href="/contact">Sumanstha0614@gmail.com</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
