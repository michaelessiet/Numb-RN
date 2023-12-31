# Numb

Numb is a calculator and conversion application built for mobile using [Expo](https://expo.dev), [Tamagui](https://tamagui.dev), and [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/).

![](https://yvellwnvywwynkrgnsvr.supabase.co/storage/v1/object/public/blog/numb/numb%20screenshots.png?t=2023-09-18T00%3A16%3A21.582Z)

## Stack

- [Expo](https://expo.dev)
- Components 
	- [Tamagui](https://tamagui.dev)
- State Management and Storage
	- [Redux](https://redux.js.org/)
	- [Redux Persist](https://github.com/rt2zz/redux-persist)
	- [React Native MMKV Storage](https://github.com/ammarahm-ed/react-native-mmkv-storage)

## Project Structure

- [app](./app/): This houses the routes of the application using [Expo file based routing](https://docs.expo.dev/routing/create-pages/) provided by Expo Router
- [components](./components/): This houses all the shared components used within the application.
- [lib](./lib/): This houses all the calculation and conversion logic in charge of the primary functionality of the app.
- [store](./store/): Contains everything related to the redux store and redux persist.
- [utils](./utils/): Arbitrary utility functions to make sure that the codebase adheres to the DRY philosophy.
- [ios](./ios/): iOS native code that was autogenerated by the `expo prebuild` command.
- [android](./android/): Android native code that was autogenerated by the `expo prebuild` command.

## Getting Started

Let's start by running the install command:

```sh
npm install
```

Now, install the required iOS pods:

```sh
npx pod-install
```

Start the application

```sh
npm run ios #or npm run android
```

## State of the project

There are a few features that are not implemented from the help/instructions screen. Contributions to help implement them would be great. Here's a short list of the ones that aren't implemented yet, and a tip on how to contribute to the implementation of them

- Currency conversion: This will require interacting with an API, caching the data for at most 24 hours and converting from one currency to another. USD can be used as the base currency to make conversions easier
- Speed/Acceleration conversion: You can contribute to the implementation of this by contributing to the [convert](https://github.com/jonahsnider/convert) package created by [jonahsnider](https://github.com/jonahsnider), this would not only contribute to the improvement of Numb but the improvement of the convert package used by many other applications.
- Word to operand conversion: This means converting prompts like `99 times 100` into `99*100`. An "easy" way to do this would be to replace all instances of word operands (e.g "plus", "times", "divided-by", etc) using regex and string methods. Note that this should probably be done before parsing the prompt to the [Numb engine](./lib/index.ts) 

## Contributing

Feel free to contribute in any way that would improve the functionality of the application or the performance of the application. Issues are also welcome too.