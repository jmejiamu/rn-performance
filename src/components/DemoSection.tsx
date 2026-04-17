import { ReactNode } from "react";
import { Text, View } from "react-native";

type DemoSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function DemoSection({
  title,
  description,
  children,
}: DemoSectionProps) {
  return (
    <View
      style={{
        padding: 16,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        gap: 12,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "700" }}>{title}</Text>
      <Text style={{ color: "#555" }}>{description}</Text>
      {children}
    </View>
  );
}
