import { StyleSheet, Text, View, Button } from 'react-native';

export default function Details({navigation, route}) {

  console.log(route);
  //let myParams = route.params;
  //console.log(myParams);
  //let name = myParams.name;
  //let description = myParams.description;
  //let price = myParams.price;
// instead of al of these, you can simply do this ad react would match the object attributes for you
  let {name, description, price} = route.params;
  
    return (       
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
  </View>  
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',    
      padding: 50,  
    },
  });
  
