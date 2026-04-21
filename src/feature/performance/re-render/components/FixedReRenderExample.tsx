import { memo, useRef, useState } from "react";
import { Button, Text, View } from "react-native";

type ExprensiveComponentProps = {
  label?: string;
};

export default function FixedReRenderExample() {
  const [count, setCount] = useState(0);
  const parentRenderCount = useRef(0);

  parentRenderCount.current += 1;

  return (
    <View style={{ gap: 12 }}>
      <Text>Count: {count}</Text>
      <Text>Parent renders: {parentRenderCount.current}</Text>

      <Button title="Increment" onPress={() => setCount((prev) => prev + 1)} />

      <ExpensiveComponent label={`Updating label`} />
    </View>
  );
}

const ExpensiveComponent = memo(function ExpensiveComponent(
  props: ExprensiveComponentProps,
) {
  const { label } = props;
  const childRenderCount = useRef(0);
  childRenderCount.current += 1;

  const random = Math.random();

  return (
    <View style={{ marginTop: 12 }}>
      <Text>Child renders: {childRenderCount.current}</Text>
      <Text>Heavy UI here: {random}</Text>
    </View>
  );
});
