import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Image,
} from "react-native";

import GoalItem from "./components/GoalItem.js";

import GoalInput from "./components/GoalInput.js";

import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };
  // in GoalInput we ve passed onAddGoal as a prop which calls addGoalHadler function
  // onDelete should point out to a function
  TouchableOpacity.defaultProps = { activeOpacity: 1.0 };
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image source={require("./assets/img3.jpg")} style={styles.image} />
        <Image
          source={require("./assets/GoalsHack.png")}
          style={styles.image1}
        />
      </View>
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.addmore}>
          {/*{
            
            <Button
              title="Add Your New Goal"
              color="#3d0019"
              onPress={() => setIsAddMode(true)}
            />
            
          */}
        </View>
      </TouchableOpacity>
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  Icontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    resizeMode: "cover",
    paddingRight: 300,
  },
  image1: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    resizeMode: "cover",
    paddingRight: 300,
  },
  container: {
    height: "100%",
    justifyContent: "center",

    paddingBottom: 650,

    position: "absolute",
  },
  addmore: {
    color: "#66002a",
  },
}); //stylesheet because it automatically give validation
