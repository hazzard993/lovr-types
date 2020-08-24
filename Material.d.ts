export interface Material {
  getScalar;
  setScalar;
  getTexture;
  setTexture;
  getColor;
  setColor;
  getTransform;

  /**
   * Sets the transformation applied to texture coordinates of the Material.
   *
   * @param ox The texture coordinate x offset.
   * @param oy The texture coordinate y offset.
   * @param sx The texture coordinate x scale.
   * @param sy The texture coordinate y scale.
   * @param angle The texture coordinate rotation, in radians.
   * @link [Material:setTransform](https://lovr.org/docs/Material:setTransform)
   */
  setTransform(ox: number, oy: number, sx: number, sy: number, angle: number): void;
}
