import { TextureFormat } from "./TextureFormat";

export interface TextureData {
  /**
   * Returns the height of the TextureData, in pixels.
   *
   * @link [TextureData:getHeight](https://lovr.org/docs/TextureData:getHeight)
   */
  getHeight(): number;

  /**
   * Encodes the TextureData to png and writes it to the specified file.
   *
   * @param fileName The file to write the png data to.
   * @returns Whether or not the file was successfully written to.
   * @link [TextureData:encode](https://lovr.org/docs/TextureData:encode)
   */
  encode(fileName: string): boolean;

  /**
   * Returns the width of the TextureData, in pixels.
   *
   * @link [TextureData:getWidth](https://lovr.org/docs/TextureData:getWidth)
   */
  getWidth(): number;

  /**
   * Returns the dimensions of the TextureData, in pixels.
   *
   * @tupleReturn
   * @link [TextureData:getDimensions](https://lovr.org/docs/TextureData:getDimensions)
   */
  getDimensions(): [number, number];

  /**
   * Returns the value of a pixel of the TextureData.
   *
   * @param x The x coordinate of the pixel to set (0-indexed).
   * @param y The y coordinate of the pixel to set (0-indexed).
   * @tupleReturn
   * @link [TextureData:getPixel](https://lovr.org/docs/TextureData:getPixel)
   */
  getPixel(x: number, y: number): [number, number, number, number];

  /**
   * Sets the value of a pixel of the TextureData.
   *
   * @param x The x coordinate of the pixel to set (0-indexed).
   * @param y The y coordinate of the pixel to set (0-indexed).
   * @param r The red component of the pixel, from 0.0 to 1.0.
   * @param g The green component of the pixel, from 0.0 to 1.0.
   * @param b The blue component of the pixel, from 0.0 to 1.0.
   * @param a The alpha component of the pixel, from 0.0 to 1.0.
   * @link [TextureData:setPixel](https://lovr.org/docs/TextureData:setPixel)
   */
  setPixel(x: number, y: number, r: number, g: number, b: number, a?: number): void;

  /**
   * Returns the format of the TextureData.
   *
   * @link [TextureData:getFormat](https://lovr.org/docs/TextureData:getFormat)
   */
  getFormat(): TextureFormat;

  /**
   * Copies a rectangle of pixels from one TextureData to this one.
   *
   * @param source The TextureData to copy pixels from.
   * @param x The x coordinate to paste to (0-indexed).
   * @param y The y coordinate to paste to (0-indexed).
   * @param fromX The x coordinate in the source to paste from (0-indexed).
   * @param fromY The y coordinate in the source to paste from (0-indexed).
   * @param width The width of the region to copy.
   * @param height The height of the region to copy.
   */
  paste(source: TextureData, x?: number, y?: number, fromX?: number, fromY?: number, width?: number, height?: number): void;
}
