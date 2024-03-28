import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { ModalTokens } from '../components/modal';

export function Home() {

    const [qtde, defineQtde] = useState(6)
    const [telaModal, configTelaModal] = useState(false)

    function gerarNick() {
        configTelaModal(true);
    }

    return (
        <View style={ESTILO.container}>
            <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
            <Text style={ESTILO.caracteres}>
                {qtde} Caracteres
            </Text>
            <View style={ESTILO.area}>
                <Slider style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    minimumTrackTintColor="#F72585"
                    maximumTrackTintColor="#000"
                    thumbTintColor="#3A0CA3"
                    value={qtde}
                    onValueChange={(value) => defineQtde(value.toFixed(0))}
                />
            </View>
            <TouchableOpacity style={ESTILO.button} onPress={gerarNick}>
                <Text style={ESTILO.buttonText}>
                    Gerar Nick
                </Text>
            </TouchableOpacity>
            <Modal visible={telaModal} animationType="fade" transparent={true}>
                <ModalTokens handleClose={() => configTelaModal(false)} />
            </Modal>
        </View>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5F9FF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 50,
        width: 200,
        height: 200
    },
    area: {
        marginBottom: 14,
        marginTop: 14,
        width: "80%",
        backgroundColor: "#E5F9FF",
        borderRadius: 8,
        padding: 8
    },
    button: {
        backgroundColor: "#480CA8",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold"
    },
    caracteres: {
        fontSize: 20,
        fontWeight: "bold"
    }
})