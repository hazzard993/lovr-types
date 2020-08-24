/**
 * A Blob is an object that holds binary data.
 *
 * @link [Blob](https://lovr.org/docs/Blob)
 */
export interface Blob {
  /**
   * Returns the filename the Blob was loaded from, or the custom name given to it when it was created.
   *
   * @link [Blob:getName](https://lovr.org/docs/Blob:getName)
   */
  getName(): string;

  /**
   * Returns the size of the Blob's contents, in bytes.
   *
   * @link [Blob:getSize](https://lovr.org/docs/Blob:getSize)
   */
  getSize(): number;

  /**
   * Returns a raw pointer to the Blob's data.
   *
   * @link [Blob:getPointer](https://lovr.org/docs/Blob:getPointer)
   */
  getPointer(): unknown;

  /**
   * Returns a binary string containing the Blob's data.
   *
   * @link [Blob:getString](https://lovr.org/docs/Blob:getString)
   */
  getString(): string;
}
