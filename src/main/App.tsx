import { StyleSheet, View } from 'react-native';
import { Router } from './router';

export const App = () => {
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
