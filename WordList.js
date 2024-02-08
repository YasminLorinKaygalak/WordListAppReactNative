import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function WordList ({ route, navigation }) {
    //dataSource contains the data we want rendered as a list
    //the dataSource should contain a unique key for each item in the array
    const dataSource = [
        {key: '001', word: 'abate', definition: 'to become less active'},
        {key: '002', word: 'benevolent', definition: 'kind, generous'},
        {key: '003', word: 'clout', definition: 'special advantage or power'},
        {key: '004', word: 'deference', definition: 'respect, regard'},
        {key: '005', word: 'exacerbate', definition: 'to make worse or increase the severity of'},
        {key: '006', word: 'flourish', definition: 'to prosper, grow'},
        {key: '007', word: 'geriatric', definition: 'referring to old age'},
        {key: '008', word: 'hostile', definition: 'harmful, dangerous'},
        {key: '009', word: 'infer', definition: 'to guess, conclude, derive by reasoning'},
        {key: '0010',word: 'lament', definition: 'to feel sorry for, to mourn'},
    ];    
    
    return (
        <View style={styles.container}>
            <FlatList
            data={dataSource}
            renderItem={({item}) => 
                <View style={styles.border}>
                <Text style={styles.itemName}>{item.word}</Text>
                <Text style={styles.itemDesc}>{item.definition}</Text>
                </View>
            } />
             <Button title="Add Word" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingBottom: 50,
    },
    itemName: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    itemDesc: {
      padding: 10,
      fontSize: 10,
      height: 44,
    },
      border: {
      borderWidth: 1,
      borderColor: "gray",
    },
});
  
