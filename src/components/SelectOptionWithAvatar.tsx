import CustomAvatar from "./CustomAvatar";
import { Text } from "./text";

const SelectOptionWithAvatar: React.FC<{
  name: string;
  avatarUrl?: string;
  shape?: "circle" | "square";
}> = ({ name, avatarUrl, shape }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <CustomAvatar shape={shape} name={name} src={avatarUrl} />
      <Text>{name}</Text>
    </div>
  );
};

export default SelectOptionWithAvatar;
