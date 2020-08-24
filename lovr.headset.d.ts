import { Texture } from "./Texture";
import { HeadsetOrigin } from "./HeadsetOrigin";
import { HeadsetDriver } from "./HeadsetDriver";
import { LuaIterator } from "./LuaIterator";
import { Device } from "./Device";
import { Model } from "./Model";
import { DeviceButton } from "./DeviceButton";
import { DeviceAxis } from "./DeviceAxis";

/**
 * Returns the name of the headset as a string.
 *
 * @link [lovr.headset.getName](https://lovr.org/docs/lovr.headset.getName)
 */
export function getName(): string;

/**
 * Returns a Texture that contains whatever is currently rendered to the headset.
 *
 * @link [lovr.headset.getMirrorTexture](https://lovr.org/docs/lovr.headset.getMirrorTexture)
 */
export function getMirrorTexture(): Texture;

/**
 * Returns the dimensions of the headset display (for one eye), in pixels.
 *
 * @tupleReturn
 * @link [lovr.headset.getDisplayDimensions](https://lovr.org/docs/lovr.headset.getDisplayDimensions)
 */
export function getDisplayDimensions(): [number, number];

/**
 * Returns the height of the headset display (for one eye), in pixels.
 *
 * @link [lovr.headset.getDisplayHeight](https://lovr.org/docs/lovr.headset.getDisplayHeight)
 */
export function getDisplayHeight(): number;

/**
 * Returns 2D triangle vertices that represent areas of the headset display that will never be seen by the user (due to the circular lenses).
 *
 * @returns A table of points. Each point is a table with two numbers between 0 and 1.
 * @link [lovr.headset.getDisplayMask](https://lovr.org/docs/lovr.headset.getDisplayMask)
 */
export function getDisplayMask(): [number, number][];

/**
 * Returns the width of the headset display (for one eye), in pixels.
 *
 * @link [lovr.headset.getDisplayWidth](https://lovr.org/docs/lovr.headset.getDisplayWidth)
 */
export function getDisplayWidth(): number;

/**
 * Returns the near and far clipping planes used to render to the headset.
 *
 * @tupleReturn
 * @link [lovr.headset.getClipDistance](https://lovr.org/docs/lovr.headset.getClipDistance)
 */
export function getClipDistance(): [number, number];

/**
 * Sets the near and far clipping planes used to render to the headset.
 *
 * @param near The distance to the near clipping plane, in meters.
 * @param far The distance to the far clipping plane, in meters.
 * @link [lovr.headset.setClipDistance](https://lovr.org/docs/lovr.headset.setClipDistance)
 */
export function setClipDistance(near: number, far: number): void;

/**
 * Renders to each eye of the headset using a function.
 *
 * @param callback The function used to render. Any functions called will render to the headset instead of to the window.
 * @link [lovr.headset.renderTo](https://lovr.org/docs/lovr.headset.renderTo)
 */
export function renderTo(callback: (this: void) => void): void;

/**
 * Returns the type of origin used for the tracking volume.
 *
 * @link [lovr.headset.getOriginType](https://lovr.org/docs/lovr.headset.getOriginType)
 */
export function getOriginType(): HeadsetOrigin;

/**
 * Returns the HeadsetDriver that is currently in use, optionally for a specific device.
 *
 * @link [lovr.headset.getDriver](https://lovr.org/docs/lovr.headset.getDriver)
 */
export function getDriver(): HeadsetDriver;

/**
 * Returns a table with all of the currently tracked hand devices.
 *
 * @link [lovr.headset.getHands](https://lovr.org/docs/lovr.headset.getHands)
 */
export function getHands(): LuaIterator<[number, Device]>;

/**
 * Returns the current linear velocity of a device, in meters per second.
 *
 * @param device The device to get the velocity of.
 * @tupleReturn
 * @link [lovr.headset.getVelocity](https://lovr.org/docs/lovr.headset.getVelocity)
 */
export function getVelocity(device?: Device): [number, number, number];

/**
 * Returns a new Model for the specified device.
 *
 * @param device The device to load a model for.
 * @link [lovr.headset.newModel](https://lovr.org/docs/lovr.headset.newModel)
 */
export function newModel(device?: Device): Model | undefined;

/**
 * Returns the current angular velocity of a device.
 *
 * @param device The device to get the velocity of.
 * @tupleReturn
 * @link [lovr.headset.getAngularVelocity](https://lovr.org/docs/lovr.headset.getAngularVelocity)
 */
export function getAngularVelocity(device?: Device): [number, number, number];

/**
 * Returns the current position and orientation of a device.
 *
 * @tupleReturn
 * @link [lovr.headset.getAngularVelocity](https://lovr.org/docs/lovr.headset.getAngularVelocity)
 */
export function getPose(device?: Device): [number, number, number, number, number, number, number];

/**
 * Returns the current position of a device, in meters, relative to the play area.
 *
 * @tupleReturn
 * @link [lovr.headset.getPosition](https://lovr.org/docs/lovr.headset.getPosition)
 */
export function getPosition(device?: Device): [number, number, number];

/**
 * Returns whether a button on a device is currently touched.
 *
 * @param device The device.
 * @param button The button.
 * @link [lovr.headset.isTouched](https://lovr.org/docs/lovr.headset.isTouched)
 */
export function isTouched(device: Device, button: DeviceButton): boolean;

/**
 * Returns whether a button on a device is pressed.
 *
 * @param device The device.
 * @param button The button.
 * @link [lovr.headset.isDown](https://lovr.org/docs/lovr.headset.isDown)
 */
export function isDown(device: Device, button: DeviceButton): boolean;

/**
 * Returns whether any active headset driver is currently returning pose information for a device.
 *
 * @param device The device to get the pose of.
 * @link [lovr.headset.isTracked](https://lovr.org/docs/lovr.headset.isTracked)
 */
export function isTracked(device?: Device): boolean;

/**
 * Returns the current orientation of a device, in angle/axis form.
 *
 * @param device The device to get the orientation of.
 * @tupleReturn
 * @link [lovr.headset.getOrientation](https://lovr.org/docs/lovr.headset.getOrientation)
 */
export function getOrientation(device?: Device): [number, number, number, number];

/**
 * Causes the device to vibrate with a custom strength, duration, and frequency, if possible.
 *
 * @param device The device to vibrate.
 * @param strength The strength of the vibration (amplitude), between 0 and 1.
 * @param duration The duration of the vibration, in seconds.
 * @param frequency The frequency of the vibration, in hertz. 0 will use a default frequency.
 * @returns Whether the vibration was successfully triggered by an active headset driver.
 * @link [lovr.headset.vibrate](https://lovr.org/docs/lovr.headset.vibrate)
 */
export function vibrate(device?: Device, strength?: number, duration?: number, frequency?: number): boolean;

/**
 * Get the current state of an analog axis on a device.
 *
 * @param device The device.
 * @param axis The axis.
 * @tupleReturn
 * @link [lovr.headset.getAxis](https://lovr.org/docs/lovr.headset.getAxis)
 */
export function getAxis(device: Device, axis: DeviceAxis): number[];

/**
 * Returns the depth of the play area, in meters.
 *
 * @link [lovr.headset.getBoundsDepth](https://lovr.org/docs/lovr.headset.getBoundsDepth)
 */
export function getBoundsDepth(): number;

/**
 * Returns the size of the play area, in meters.
 *
 * @tupleReturn
 * @link [lovr.headset.getBoundsDimensions](https://lovr.org/docs/lovr.headset.getBoundsDimensions)
 */
export function getBoundsDimensions(): [number, number];

/**
 * Returns a list of points representing the boundaries of the play area, or nil if the current headset driver does not expose this information.
 *
 * @param t A table to fill with the points. If nil, a new table will be created.
 * @returns A flat table of 3D points representing the play area boundaries.
 * @link [lovr.headset.getBoundsGeometry](https://lovr.org/docs/lovr.headset.getBoundsGeometry)
 */
export function getBoundsGeometry(t: any[]): [number, number, number][] | undefined;

/**
 * Returns the width of the play area, in meters.
 *
 * @link [lovr.headset.getBoundsWidth](https://lovr.org/docs/lovr.headset.getBoundsWidth)
 */
export function getBoundsWidth(): number;

