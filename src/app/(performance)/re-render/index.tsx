import DemoSection from "@/components/DemoSection";
import { BadReRenderExample } from "@/feature/performance/re-render";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReRenderScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={{ gap: 24 }}>
          <DemoSection
            title="Bad Example"
            description="The child re-renders every time the parent state changes."
          >
            <BadReRenderExample />
          </DemoSection>

          {/* <DemoSection
            title="Fixed Example"
            description="The child is wrapped with React.memo and stable props, so it does not re-render unnecessarily."
          >
            <FixedReRenderExample />
          </DemoSection> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
