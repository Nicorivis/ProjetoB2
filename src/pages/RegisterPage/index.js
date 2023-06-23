import { TextInput, View, Image, TouchableOpacity, Text } from "react-native";

import styles from "../LoginPage/styles";
import { Link } from "@react-navigation/native";

export default function RegisterPage()
{
    return(
        <View style={styles.container}>
            <Image source= {require('../../assets/imgs/logo.webp')} style={styles.imgLogo}/>
            <TextInput
            placeholder = "username" style={styles.input}/>
            <TextInput
            placeholder = "email" style={styles.input}/>
            <TextInput
            placeholder = "senha" style={styles.input}/>
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Registrar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen:"LoginPage"}}>
                    Voltar para o Login</Link>
                <Link to={{screen:"ForgetPasswordPage"}}>
                    Esqueceu a senha?</Link>
            </View>
        </View>
    )
}