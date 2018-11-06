---
title: Geolocation
description: Access GPS data.
---

|AppVeyor|Travis CI|
|:-:|:-:|
|[![Build status](https://ci.appveyor.com/api/projects/status/github/apache/cordova-plugin-geolocation?branch=master)](https://ci.appveyor.com/project/ApacheSoftwareFoundation/cordova-plugin-geolocation)|[![Build Status](https://travis-ci.org/apache/cordova-plugin-geolocation.svg?branch=master)](https://travis-ci.org/apache/cordova-plugin-geolocation)|

# cordova-plugin-jb-geolocation
 ios端是基于cordova-plugin-geolocation稳定版本1.0.0而来，内部调用的是苹果系统自带的定位sdk
 安卓端是基于高德定位封装而来，高德sdk为AMap_Location_V4.3.0_20181016.jar

## Installation

This requires cordova 5.0+ 

    cordova plugin add cordova-plugin-jb-geolocation --variable API_KEY=高德定位使用的key

## Supported Platforms

- Android
- iOS

## Methods

- navigator.geolocation.getCurrentPosition

## Objects (Read-Only)

- Position
- PositionError
- Coordinates

## navigator.geolocation.getCurrentPosition

Returns the device's current position to the `geolocationSuccess`
callback with a `Position` object as the parameter.  If there is an
error, the `geolocationError` callback is passed a
`PositionError` object.

    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             [geolocationError],
                                             [geolocationOptions]);

### Parameters

- __geolocationSuccess__: The callback that is passed the current position.

- __geolocationError__: _(Optional)_ The callback that executes if an error occurs.

- __geolocationOptions__: _(Optional)_ The geolocation options.


### Example

```javascript

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

```

### iOS Quirks
 
 Since iOS 10 it's mandatory to provide an usage description in the `info.plist` if trying to access privacy-sensitive data. When the system prompts the user to allow access, this usage description string will displayed as part of the permission dialog box, but if you didn't provide the usage description, the app will crash before showing the dialog. Also, Apple will reject apps that access private data but don't provide an usage description.

 This plugins requires the following usage description:

 * `NSLocationWhenInUseUsageDescription` describes the reason that the app accesses the user's location. 

 To add this entry into the `info.plist`, you can use the `edit-config` tag in the `config.xml` like this:

```
<edit-config target="NSLocationWhenInUseUsageDescription" file="*-Info.plist" mode="merge">
    <string>need location access to find things nearby</string>
</edit-config>
```
 
### Android Quirks

If Geolocation service is turned off the `onError` callback is invoked after `timeout` interval (if specified).
If `timeout` parameter is not specified then no callback is called.



```
