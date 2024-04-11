This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

iOS: [![Build status](https://build.appcenter.ms/v0.1/apps/a4dd1794-c555-441a-96b3-af68881ac8f1/branches/dev/badge)](https://appcenter.ms)

Android: [![Build status](https://build.appcenter.ms/v0.1/apps/22d5a089-8208-41bc-af1a-8571e137b189/branches/dev/badge)](https://appcenter.ms)

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Starting the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Responsive Design

The UI should be consistent across different device irrespect of the screen size. The utils folder holds a number of functions (found in responsiveDesign.ts file) that serves this purpose - fontScale, horizontalScale and verticalScale. These higher order functions take in a numeric value and scale it (up or down) depending on the screen size using the Dimensions and PixelRatio APIs exposed by react-native.

#### Testing responsiveness

Prefix the "scripts" command for specific OS in package.json with additional flag to test on different devices:

```bash
# To run specific android device
react-native run-android --deviceId="device id"

# To run specific iOS device
react-native run-ios --simulator="devide type"

# or run using npx
npx react-native run-[specify OS] [specify OS flag]
```

## Testing
