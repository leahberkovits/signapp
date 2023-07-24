import { primary45 } from "./utils/colors";
import logo from "../src/icons/logosign.svg";
import { Image } from "antd";

export function Header() {
  const styles = {
    container: {
      backgroundColor: "#303030",
      color: "#FFF",
      // padding: 12,
      fontWeight: 600,
      height: "125px",
      display: "flex",
      justifyContent: "space-between",
    },
  };
  return (
    <div style={styles.container}>
      <div
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          // background: "red",
          display: "flex",
          paddingLeft: 150,
        }}
      >
        <Image src={logo} style={{ width: "80%" }} preview={false} />
      </div>

      <div
        style={{
          fontSize: "20px",
          display: "flex",
          color: "white",
          fontWeight: 400,
          marginTop: "auto",
          marginBottom: "auto",
          paddingRight: 150,
        }}
      >
        Where Signature Meets Security
      </div>
    </div>
  );
}
