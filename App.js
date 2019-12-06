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
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Video from 'react-native-video';

const EXAMPLE_VIDEO = 'https://dubit-stream-tests.s3-eu-west-1.amazonaws.com/legend/master_playlist.m3u8';

const App: () => React$Node = () => {
  const [bitrate, setBitrate] = useState(0);
  const [videoSrc, setVideoSrc] = useState(EXAMPLE_VIDEO);
  const [inputText, setInputText] = useState(EXAMPLE_VIDEO);

  const handleBandwidthUpdate = ({ bitrate: newBitrate }) => {
    setBitrate(newBitrate);
  };

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
              reportBandwidth={true}
              onBandwidthUpdate={handleBandwidthUpdate}
            />
          </View>

          <Text>{bitrate}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    width: 300,
  },
  video: {
    width: 400,
    height: 400,
  },
});

export default App;
