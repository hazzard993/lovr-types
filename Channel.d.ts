/**
 * A Channel is an object used to communicate between Thread objects.
 *
 * @link [Channel](https://lovr.org/docs/Channel)
 */
export interface Channel {
  /**
   * Removes all pending messages from the Channel.
   *
   * @link [Channel:clear](https://lovr.org/docs/Channel:clear)
   */
  clear(): void;

  /**
   * Returns whether or not the message with the given ID has been read.
   *
   * @param id The ID of the message to check.
   * @link [Channel:hasRead](https://lovr.org/docs/Channel:hasRead)
   */
  hasRead(id: number): boolean;

  /**
   * Returns a message from the Channel without popping it from the queue.
   *
   * @link [Channel:peek](https://lovr.org/docs/Channel:peek)
   */
  peek(): unknown | undefined;

  /**
   * Pops a message from the Channel.
   *
   * @param wait How long to wait for a message to be popped, in seconds. true can be used to wait forever and false can be used to avoid waiting.
   * @link [Channel:pop](https://lovr.org/docs/Channel:pop)
   */
  pop(wait?: number | boolean): unknown | undefined;

  /**
   * Pushes a message onto the Channel.
   *
   * @param message The message to push.
   * @param wait How long to wait for the message to be popped, in seconds. true can be used to wait forever and false can be used to avoid waiting.
   * @returns The ID of the pushed message and whether the message was read by another thread before the wait timeout.
   * @tupleReturn
   * @link [Channel:push](https://lovr.org/docs/Channel:push)
   */
  push(message: any, wait?: number | boolean): [number, boolean];
}
