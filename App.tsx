import {StatusBar, TextInput, ToastAndroid, TouchableOpacity} from 'react-native';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const appendExpression = (text: string) => {
        setExpression(expression + text)
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"}/>
            {/*Answer*/}
            <View style={styles.upperContents}>
                <TextInput style={styles.resultTextInput} editable={false} placeholder={'0'}
                           placeholderTextColor={'white'} onChangeText={setExpression} value={expression}
                           maxLength={15}/>
                <TextInput style={styles.expressionTextInput} editable={false} placeholder={'0'}
                           placeholderTextColor={'white'} maxLength={15} value={result}/>
            </View>
            {/* Button */}
            <View style={styles.lowerContents}>
                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => {
                        appendExpression('(')
                    }}>
                        <Text style={styles.buttonText}>(</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => {
                        appendExpression(')')
                    }}>
                        <Text style={styles.buttonText}>)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => {
                        appendExpression('/100')
                    }}>
                        <Text style={styles.buttonText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => {
                        setExpression('')
                    }}>
                        <Text style={styles.buttonText}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => {
                        appendExpression('7')
                    }}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => {
                        appendExpression('8')
                    }}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => {
                        appendExpression('9')
                    }}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => {
                        appendExpression('/')
                    }}>
                        <Text style={styles.buttonText}>÷</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => {
                        appendExpression('4')
                    }}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => {
                        appendExpression('5')
                    }}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => {
                        appendExpression('5')
                    }}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => {
                        appendExpression('*')
                    }}>
                        <Text style={styles.buttonText}>×</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => {
                        appendExpression('1')
                    }}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => {
                        appendExpression('2')
                    }}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => {
                        appendExpression('3')
                    }}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => {
                        appendExpression('-')
                    }}>
                        <Text style={styles.buttonText}>−</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => {
                        appendExpression('0')
                    }}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => {
                        appendExpression('.')
                    }}>
                        <Text style={styles.buttonText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.equalButton]} onPress={() => {
                        try {
                            let result = eval(expression).toString();
                            setResult(result)
                        } catch {
                            setResult("NaN")
                        }
                    }}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => {
                        appendExpression('+')
                    }}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#202124',
        padding: 16
    },
    upperContents: {
        flex: 3,
        padding: 16,
        borderColor: '#3c4043',
        borderWidth: 1,
        borderRadius: 5
    },
    resultTextInput: {
        flex: 1,
        fontSize: 16,
        textAlign: "right",
        color: 'white'
    },
    expressionTextInput: {
        flex: 1,
        textAlign: "right",
        fontSize: 32,
        color: 'white'
    },
    lowerContents: {
        flex: 7,
    },
    buttons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    },
    button: {
        width: '20%',
        height: '16%',
        backgroundColor: '#5f6368',
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
        borderRadius: 5
    },
    operatorButton: {
        backgroundColor: '#5f6368'
    },
    numberButton: {
        backgroundColor: '#3c4043'
    },
    equalButton: {
        backgroundColor: '#8ab4f8'
    },
    buttonText: {
        color: 'white'
    }

});
