import { Href, useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Example {
  id: string;
  route: Href;
  title: string;
  description: string;
}

const examples: Example[] = [
  {
    id: "1",
    route: "/re-render",
    title: "Re-render",
    description: "Show when memoized child avoids unnecessary updates.",
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={{ flexGrow: 1, padding: 24 }}>
        <Text style={{ fontSize: 32, fontWeight: "700" }}>RN Performance</Text>
        <Text
          style={{ fontSize: 16, color: "#444", lineHeight: 24, marginTop: 10 }}
        >
          Explore examples that highlight React Native performance behavior.
        </Text>

        <FlatList
          data={examples}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push(item.route)}
              style={({ pressed }) => ({
                backgroundColor: pressed ? "#0f62fe" : "#007aff",
                paddingVertical: 16,
                paddingHorizontal: 20,
                borderRadius: 14,
                marginTop: 18,
              })}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
                {item.title}
              </Text>
              <Text style={{ color: "rgba(255,255,255,0.85)", marginTop: 4 }}>
                {item.description}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
