//import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { Storage } from 'expo-storage'

const deviceStorage = {
  
  async saveKey(key, valueToSave) {
    try {
      await Storage.setItem(key, valueToSave);
    } catch (error) {
      console.log('Storage Error: ' + error.message);
    }
  },

  async loadJWT() {
    try {
      const value = await Storage.getItem('id_token');
      if (value !== null) {
        this.setState({
          jwt: value,
          loading: false
        });
      } else {
        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log('Storage Error: ' + error.message);
    }
  },

  async deleteJWT() {
    try{
      await Storage.removeItem('id_token')
      .then(
        () => {
          this.setState({
            jwt: ''
          })
        }
      );
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }
};

export default deviceStorage;