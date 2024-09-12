import React from 'react'
import {Text, View, Button} from 'react-native'

const App = () => {
return(
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Mood Tracker</Text>
         <Button title="Add Mood" onPress={() => console.log("Mood Added")} />
       </View>
     );
   };

   export default App;
