import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useState } from "react";

const ListItems = ({deleteItem, i}) => {

    const [check, setCheck] = useState(false)


    const handleCheck = () => {
        check === false ? setCheck(true) : setCheck(false)
    }

    return (
        <>
            <Button title='Check' onPress={handleCheck} />
            <Text style={check ? styles.itemDisabled : styles.item}>{i.value}</Text>
            <Button title='Eliminar' onPress={() => { deleteItem(i.id) }} />
        </>
    )
}

const styles = StyleSheet.create({
    itemDisabled: {
      color: "green",
      margin: 10,
    },
    item: {
      color: "red",
      margin: 10,
    },
  });

export default ListItems