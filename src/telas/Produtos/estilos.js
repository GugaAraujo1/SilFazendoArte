import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    nome: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 20,
    },
    descricao: {
        color: "black",
        fontSize: 16,
    },
    preco: {
        color: "purple",
        fontSize: 20,
        fontWeight: "bold",
    },
    produtos: {
        padding: 24,
    },
    listadesejos: {
        paddinHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    posicao: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});