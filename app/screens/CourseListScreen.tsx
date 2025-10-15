import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Course = { id: string; title: string; description: string };
const COURSES: Course[] = [
  { id: "1", title: "Intro to React Native", description: "Learn the basics of React Native and build your first app." },
  { id: "2", title: "Advanced JavaScript", description: "Deep dive into advanced JS concepts for modern apps." },
  { id: "3", title: "UI/UX for Developers", description: "Design beautiful and user-friendly interfaces." },
];

type CoursesStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

type Props = NativeStackScreenProps<CoursesStackParamList, "CourseList">;

export default function CourseListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.item, pressed && styles.pressed]}
            onPress={() => navigation.navigate("CourseDetail", { courseId: item.id, title: item.title, description: item.description })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16 },
  item: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    marginBottom: 12,
  },
  pressed: { opacity: 0.7 },
  title: { fontSize: 18 },
});
