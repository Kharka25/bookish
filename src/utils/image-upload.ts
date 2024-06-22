/* eslint-disable curly */
import {PermissionsAndroid, Platform} from 'react-native';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

export type ImageSource = 'CAMERA' | 'LIBRARY';

const isAndroid = Platform.OS === 'android';
const granted = async () =>
  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
    title: 'App Camera Permission',
    message: 'App needs access to your camera ',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  });

export async function selectImage(
  source: ImageSource,
): Promise<ImagePickerResponse | undefined> {
  let result: ImagePickerResponse;

  if (isAndroid && !granted) return;

  switch (source) {
    case 'CAMERA':
      result = await launchCamera({
        includeBase64: true,
        mediaType: 'photo',
        quality: 1,
      });
      break;
    case 'LIBRARY':
      result = await launchImageLibrary({
        includeBase64: true,
        mediaType: 'photo',
        quality: 1,
      });
      break;
    default:
      result = await launchImageLibrary({
        includeBase64: true,
        mediaType: 'photo',
        quality: 1,
      });
  }

  if (result?.didCancel) return;

  const {uri} = result?.assets![0];

  try {
    await uploadImage(uri!);
  } catch (error) {
    console.warn(error);
  }

  return result;
}

export async function uploadImage(imgURI: string) {
  if (!imgURI) {
    selectImage('LIBRARY');
    return;
  }

  const fileName = imgURI.substring(imgURI.lastIndexOf('/') + 1);
  const uploadURI =
    Platform.OS === 'ios' ? imgURI.replace('file://', '') : imgURI;

  const task = storage().ref(fileName).putFile(uploadURI);
  let taskProgress = 0;

  task.on('state_changed', snapShot => {
    taskProgress =
      Math.round(snapShot.bytesTransferred / snapShot.totalBytes) * 1000;
  });

  try {
    await task;
  } catch (error) {
    console.warn(error, 'HERE');
  }

  console.log(taskProgress, 'PROGESS');
  return taskProgress;
}
