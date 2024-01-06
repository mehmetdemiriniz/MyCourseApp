import { StyleSheet, Text, View, Modal, Button, SafeAreaView, Image, TextInput } from 'react-native'
import React, {useState} from 'react'

export default function CourseInput({modalIsOpen, setModalIsOpen, onAddCourse}) {

    const [enteredCourseNameText, setEnteredCourseNameText] = useState('')

    const addCourseHandler = () => { 
        onAddCourse(enteredCourseNameText)
        setEnteredCourseNameText('')
    }

    const closeModalHandler = () => {
        setModalIsOpen(false)
        setEnteredCourseNameText('')
    }

    const courseNameInputHandler = (enteredText) => {
        setEnteredCourseNameText(enteredText)
    }

  return (
    <Modal visible={modalIsOpen} animationType="slide">
    <SafeAreaView style={styles.centeredView}>
        <Text style={styles.addCourseTitle}>Yeni Kurs Ekle</Text>
        <Image source={require('../../assets/images/react.png')} style={styles.images} />
        <TextInput placeholder="Yeni Kurs Ekle" style={styles.textInput} value={enteredCourseNameText} onChangeText={courseNameInputHandler} />

        <View style={styles.buttonContainer}>
            <View style={styles.buttonRed}>
                <Button title="Kapat" color='white' onPress={closeModalHandler} />
            </View>

            <View style={styles.buttonGreen}>
                <Button title="Kaydet" color='white' onPress={addCourseHandler}/>
            </View>
        </View>

    </SafeAreaView>
  </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    addCourseTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        color: "green",
    },
    images: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    textInput: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%",
    },
    buttonRed: {
        width: "40%",
        backgroundColor: "red",
    },
    buttonGreen: {
        width: "40%",
        backgroundColor: "green",
    },
    

})