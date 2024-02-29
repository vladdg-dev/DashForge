import { Avatar as AntdAvatar, AvatarProps } from "antd";

const CustomAvatar: React.FC<{
  rest: AvatarProps;
  name: string;
  style: string;
}> = ({ name, style, ...rest }) => {
  return (
    <AntdAvatar
      alt={"Vito Dev"}
      size="small"
      style={{
        backgroundColor: "#87d068",
        display: "flex",
        alignItems: "center",
        border: "none",
      }}
    >
      {name}
    </AntdAvatar>
  );
};

export default CustomAvatar;
