/** @noSelfInFile */
import { Config } from "./Config";

export function conf(t: Config): void;
export function draw(): void;

/**
 * The "lovr.errhand" callback is run whenever an error occurs.
 *
 * @param message The error message.
 * @param traceback A traceback string, or nil.

 * @returns The error handler function. It should return nil to continue running, "restart" to restart the app, or a number representing an exit status.
 */
export function errhand(message: string, traceback: string | undefined): () => undefined | "restart" | number;

export function focus(focused: boolean): void;

/**
 * This callback is called once when the app starts.
 *
 * It should be used to perform initial setup work, like loading resources and initializing classes and variables.
 *
 * @param args The command line arguments provided to the program.
 * @link [lovr.load](https://lovr.org/docs/lovr.load)
 */
export function load(args: string[]): void;

export function mirror(): void;

export function quit(): boolean;

export function run(): () => undefined | "restart" | number;

export function threaderror(thread, message): void;

export function update(dt: number): void;

/**
 * Get the current major, minor, and patch version of LÖVR.
 *
 * @tupleReturn
 * @link [lovr.getVersion](https://lovr.org/docs/lovr.getVersion)
 */
export function getVersion(): [number, number, number];

/**
 * Returns the current operating system.
 *
 * @link [lovr.getOS](https://lovr.org/docs/lovr.getOS)
 */
export function getOS(): string;
