
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, StatusBar } from 'react-native'; //text và view là 2 tp quan trọng nhất
import Iteminput from './src/Components/todo/Iteminput';
import Inputs from './src/Components/todo/Inputs';
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [heading, setHeading] = useState([]);

  function startAddTaskHandle() {
    setModalIsVisible(true)
  }
  function endAddTaskHandle() {
    setModalIsVisible(false)
  }
  function HandleClick(inputText) {
    setHeading(prev => [...prev, inputText]);
    // setModalIsVisible(false);
    endAddTaskHandle();
  }
  function HandleDelete(id) {
    setHeading((prev) => {
      return prev.filter((text, index) => {
        return index !== id
      })
    })

  }
  return (
    <><StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title='Add New Task' onPress={startAddTaskHandle} />
        <Inputs HandleClick={HandleClick} visible={modalIsVisible} onCancel={endAddTaskHandle} />
        <View style={{ flex: 6 }}>
          {/* <Text>List...</Text> */}
          <View>
            <FlatList data={heading} renderItem={(itemData, index) => { return <Iteminput text={itemData.item} id={index} index={itemData.index} onDelete={HandleDelete} />; }}>

            </FlatList>
          </View>
        </View>
      </View></>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },



});
