import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation, route}) {

  let product={name: 'My cool product',
             price: 45,
             description: 'Ice cream maker'};
    
    return (
        <View style={styles.container}>
          <Text >Home Screen</Text>
          <Button title="Go to Details" onPress={()=>navigation.navigate("Details", product)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
