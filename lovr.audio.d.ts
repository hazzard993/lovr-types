import { SourceType } from "./SourceType";
import { Source } from "./Source";
import { Blob } from "./Blob";
import { AudioStream } from "./AudioStream";
import { SoundData } from "./SoundData";
import { Microphone } from "./Microphone";

/**
 * Creates a new Source from an ogg file.
 *
 * @param fileName The filename of the sound to load.
 * @param type How to stream in audio data.
 * @link [lovr.audio.newSource](https://lovr.org/docs/lovr.audio.newSource)
 */
export function newSource(fileName: string, type: SourceType): Source;

/**
 * Creates a new Source.
 *
 * @param blob The Blob containing the Source data.
 * @param type How to stream in audio data.
 * @link [lovr.audio.newSource](https://lovr.org/docs/lovr.audio.newSource)
 */
export function newSource(blob: Blob, type: SourceType): Source;

/**
 * Creates a new Source.
 *
 * @param stream The AudioStream used to stream audio data to the Source.
 * @param type How to stream in audio data.
 * @link [lovr.audio.newSource](https://lovr.org/docs/lovr.audio.newSource)
 */
export function newSource(stream: AudioStream, type: SourceType): Source;

/**
 * Creates a new Source.
 *
 * @param soundData The SoundData containing raw audio samples to play.
 * @link [lovr.audio.newSource](https://lovr.org/docs/lovr.audio.newSource)
 */
export function newSource(soundData: SoundData): Source;

/**
 * Pause all playing audio.
 * @link [lovr.audio.pause](https://lovr.org/docs/lovr.audio.pause)
 */
export function pause(): void;

/**
 * Resume all Sources. Has no effect on Sources that are playing or stopped.
 *
 * @link [lovr.audio.resume](https://lovr.org/docs/lovr.audio.resume)
 */
export function resume(): void;

/**
 * Rewind all playing audio.
 *
 * @link [lovr.audio.rewind](https://lovr.org/docs/lovr.audio.rewind)
 */
export function rewind(): void;

/**
 * Stops all audio.
 *
 * @link [lovr.audio.stop](https://lovr.org/docs/lovr.audio.stop)
 */
export function stop(): void;

/**
 * Updates all playing sources. This must be called regularly for audio playback to occur. This is called automatically by the default implementation of lovr.run.
 *
 * @link [lovr.audio.update](https://lovr.org/docs/lovr.audio.update)
 */
export function update(): void;

/**
 * Returns the velocity of the audio listener, in meters per second. This affects the doppler effect.
 *
 * @tupleReturn
 * @link [lovr.audio.getVelocity](https://lovr.org/docs/lovr.audio.getVelocity)
 */
export function getVelocity(): [number, number, number];

/**
 * Sets the velocity of the audio listener, in meters per second. This affects the doppler effect.
 *
 * @param x The x velocity.
 * @param y The y velocity.
 * @param z The z velocity.
 * @link [lovr.audio.setVelocity](https://lovr.org/docs/lovr.audio.setVelocity)
 */
export function setVelocity(x: number, y: number, z: number): void;

/**
 * Returns the master volume. All Source objects have their volume multiplied by this factor.
 *
 * @link [lovr.audio.getVolume](https://lovr.org/docs/lovr.audio.getVolume)
 */
export function getVolume(): number;

/**
 * Sets the master volume. The volume of all Sources will be multiplied by this factor.
 *
 * @param volume The new master volume.
 * @link [lovr.audio.setVelocity](https://lovr.org/docs/lovr.audio.setVolume)
 */
export function setVolume(volume: number): void;

/**
 * Returns the parameters that control the simulated doppler effect.
 *
 * @tupleReturn
 * @link [lovr.audio.getDopplerEffect](https://lovr.org/docs/lovr.audio.getDopplerEffect)
 */
export function getDopplerEffect(): [number, number];

/**
 * Sets the parameters that control the simulated doppler effect: The effect intensity and the speed of sound.
 *
 * @param factor The doppler effect scaling factor.
 * @param speedOfSound The speed of sound, in meters per second.
 * @link [lovr.audio.setDopplerEffect](https://lovr.org/docs/lovr.audio.setDopplerEffect)
 */
export function setDopplerEffect(factor?: number, speedOfSound?: number): void;

/**
 * Returns the position and orientation of the virtual audio listener.
 *
 * @tupleReturn
 * @link [lovr.audio.getPose](https://lovr.org/docs/lovr.audio.getPose)
 */
export function getPose(): [number, number, number, number, number, number, number];

/**
 * Sets the position and orientation of the virtual audio listener.
 *
 * @param x The x position of the listener, in meters.
 * @param y The y position of the listener, in meters.
 * @param z The z position of the listener, in meters.
 * @param angle The number of radians the listener is rotated around its axis of rotation.
 * @param ax The x component of the axis of rotation.
 * @param ay The y component of the axis of rotation.
 * @param az The z component of the axis of rotation.
 * @link [lovr.audio.setPose](https://lovr.org/docs/lovr.audio.setPose)
 */
export function setPose(x: number, y: number, z: number, angle: number, ax: number, ay: number, az: number): void;

/**
 * Returns the position of the virtual audio listener, in meters.
 *
 * @tupleReturn
 * @link [lovr.audio.getPosition](https://lovr.org/docs/lovr.audio.getPosition)
 */
export function getPosition(): [number, number, number];

/**
 * Sets the position of the virtual audio listener, in meters.
 *
 * @param x The x position of the listener.
 * @param y The y position of the listener.
 * @param z The z position of the listener.
 * @link [lovr.audio.setPosition](https://lovr.org/docs/lovr.audio.setPosition)
 */
export function setPosition(x: number, y: number, z: number): void;

/**
 * Returns whether or not audio is currently spatialized with HRTFs.
 *
 * @link [lovr.audio.isSpatialized](https://lovr.org/docs/lovr.audio.isSpatialized)
 */
export function isSpatialized(): boolean;

/**
 * Returns the orientation of the virtual audio listener in angle/axis representation.
 *
 * @tupleReturn
 * @link [lovr.audio.getOrientation](https://lovr.org/docs/lovr.audio.getOrientation)
 */
export function getOrientation(): [number, number, number, number];

/**
 * Sets the orientation of the virtual audio listener in angle/axis representation.
 *
 * @param angle The number of radians the listener should be rotated around its rotation axis.
 * @param ax The x component of the axis of rotation.
 * @param ay The y component of the axis of rotation.
 * @param az The z component of the axis of rotation.
 * @link [lovr.audio.setOrientation](https://lovr.org/docs/lovr.audio.setOrientation)
 */
export function setOrientation(angle: number, ax: number, ay: number, az: number): void;

/**
 * Returns a table with the names of all microphones connected to the system.
 *
 * @link [lovr.audio.getMicrophoneNames](https://lovr.org/docs/lovr.audio.getMicrophoneNames)
 */
export function getMicrophoneNames(): string[];

/**
 * Returns a table with the names of all microphones connected to the system.
 *
 * @param t A table to fill with the microphone names.
 * @link [lovr.audio.getMicrophoneNames](https://lovr.org/docs/lovr.audio.getMicrophoneNames)
 */
export function getMicrophoneNames(t: object): string[];

/**
 * Creates a new Microphone based on the name of an existing microphone and a set of capture parameters. If the specified combination of parameters are not supported for audio capture, nil will be returned.
 *
 * @param name The name of the microphone that this Microphone will record from, or nil to use the default microphone.
 * @param samples The maximum number of samples that will be stored in the Microphone's internal buffer.
 * @param sampleRate The number of audio samples to record each second.
 * @param bitDepth The number of bits occupied by each sample. Usually 8 or 16.
 * @param channelCount The number of channels to record (1 for mono, 2 for stereo).
 * @link [lovr.audio.newMicrophone](https://lovr.org/docs/lovr.audio.newMicrophone)
 */
export function newMicrophone(name?: string | undefined, samples?: number, sampleRate?: number, bitDepth?: number, channelCount?: number): Microphone;
