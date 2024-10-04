//A component that displays the list of moods.

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/globalStyles';

const MoodList = ({ moods }) => {
  return (
    <View style={styles.moodListContainer}>
      {moods.map((mood, index) => (
        <Text key={index} style={styles.moodItem}>
          {index + 1}. {mood}
        </Text>
      ))}
    </View>
  );
};

export default MoodList;
