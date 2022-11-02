import { Pressable, Text} from 'react-native';

export const AppButton = ({ onPress, title, styles }) => (
  <Pressable style={styles} onPress={onPress}>
    <Text>{title}</Text>
  </Pressable> 
  );



