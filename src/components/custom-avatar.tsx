import { Avatar as AntdAvatar, AvatarProps } from "antd";

const CustomAvatar: React.FC<{
  rest: AvatarProps;
  name?: string;
}> = ({ name, ...rest }) => {
  return (
    <AntdAvatar
      alt={name}
      size="small"
      style={{
        backgroundColor: "#87d068",
        display: "flex",
        alignItems: "center",
        border: "none",
      }}
      {...rest}
    >
      {name}
    </AntdAvatar>
  );
};

export default CustomAvatar;
