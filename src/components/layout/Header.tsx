import { Layout, Space } from "antd";
import CurrentUser from "./CurrentUser";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space align="center" size="middle">
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
};

export default Header;
