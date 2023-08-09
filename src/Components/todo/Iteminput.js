import { StyleSheet, View, Text, Button } from "react-native";

export default function Iteminput(props) {
  function HandleDelete() {
    props.onDelete(props.index); // Pass the index instead of id
  }

  return (
    <View  style={styles.itemsinPut}>
      <Text style={styles.itemsText}>{props.text}</Text>
      <Button title='delete' onPress={HandleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  itemsinPut: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 8,
    padding: 10,
    backgroundColor: 'purple',
    alignItems: 'center',
    borderRadius: 6,
  },
  itemsText: {
    width: '70%',
    color: 'white',
    marginLeft: 10,
  },
});
