"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); //  استخدمت usePathname بدلاً من useLocationفي  React
  const [Active, setActive] = useState("");
  const currentPage = [
    { path: "/", name: "الرئيسية" },
    { path: "/servicesPage", name: "خدمتنا" },
    { path: "/OurePackagesPage", name: "الباقات" },
    { path: "/OurTeamPage", name: "فريقنا" },
  ];
  useEffect(() => {
    const activePage = currentPage.find((item) => item.path === pathname);
    if (activePage) {
      setActive(activePage.name);
    }

    const handleScroll = () => {
      const HeadBar = document.querySelector(".container");
      if (HeadBar) {
        if (window.pageYOffset >= HeadBar.offsetTop) {
          HeadBar.classList.add("onscroll");
        } else {
          HeadBar.classList.remove("onscroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 d-flex justify-content-center align-items-baseline mt-2">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src="/img/IconSite.svg" alt="img" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-4" id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex align-items-center gap-5">
            {currentPage.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link className="nav-link" href={item.path}>
                  <span
                    style={{
                      color:
                        Active === item.name
                          ? "var(--Color-Secondary)"
                          : "black",
                      fontWeight: Active === item.name ? "bold" : "normal",
                      fontSize: Active === item.name ? "larger" : "1.4rem",
                    }}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div id="btn">
            <Link href={"/ConcatUS"}>
              <button className="btn btn-success" type="submit">
                اتصل بنا
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
