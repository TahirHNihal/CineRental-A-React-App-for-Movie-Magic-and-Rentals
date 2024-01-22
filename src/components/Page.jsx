import { useContext } from "react";
import MovieStore from "./CineRental/MovieStore";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import { ThemeContext } from "../contexts";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieStore />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Page;
