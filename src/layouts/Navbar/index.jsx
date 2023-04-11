import styles from "./styles.module.scss";
import React from "react";
import Button from "../../components/Button";


function Navbar() {
  return <nav className={styles.navbar}>
    <Button btnClassName={"red"} link={'kun.uz'} btnTitle={'salom'}  />
    <Button btnClassName={"borderRed"} link={'kun.uz'} btnTitle={'salomred'}  />
  </nav>;
}

export default Navbar;
