import { Button, StatusBar, StyleSheet, Text, View, Modal, FlatList } from 'react-native'
import React, {useState} from 'react'
import CourseInput from './src/components/CourseInput'

export default function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [courseList, setCourseList] = useState([])

  const modalHandling = () => {
    setModalIsOpen(true)
  }

  const onAddCourse = (courseTitle) => {
    setModalIsOpen(false)
    setCourseList((currentCourses) => [
      ...currentCourses,
      {id: Math.random().toString(), value: courseTitle},
    ]);
  }

  const deleteCourse = (courseId) => {
    setCourseList((currentCourses) => {
      return currentCourses.filter((course) => course.id !== courseId)
    })
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Kurs Ekle" onPress={modalHandling}/>
      </View>
      <CourseInput modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} onAddCourse={onAddCourse}/>
      <View style={styles.courseContainer}>
        <FlatList
          data={courseList}
          renderItem={itemData => (
            <View style={styles.courseListContainer}>
              <Text style={styles.courseTitle}>{itemData.item.value}</Text>
              <Button title="Sil" onPress={() => deleteCourse(itemData.item.id)} color='white'/>
            </View>
          )}
        />
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  courseContainer: {
    marginTop: 10,
  },
  courseListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }

})
