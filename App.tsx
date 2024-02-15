import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
// import {
//   Configuration,
//   VESDK,
//   VideoEditorModal,
// } from "react-native-videoeditorsdk";
import { PESDK, PhotoEditorModal } from "react-native-photoeditorsdk";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import * as FileSystem from "expo-file-system";

export default function App() {
  const [uri, setUri] = useState("https://picsum.photos/200/300");
  const [visible, setVisible] = useState(false);

  // const configuration: Configuration = {
  //   filter: {
  //     // By default, the filters are grouped according to the filter
  //     // categories passed to the configuration. In this example,
  //     // the filter grouping is disabled so that all
  //     // available filters will be displayed separately.
  //     flattenCategories: true,
  //   },
  // };

  // const openVideoFromCameraRollExample = async (): Promise<void> => {
  //   try {
  //     // Select a video from the camera roll.
  //     let pickerResult = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Videos,
  //     });

  //     // Return if the video selection has been cancelled.
  //     if (pickerResult.canceled) {
  //       return;
  //     }
  //     console.log(pickerResult.assets[0].uri);
  //     // Open the video editor and handle the export as well as any occuring errors.
  //     const result = await VESDK.openEditor(
  //       pickerResult.assets[0].uri,
  //       configuration
  //     );

  //     if (result != null) {
  //       // The user exported a new video successfully and the newly generated video is located at `result.video`.
  //       console.log(result?.video);
  //     } else {
  //       // The user tapped on the cancel button within the editor.
  //       return;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const openPhotoFromCameraRollExample = async (): Promise<void> => {
  //   try {
  //     // Select a photo from the camera roll.
  //     let pickerResult = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     });

  //     // Return if the image selection has been cancelled.
  //     if (pickerResult.canceled) {
  //       return;
  //     }
  //     console.log(pickerResult.assets[0].uri);
  //     // Open the photo editor and handle the export as well as any occuring errors.
  //     const result = await PESDK.openEditor(pickerResult.assets[0].uri);

  //     if (result != null) {
  //       // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
  //       console.log(result.image);
  //     } else {
  //       // The user tapped on the cancel button within the editor.
  //       return;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const openPhotoFromRemoteExample = async (): Promise<void> => {
  //   try {
  //     const remoteURL = `https://picsum.photos/200/300`;
  //     const { uri } = await FileSystem.downloadAsync(
  //       remoteURL,
  //       FileSystem.documentDirectory + "temp.jpg"
  //     );

  //     console.log(uri);
  //     // Open the photo editor and handle the export as well as any occuring errors.
  //     const result = await PESDK.openEditor(uri);

  //     if (result != null) {
  //       // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
  //       console.log(result);
  //       console.log(result.image);
  //     } else {
  //       // The user tapped on the cancel button within the editor.
  //       return;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const ShowVideoEditorModalExample = ({
  //   visible,
  //   onFinish,
  // }: {
  //   visible: boolean;
  //   onFinish: () => void;
  // }) => {
  //   return (
  //     // Create the video editor modal and handle the export as well as any occuring errors.
  //     <VideoEditorModal
  //       // Add a video from the assets directory.
  //       video={uri}
  //       // Determine whether the editor should be visible or not.
  //       visible={visible}
  //       onExport={(result) => {
  //         // The user exported a new video successfully and the newly generated video is located at `result.video`.
  //         console.log(result.video);
  //         onFinish();
  //       }}
  //       onCancel={() => {
  //         // The user tapped on the cancel button within the editor.
  //         onFinish();
  //       }}
  //       onError={(error) => {
  //         // There was an error generating the video.
  //         console.log(error);
  //         onFinish();
  //       }}
  //     ></VideoEditorModal>
  //   );
  // };

  // const ShowPhotoEditorModalExample = ({
  //   visible,
  //   onFinish,
  // }: {
  //   visible: boolean;
  //   onFinish: () => void;
  // }) => {
  //   return (
  //     // Create the photo editor modal and handle the export as well as any occuring errors.
  //     <PhotoEditorModal
  //       // Add a photo from the assets directory.
  //       image={{ uri: uri }}
  //       // Determine whether the editor should be visible or not.
  //       visible={visible}
  //       onExport={(result) => {
  //         // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
  //         console.log(result.image);
  //         onFinish();
  //       }}
  //       onCancel={() => {
  //         // The user tapped on the cancel button within the editor.
  //         onFinish();
  //       }}
  //       onError={(error) => {
  //         // There was an error generating the photo.
  //         console.log(error);
  //         onFinish();
  //       }}
  //     ></PhotoEditorModal>
  //   );
  // };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Button title="Open Video Lib" onPress={openVideoFromCameraRollExample} />
      <Button title="Open Image Lib" onPress={openPhotoFromCameraRollExample} />
      <Button title="Open Remote Image" onPress={openPhotoFromRemoteExample} /> */}
      {/* <Button
        title="Open Image Modal"
        onPress={() => {
          setVisible(true);
        }}
      /> */}

      {/* <ShowPhotoEditorModalExample
        visible={visible}
        onFinish={() => {
          console.log("Finish");
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 25,
  },
});
