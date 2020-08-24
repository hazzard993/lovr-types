import { Texture } from "./Texture";
import { TextureData } from "./TextureData";

/**
 * A Canvas is also known as a framebuffer or render-to-texture.
 *
 * @link [Canvas](https://lovr.org/docs/Canvas)
 */
export interface Canvas {
  /**
   * Returns the height of the Canvas, its Textures, and its depth buffer.
   *
   * @link [Canvas:getHeight](https://lovr.org/docs/Canvas:getHeight)
   */
  getHeight(): number;

  /**
   * Returns the depth buffer used by the Canvas as a Texture.
   *
   * @link [Canvas:getDepthTexture](https://lovr.org/docs/Canvas:getDepthTexture)
   */
  getDepthTexture(): Texture;

  /**
   * Returns the set of Textures currently attached to the Canvas.
   *
   * @tupleReturn
   * @link [Canvas:getTexture](https://lovr.org/docs/Canvas:getTexture)
   */
  getTexture(): Texture[];

  /**
   * Attaches one or more Textures to the Canvas.
   *
   * @param textures One or more Textures to attach to the Canvas.
   * @link [Canvas:setTexture](https://lovr.org/docs/Canvas:setTexture)
   */
  setTexture(...textures: Texture[]): void;

  /**
   * Returns the width of the Canvas, its Textures, and its depth buffer.
   *
   * @link [Canvas:getWidth](https://lovr.org/docs/Canvas:getWidth)
   */
  getWidth(): number;

  /**
   * Returns the dimensions of the Canvas, its Textures, and its depth buffer.
   *
   * @tupleReturn
   * @link [Canvas:getDimensions](https://lovr.org/docs/Canvas:getDimensions)
   */
  getDimensions(): [number, number];

  /**
   * Returns a new TextureData containing the contents of a Texture attached to the Canvas.
   *
   * @param index The index of the Texture to read from.
   * @link [Canvas:newTextureData](https://lovr.org/docs/Canvas:newTextureData)
   */
  newTextureData(index?: number): TextureData;

  /**
   * Renders to the Canvas using a function.
   *
   * @param callback The function to use to render to the Canvas.
   * @param args Additional arguments to pass to the callback.
   * @link [Canvas:renderTo](https://lovr.org/docs/Canvas:renderTo)
   */
  renderTo<A extends any[]>(callback: (this: void, ...args: A) => void, ...args: A): void;

  /**
   * Returns the number of multisample antialiasing samples to use when rendering to the Canvas.
   *
   * @link [Canvas:getMSAA](https://lovr.org/docs/Canvas:getMSAA)
   */
  getMSAA(): number;

  /**
   * Returns whether the Canvas was created with the stereo flag.
   *
   * @link [Canvas:isStereo](https://lovr.org/docs/Canvas:isStereo)
   */
  isStereo(): boolean;
}
