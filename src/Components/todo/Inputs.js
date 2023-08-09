import { View, TextInput, Button, StyleSheet, Modal,Image } from "react-native";
import { useState } from "react";

export default function Inputs(props) {
  const [inputText, setInputText] = useState("");

  function goalInputHandle(enteredText) {
    setInputText(enteredText);
  }
  
  function add() {
    props.HandleClick(inputText); // Use the correct prop name (HandleClick) instead of onAdd
    setInputText("");
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image source={require('../../../assets/images/goal.png')} style={styles.image}/>
        <TextInput
          placeholder='Enter'
          name='fInput'
          style={styles.inputText}
          onChangeText={goalInputHandle}
          value={inputText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Global' style={styles.btn} onPress={add} color="#b180f0"/>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' style={styles.btn} onPress={props.onCancel} color="red" />
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    // backgroundColor:'#311b6b'
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  btn: {
    textAlign: 'center',
    alignContent: 'center',
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    color:'white',
    
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    marginTop: 16,
    width: '30%',
    marginHorizontal: 6
  }
});
