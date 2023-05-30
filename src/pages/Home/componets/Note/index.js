import React, { useReducer, useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export default function Note ( { id, nome, ico, countTask, setCountTask} ) {
    const [selecionaNota, inverterSelecionaNota] = useReducer(
        (selecionaNota) => !selecionaNota,
        false
    ); 

    const toggleNote = () => {
        inverterSelecionaNota();
        selecionaNota ? setCountTask( countTask + 1) : setCountTask( countTask - 1);
    }

    return (
        <TouchableOpacity 
            style={ selecionaNota ? style.itemSelecionado : style.itemNaoSelecionado}
            onPress={toggleNote}
        >
            <Image source={ico} style={style.ico} />
            <Text style={style.nome}> {nome} </Text>
            <View style={ selecionaNota ? style.statusNotOk : style.statusOk}>
                <Text style = { style.statusText }> {selecionaNota ? "Fazer" : "Feito" } </Text>
            </View>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    itemSelecionado: {
        alignItems: 'center',
        borderRadius: 5,
        borderBottomColor: "#ECECEC",
        backgroundColor: "#E1EFF2",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        margin: '5%',
    },
    itemNaoSelecionado: {
        alignItems: 'center',
        borderRadius: 5,
        borderBottomColor: "#BDBCFF",
        backgroundColor: "#DBFCFF",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        margin: '5%'
    },
    ico: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        height: 46,
        width: 46,
    },
    nome: {
        fontSize: 20,
    },
    statusOk: {
        backgroundColor: "#00EA17",
        height: '100%',
    },
    statusNotOk: {
        backgroundColor: "#FF5D5D",
        height: '100%',
    },
    statusText: {
        alignSelf: 'baseline',
    }
});