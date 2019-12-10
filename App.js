/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Video from 'react-native-video';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const EXAMPLE_VIDEO = 'https://dubit-stream-tests.s3-eu-west-1.amazonaws.com/legend/master_playlist.m3u8';

const App: () => React$Node = () => {
  const [inputText, setInputText] = useState(EXAMPLE_VIDEO);
  const [videoSrc, setVideoSrc] = useState(EXAMPLE_VIDEO);

  const updateVideoSrc = () => {
    setVideoSrc(inputText);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.body}>
            <TextInput style={styles.textInput} value={inputText} onChangeText={setInputText} />
            <Button title="Update Video Source" onPress={updateVideoSrc} />

            <Video
              source={{ uri: videoSrc }}
              ref={ref => {
                this.player = ref;
              }}
              style={styles.video}
              controls={true}
              repeat={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const screenWidth = Math.round(Dimensions.get('window').width);
const videoWidth = screenWidth - 40;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    padding: 20,
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    flex: 1,
    padding: 3,
  },
  video: {
    flex: 1,
    height: videoWidth,
    width: videoWidth,
  },
  text: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
    width: videoWidth,
  },
});

export default App;
