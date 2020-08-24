import { SoundData } from "./SoundData";

/**
 * An AudioStream is an object that reads and decodes compressed sound data.
 *
 * @link [AudioStream](https://lovr.org/docs/AudioStream)
 */
export interface AudioStream {
  /**
   * Returns the number of samples per second in the stream's sound data.
   *
   * This is usually a high number like 44100.
   *
   * @link [AudioStream:getSampleRate](https://lovr.org/docs/AudioStream:getSampleRate)
   */
  getSampleRate(): number;

  /**
   * Returns a new SoundData containing the next chunk of audio in the AudioStream.
   *
   * @link [AudioStream:decode](https://lovr.org/docs/AudioStream:decode)
   */
  decode(): SoundData;

  /**
   * Returns the number of channels present in the stream's sound data.
   *
   * @link [AudioStream:getChannelCount](https://lovr.org/docs/AudioStream:getChannelCount)
   */
  getChannelCount(): number;

  /**
   * Returns the number of bits per sample in the stream's sound data.
   *
   * @link [AudioStream:getBitDepth](https://lovr.org/docs/AudioStream:getBitDepth)
   */
  getBitDepth(): number;

  /**
   * Returns the duration of the sound data in seconds.
   *
   * @link [AudioStream:getDuration](https://lovr.org/docs/AudioStream:getDuration)
   */
  getDuration(): number;
}
