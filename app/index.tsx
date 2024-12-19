import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import { Portal, Modal, TextInput, Button, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper';

export default function HomeScreen() {
  const [ showModal, setShowModal ] = useState(false)
  const [ text, setText ] = useState('')
  const [ modalText, setModalText ] = useState('')

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView>
          <Text>This input works fine:</Text>
          <TextInput value={text} onChangeText={setText} />
          <Button onPress={() => setShowModal(true)}>Show modal</Button>
        </SafeAreaView>
        <Portal>
          <Modal
            visible={showModal}
            onDismiss={() => setShowModal(false)}
            contentContainerStyle={styles.modalStyle}>
            <Text>This input flickers:</Text>
            <TextInput value={modalText} onChangeText={setModalText} />
          </Modal>
        </Portal>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'green',
    padding: 10
  }
});
