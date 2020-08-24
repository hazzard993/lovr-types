import { LuaIterator } from "./LuaIterator";

/**
 * Clears the event queue, removing any unprocessed events.
 *
 * @link [lovr.event.clear](https://lovr.org/docs/lovr.event.clear)
 */
export function clear(): void;

/**
 * This function returns a Lua iterator for all of the unprocessed items in the event queue.
 *
 * @link [lovr.event.poll](https://lovr.org/docs/lovr.event.poll)
 */
export function poll(): LuaIterator<[string, ...any[]]>;

/**
 * Fills the event queue with unprocessed events from the operating system.
 *
 * @link [lovr.event.pump](https://lovr.org/docs/lovr.event.pump)
 */
export function pump(): void;

/**
 * Pushes an event onto the event queue.
 *
 * @param name The name of the event.
 * @param args The arguments for the event. Currently, up to 4 are supported.
 * @link [lovr.event.push](https://lovr.org/docs/lovr.event.push)
 */
export function push(name: string, ...args: any[]): void;

/**
 * Pushes an event to quit or restart the application.
 *
 * @param code The exit code of the program.
 * @link [lovr.event.quit](https://lovr.org/docs/lovr.event.quit)
 */
export function quit(code?: number): void;
