//This screen is the main interface that uses MoodInput and MoodList components.
import React, {useState } from 'react';
import {View, Alert} from 'react-native';
import MoodInput from '../components/MoodInput';
import MoodList from '../components/MoodList';
import { styles } from '../styles/globalSyles';

const Homescreen = () => {
    const [mood, setMood] = useState('');
    const [moodList, setMoodList] = useState([]);

    const handleAddMood = () => {
        if (mood.trim() === '') {
            Alert.alert('Kindly enter your mood');
        }else{
          setMoodList([...moodList, mood]);
          setMood('');//clearing input after adding mood  
        }
    };

    return (
        <View style={styles.container}>
        <MoodInput mood={mood} setMood={setMood} onAddMood={handleAddMood} />
        <MoodList moods={moodList} />
        </View>
    );
};

export default Homescreen;