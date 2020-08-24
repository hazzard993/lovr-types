import { TextureType } from "./TextureType";

export interface Texture {
  getHeight;
  getDepth;
  getWidth;
  getFilter;
  getDimensions;
  getMipmapCount;
  getFormat;
  getWrap;
  setWrap;

  /**
   * Replaces pixels in the Texture, sourcing from a TextureData object.
   *
   * @param textureData The TextureData containing the pixels to use. Currently, the TextureData needs to have the same dimensions as the source Texture.
   * @param x The x offset to replace at.
   * @param y The y offset to replace at.
   * @param slice The slice to replace. Not applicable for 2D textures.
   * @param mipmap The mipmap to replace.
   */
  replacePixels(textureData, x?, y?, slice?, mipmap?): void;
  getType(): TextureType;
}
