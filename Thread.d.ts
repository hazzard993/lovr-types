/**
 * A Thread is an object that runs a chunk of Lua code in the background.
 *
 * @link [Thread](https://lovr.org/docs/Thread)
 */
export interface Thread {
  /**
   * Returns the message for the error that occurred on the Thread, or nil if no error has occurred.
   *
   * @link [Thread:getError](https://lovr.org/docs/Thread:getError)
   */
  getError(): string | undefined;

  /**
   * Starts the Thread.
   *
   * @link [Thread:start](https://lovr.org/docs/Thread:start)
   */
  start(): void;

  /**
   * Returns whether or not the Thread is currently running.
   *
   * @link [Thread:isRunning](https://lovr.org/docs/Thread:isRunning)
   */
  isRunning(): boolean;

  /**
   * Waits for the Thread to complete, then returns.
   *
   * @link [Thread:wait](https://lovr.org/docs/Thread:wait)
   */
  wait(): void;
}
