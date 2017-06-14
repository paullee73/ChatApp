import React from "react";
import { StyleSheet, TextInput, View, ScrollView, Text } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Send a Message..." };
  }

  sendText() {}

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.chat}
          //autoCorrect={true}
          //onEndEditing={this.sendText()}
          //onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <ScrollView><Text>main</Text></ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  chat: {
    flex: 1,
    top: 70,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white"
  }
});
