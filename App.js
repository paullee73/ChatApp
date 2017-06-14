import React from "react";
import Alert from "react-native";
import {
  Flatlist,
  Image,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Chat from "./Chat.js";
import NavigationBar from "react-native-navigation-bar";
import gearIcon from "./Gear.png";
import homeIcon from "./homeIcon.png";

// App.js

export default class App extends React.Component {
  toSettings() {}

  toHome() {}

  render() {
    return (
      <View>
        <NativeRouter>
          <View>
            <NavigationBar
              title={"Chat"}
              height={50}
              titleColor={"black"}
              backGroundColor={"#149be0"}
              //leftButtonIcon={homeIcon}
              leftButtonTitle={"Profile"}
              leftButtonTitleColor={"blue"}
              onLeftButtonPress={this.toHome()}
              rightButtonIcon={gearIcon}
              rightButtonTitle={"Settings"}
              rightButtonTitleColor={"blue"}
              onRightButtonPress={this.toSettings()}
            />
          </View>
        </NativeRouter>
        <Chat />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8F9FF",
    alignItems: "center",
    justifyContent: "center"
  }
});
