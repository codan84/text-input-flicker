import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import { Portal, Modal, TextInput, Button, Text, Dialog } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper';

export default function HomeScreen() {
  const [ showModal, setShowModal ] = useState(false)
  const [ showDialog, setShowDialog ] = useState(false)
  const [ text, setText ] = useState('')
  const [ modalText, setModalText ] = useState('')
  const [ dialogText, setDialogText ] = useState('')

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView>
          <Text>This input works fine:</Text>
          <TextInput value={text} onChangeText={setText} />
          <Button mode='outlined' onPress={() => setShowModal(true)}>Show modal</Button>
          <Button mode='outlined' onPress={() => setShowDialog(true)}>Show dialog</Button>
        </SafeAreaView>
        <Portal>
          <Modal
            visible={showModal}
            onDismiss={() => setShowModal(false)}
            contentContainerStyle={styles.modalStyle}>
            <Text>This input flickers:</Text>
            <TextInput value={modalText} onChangeText={setModalText} />
          </Modal>
          <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
            <Dialog.Content>
              <Text>This input flickers:</Text>
              <TextInput value={dialogText} onChangeText={setDialogText} />
            </Dialog.Content>
          </Dialog>
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
