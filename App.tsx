import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {getRealm} from './src/database/realm';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [code, setCode] = useState('');
  const [artist, setArtist] = useState('');
  const [music, setMusic] = useState('');
  const [start, setStart] = useState('');
  const [loading, setLoading] = useState(false);

  const handleData = async () => {
    const realm = getRealm();
    try {
      setLoading(true);
      const data = {
        _id: uuidv4(),
        code,
        artist,
        music,
        start,
        favorited: false,
        createdAt: new Date(),
      };
      let musicData: any;

      (await realm).write(async () => {
        musicData = (await realm).create('Music', data) as unknown as any;
      });

      

      Alert.alert('Music Created', music);

      setLoading(false);
    } catch (error) {
      Alert.alert('Music not Inserted');
  
    } finally {
      (await realm).close();
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        keyboardType="numeric"
        placeholder="code"
        onChangeText={setCode}
        style={styles.input}
      />
      <TextInput
        placeholder="artist"
        onChangeText={setArtist}
        style={styles.input}
      />
      <TextInput
        placeholder="music"
        onChangeText={setMusic}
        style={styles.input}
      />
      <TextInput
        placeholder="start"
        onChangeText={setStart}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleData}>
        {loading ? (
          <ActivityIndicator size={16} />
        ) : (
          <Text style={styles.buttonText}>Salvar</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 12,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    padding: 10,
    borderRadius: 10,
    width: '50%',
    backgroundColor: 'green',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
