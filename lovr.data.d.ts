import { AudioStream } from "./AudioStream";
import { Blob } from "./Blob";
import { ModelData } from "./ModelData";
import { Rasterizer } from "./Rasterizer";
import { SoundData } from "./SoundData";
import { TextureData } from "./TextureData";
import { TextureFormat } from "./TextureFormat";

/**
 * Creates a new AudioStream.
 *
 * @param fileName The filename of the audio file to load.
 * @param bufferSize The size of the stream's audio buffer, in samples.
 * @link [lovr.data.newAudioStream](https://lovr.org/docs/lovr.data.newAudioStream)
 */
export function newAudioStream(fileName: string, bufferSize?: number): AudioStream;

/**
 * Creates a new AudioStream.
 *
 * @param blob The Blob containing audio data to decode.
 * @param bufferSize The size of the stream's audio buffer, in samples.
 * @link [lovr.data.newAudioStream](https://lovr.org/docs/lovr.data.newAudioStream)
 */
export function newAudioStream(blob: Blob, bufferSize?: number): AudioStream;

/**
 * Creates a new Blob.
 *
 * @param size The amount of data to allocate for the Blob, in bytes. All of the bytes will be filled with zeroes.
 * @param name A name for the Blob (used in error messages)
 * @link [lovr.data.newBlob](https://lovr.org/docs/lovr.data.newBlob)
 */
export function newBlob(size: number, name?: string): Blob;

/**
 * Creates a new Blob.
 *
 * @param contents A string to use for the Blob's contents.
 * @param name A name for the Blob (used in error messages)
 * @link [lovr.data.newBlob](https://lovr.org/docs/lovr.data.newBlob)
 */
export function newBlob(contents: string, name?: string): Blob;

/**
 * Creates a new Blob.
 *
 * @param source A Blob to copy the contents from.
 * @param name A name for the Blob (used in error messages)
 * @link [lovr.data.newBlob](https://lovr.org/docs/lovr.data.newBlob)
 */
export function newBlob(source: Blob, name?: string): Blob;

/**
 * Creates a new 3D model.
 *
 * @param fileName The filename of the model to load.
 * @link [lovr.data.newModelData](https://lovr.org/docs/lovr.data.newModelData)
 */
export function newModelData(fileName: string): ModelData;

/**
 * Creates a new 3D model.
 *
 * @param blob The Blob containing data for a model to decode.
 */
export function newModelData(blob: Blob): ModelData;

/**
 * Create a Rasterizer for the default font included with LÖVR (Varela Round).
 *
 * @param size The resolution to render the fonts at, in pixels. Higher resolutions use more memory and processing power but may provide better quality results for some fonts/situations.
 * @link [lovr.data.newRasterizer](https://lovr.org/docs/lovr.data.newRasterizer)
 */
export function newRasterizer(size?: number): Rasterizer;

/**
 * Creates a new Rasterizer from a TTF file.
 *
 * @param fileName The filename of the font file to load.
 * @param size The resolution to render the fonts at, in pixels. Higher resolutions use more memory and processing power but may provide better quality results for some fonts/situations.
 * @link [lovr.data.newRasterizer](https://lovr.org/docs/lovr.data.newRasterizer)
 */
export function newRasterizer(fileName: string, size?: number): Rasterizer;

/**
 * Creates a new Rasterizer from a Blob.
 *
 * @param blob The Blob containing font data.
 * @param size The resolution to render the fonts at, in pixels. Higher resolutions use more memory and processing power but may provide better quality results for some fonts/situations.
 * @link [lovr.data.newRasterizer](https://lovr.org/docs/lovr.data.newRasterizer)
 */
export function newRasterizer(blob: Blob, size?: number): Rasterizer;

/**
 * Creates a new SoundData.
 *
 * @param fileName The filename of the sound to decode.
 * @link [lovr.data.newSoundData](https://lovr.org/docs/lovr.data.newSoundData)
 */
export function newSoundData(fileName: string): SoundData;

/**
 * Creates a new SoundData.
 *
 * @param samples The total number of samples for each channel.
 * @param sampleRate The number of samples per second.
 * @param bitDepth The number of bits stored for each sample.
 * @param channels The number of channels in the sound (1 for mono, 2 for stereo).
 * @link [lovr.data.newSoundData](https://lovr.org/docs/lovr.data.newSoundData)
 */
export function newSoundData(samples: number, sampleRate?: number, bitDepth?: number, channels?: number): SoundData;

/**
 * Creates a new SoundData.
 *
 * @link [lovr.data.newSoundData](https://lovr.org/docs/lovr.data.newSoundData)
 */
export function newSoundData(): SoundData;

/**
 * Creates a new SoundData.
 *
 * @param blob The Blob containing compressed sound data to decode.
 * @link [lovr.data.newSoundData](https://lovr.org/docs/lovr.data.newSoundData)
 */
export function newSoundData(blob: Blob): SoundData;

/**
 * Load image data from a file.
 *
 * @param fileName The filename of the image to load.
 * @param flip Whether to vertically flip the image on load. This should be true for normal textures, and false for textures that are going to be used in a cubemap.
 * @link [lovr.data.newTextureData](https://lovr.org/docs/lovr.data.newTextureData)
 */
export function newTextureData(fileName: string, flip?: boolean): TextureData;

/**
 * Create an empty TextureData, initializing all pixel values to 0 (transparent black).
 *
 * @param width The width of the texture.
 * @param height The height of the texture.
 * @param format The format of the texture's pixels.
 * @link [lovr.data.newTextureData](https://lovr.org/docs/lovr.data.newTextureData)
 */
export function newTextureData(width: number, height: number, format?: TextureFormat): TextureData;

/**
 * Decode image data from a Blob.
 *
 * @param blob The Blob containing image data to decode.
 * @param flip Whether to vertically flip the image on load. This should be true for normal textures, and false for textures that are going to be used in a cubemap.
 * @link [lovr.data.newTextureData](https://lovr.org/docs/lovr.data.newTextureData)
 */
export function newTextureData(blob: Blob, flip?: boolean): TextureData;
