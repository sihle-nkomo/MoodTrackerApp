//A centralized location for styles to keep styling separated from logic

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  moodListContainer: {
    width: '100%',
    marginTop: 20,
  },
  moodItem: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#dfe6e9',
    marginVertical: 5,
    borderRadius: 5,
  },
});
