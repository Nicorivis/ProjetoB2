import { TextInput, View, Image, TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function ForgetPasswordPage()
{
    return(
        <View style={styles.container}>
            <Image source= {require('../../assets/imgs/logo.webp')} style={styles.imgLogo}/>
            <TextInput
            placeholder = "email" style={styles.input}/>
            <TextInput/>
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Recuperar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen:"RegisterPage"}}>
                    Registre-se</Link>
                <Link to={{screen:"LoginPage"}}>
                    Voltar para o Login</Link>
            </View>
        </View>
    )
}