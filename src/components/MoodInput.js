//my component for handling mood input and button submissions.

import React from 'react';
import { TextInput, Button, View } from 'react-native';
import { styles } from '../styles,globalStyles';
import _default from '@react-navigation/stack/lib/typescript/src/navigators/createStackNavigator';

const MoodInput = ({mood, setMood, onAddMood}) => {
  return(
    <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder="How would you describe your feelings right now"
        value={mood}
        onChangeText={text => setMood(text)} 
        />
        <Button title="Add Mood" onPress={onAddMood} />
    </View>
  );
};

export default MoodInput;