import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from "react";
import ListItems from './components/ListItems';

export default function App() {

  const [textInput, setTextInput] = useState("")
  const [add, setAdd] = useState([])

  const handleInput = (e) => {
    setTextInput(e)
  }



  const addItem = () => {
    let id
    if (add.length === 0) {
      id = 1;
    } else {
      id = add.length + 1;
    }
    setAdd([...add, { id: id, value: textInput }])
    setTextInput("")
  }

  const deleteItem = (id) => {
    const newList = add.filter(i => i.id != id)
    setAdd(newList)
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewChildren1}>
        <Text style={styles.title}>Shoping list</Text>
        <View style={styles.inputView}>
          <TextInput placeholder='Ingrese algo' value={textInput} onChangeText={handleInput} style={styles.textInput} />
          <Button title='Agregar' onPress={addItem} />
        </View>
      </View>
      <View style={styles.viewChildren2}>
        <Text style={styles.title}>Lista: </Text>
        {add.length === 0 ?
          <Text>No hay elementos...</Text> :
          add.map((i, id) => (
            <View key={id} style={styles.listItems}>
              <ListItems deleteItem={deleteItem} i={i}/>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  viewChildren1: {
    flex: 1,
  },
  viewChildren2: {
    flex: 3,
  },
  inputView: {
    flexDirection: 'row',
  },
  textInput: {
    color: "black",
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    margin: 5,
  },
  listItems: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  itemDisabled: {
    color: "grey",
    margin: 10,
  },
  item: {
    color: "black",
    margin: 10,
  },
});
