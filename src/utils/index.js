import Avatar from "@/components/componentsPage/Avatar";
import Button from "@/components/componentsPage/Button/Button";
import Card from "@/components/componentsPage/Card/Card";
import ContactUs from "@/components/componentsPage/Contact-us";
import CTA from "@/components/componentsPage/Cta";
import Introduction from "@/components/componentsPage/Introduction";
import LoginPage from "@/components/componentsPage/LoginPage/LoginPage";
import Navbar from "@/components/componentsPage/Navbar";
import NotFound from "@/components/componentsPage/Not-found";
import Pagination from "@/components/componentsPage/Pagination/Pagination";
import SignUp from "@/components/componentsPage/Register/SignUp";
import SearchBar from "@/components/componentsPage/Searchbar";

export const data = [
    {
      input: "Introduction",
    },
    {
        input: "Pagination"
    },
    // {
    //   input: "Buttons",
    // },
    {
      input: "Login Page",
    },
    {
      input: "SignUp Page",
    },
    {
      input: "Cards",
    },
    {
      input: "Search Bar",
    },
    {
      input: "Avatar",
    },
    {
      input: "NavBar",
    },
    {
      input: "404 - Page",
    },
    {
      input: "CTA",
    },
    {
      input: "Contact-Us",
    },
];

export const ComponentsList = [
    {
      input: "Introduction",
      element: <Introduction/>
    },
    {
        input: "Pagination",
        element: <Pagination/>
    },
    {
      input: "Buttons",
      element: <Button/>
    },
    {
      input: "Login Page",
      element: <LoginPage/>
    },
    {
      input: "SignUp Page",
      element: <SignUp/>
    },
    {
      input: "Cards",
      element: <Card/>
    },
    {
      input: "Search Bar",
      element: <SearchBar/>
    },
    {
      input: "Avatar",
      element: <Avatar/>
    },
    {
      input: "NavBar",
      element: <Navbar/>
    },
    {
      input: "404 - Page",
      element: <NotFound/>
    },
    {
      input: "CTA",
      element: <CTA/>
    },
    {
      input: "Contact-Us",
      element: <ContactUs/>
    },
];