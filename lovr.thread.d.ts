import { Channel } from "./Channel";
import { Blob } from "./Blob";
import { Thread } from "./Thread";

/**
 * Returns a named Channel for communicating between threads.
 *
 * @param name The name of the Channel to get.
 * @link [lovr.thread.getChannel](https://lovr.org/docs/lovr.thread.getChannel)
 */
export function getChannel(name: string): Channel;

/**
 * Creates a new Thread from Lua code.
 *
 * @param code The code to run in the Thread.
 * @link [lovr.thread.newThread](https://lovr.org/docs/lovr.thread.newThread)
 */
export function newThread(code: string): Thread;

/**
 * Creates a new Thread from Lua code.
 *
 * @param fileName A file containing code to run in the Thread.
 * @link [lovr.thread.newThread](https://lovr.org/docs/lovr.thread.newThread)
 */
export function newThread(fileName: string): Thread;

/**
 * Creates a new Thread from Lua code.
 *
 * @param blob The code to run in the Thread.
 * @link [lovr.thread.newThread](https://lovr.org/docs/lovr.thread.newThread)
 */
export function newThread(blob: Blob): Thread;
