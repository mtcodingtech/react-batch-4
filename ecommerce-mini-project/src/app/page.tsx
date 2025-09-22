import Image from "next/image";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import Carousel from "@/components/Carousel";
import Test from "@/components/Test";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <>
      <Carousel />
      <Categories />
    </>
  );
}
