import { Blob } from "./Blob";

/**
 * Appends content to the end of a file.
 *
 * @param fileName The file to append to.
 * @param content A string to write to the end of the file.
 * @link [lovr.filesystem.append](https://lovr.org/docs/lovr.filesystem.append)
 */
export function append(fileName: string, content: string): number;

/**
 * Creates a directory in the save directory;
 *
 * @param path The directory to create, recursively.
 * @returns Whether the directory was created.
 * @link [lovr.filesystem.append](https://lovr.org/docs/lovr.filesystem.createDirectory)
 */
export function createDirectory(path: string): boolean;

/**
 * Returns the application data directory.
 *
 * @link [lovr.filesystem.getAppdataDirectory](https://lovr.org/docs/lovr.filesystem.getAppdataDirectory)
 */
export function getAppdataDirectory(): string;

/**
 * Returns the platform-specific application ID, or nil if the current platform doesn't have one.
 *
 * @link [lovr.filesystem.getApplicationId](https://lovr.org/docs/lovr.filesystem.getApplicationId)
 */
export function getApplicationId(): string;

/**
 * Returns an unsorted table containing all files and folders in a single directory.
 *
 * @param path The directory.
 * @link [lovr.filesystem.getDirectoryItems](https://lovr.org/docs/lovr.filesystem.getDirectoryItems)
 */
export function getDirectoryItems(path: string): string[];

/**
 * Returns the absolute path of the LÖVR executable.
 *
 * @link [lovr.filesystem.getExecutablePath](https://lovr.org/docs/lovr.filesystem.getExecutablePath)
 */
export function getExecutablePath(): string;

/**
 * Returns the identity of the game, which is used as the name of the save directory.
 *
 * @link [lovr.filesystem.getIdentity](https://lovr.org/docs/lovr.filesystem.getIdentity)
 */
export function getIdentity(): string;

/**
 * Returns when a file was last modified, since some arbitrary time in the past.
 *
 * @param path The file to check.
 * @link [lovr.filesystem.getLastModified](https://lovr.org/docs/lovr.filesystem.getLastModified)
 */
export function getLastModified(path: string): number;

/**
 * Get the absolute path of the mounted archive containing a path in the virtual filesystem.
 *
 * @link [lovr.filesystem.getRealDirectory](https://lovr.org/docs/lovr.filesystem.getRealDirectory)
 */
export function getRealDirectory(): string;

/**
 * Returns the require path.
 *
 * @tupleReturn
 * @link [lovr.filesystem.getRequirePath](https://lovr.org/docs/lovr.filesystem.getRequirePath)
 */
export function getRequirePath(): [string, string];

/**
 * Returns the absolute path to the save directory.
 *
 * @link [lovr.filesystem.getSaveDirectory](https://lovr.org/docs/lovr.filesystem.getSaveDirectory)
 */
export function getSaveDirectory(): string;

/**
 * Returns the size of a file, in bytes.
 *
 * @param file The file.
 * @link [lovr.filesystem.getSize](https://lovr.org/docs/lovr.filesystem.getSize)
 */
export function getSize(file: string): number;

/**
 * Get the absolute path of the project's source directory or archive.
 *
 * @link [lovr.filesystem.getSource](https://lovr.org/docs/lovr.filesystem.getSource)
 */
export function getSource(): string | undefined;

/**
 * Returns the absolute path of the user's home directory.
 *
 * @link [lovr.filesystem.getUserDirectory](https://lovr.org/docs/lovr.filesystem.getUserDirectory)
 */
export function getUserDirectory(): string;

/**
 * Returns the absolute path of the working directory.
 *
 * @link [lovr.filesystem.getWorkingDirectory](https://lovr.org/docs/lovr.filesystem.getWorkingDirectory)
 */
export function getWorkingDirectory(): string;

/**
 * Check if a path exists and is a directory.
 *
 * @param path The path to check.
 * @link [lovr.filesystem.isDirectory](https://lovr.org/docs/lovr.filesystem.isDirectory)
 */
export function isDirectory(path: string): boolean;

/**
 * Check if a path exists and is a file.
 *
 * @param path The path to check.
 * @link [lovr.filesystem.isFile](https://lovr.org/docs/lovr.filesystem.isFile)
 */
export function isFile(path: string): boolean;

/**
 * Returns whether the current project source is fused to the executable.
 *
 * @link [lovr.filesystem.isFused](https://lovr.org/docs/lovr.filesystem.isFused)
 */
export function isFused(): boolean;

/**
 * Load a file containing Lua code, returning a Lua chunk that can be run.
 *
 * @param fileName The file to load.
 * @link [lovr.filesystem.load](https://lovr.org/docs/lovr.filesystem.load)
 */
export function load(fileName: string): (this: void) => any;

/**
 * Mounts a directory or .zip archive, adding it to the virtual filesystem.
 *
 * @param path The path to mount.
 * @param mountpoint The path in the virtual filesystem to mount to.
 * @param append Whether the archive will be added to the end or the beginning of the search path.
 * @param root A subdirectory inside the archive to use as the root. If nil, the actual root of the archive is used.
 * @returns Whether the archive was successfully mounted.
 * @link [lovr.filesystem.mount](https://lovr.org/docs/lovr.filesystem.mount)
 */
export function mount(path: string, mountpoint?: string, append?: boolean, root?: string | undefined): boolean;

/**
 * Creates a new Blob that contains the contents of a file.
 *
 * @param fileName The file to load.
 * @link [lovr.filesystem.newBlob](https://lovr.org/docs/lovr.filesystem.newBlob)
 */
export function newBlob(fileName: string): Blob;

/**
 * Read the contents of a file.
 *
 * @param fileName The name of the file to read.
 * @param bytes The number of bytes to read (if -1, all bytes will be read).
 * @tupleReturn
 * @link [lovr.filesystem.read](https://lovr.org/docs/lovr.filesystem.read)
 */
export function read(fileName: string, bytes?: number): [string, number];

/**
 * Remove a file or directory in the save directory.
 *
 * @param path The file or directory to remove.
 * @returns Whether the path was removed.
 * @link [lovr.filesystem.remove](https://lovr.org/docs/lovr.filesystem.remove)
 */
export function remove(path: string): boolean;

/**
 * Set the name of the save directory.
 *
 * @param identity The new name of the save directory.
 * @link [lovr.filesystem.setIdentity](https://lovr.org/docs/lovr.filesystem.setIdentity)
 */
export function setIdentity(identity: string): void;

/**
 * Sets the require path.
 *
 * @param path An optional semicolon separated list of search patterns.
 * @param cpath An optional semicolon separated list of search patterns for C libraries.
 * @link [lovr.filesystem.setRequirePath](https://lovr.org/docs/lovr.filesystem.setRequirePath)
 */
export function setRequirePath(path?: string | undefined, cpath?: string | undefined): void;

/**
 * Sets the location of the project's source.
 *
 * @param identity The path containing the project's source.
 */
export function setSource(identity: string): void;

/**
 * Unmounts a directory or archive previously mounted with lovr.filesystem.mount.
 *
 * @param path The path to unmount.
 * @returns Whether the archive was unmounted.
 * @link [lovr.filesystem.unmount](https://lovr.org/docs/lovr.filesystem.unmount)
 */
export function unmount(path: string): boolean;

/**
 * Write to a file.
 *
 * @param fileName The file to write to.
 * @param content A string to write to the file.
 * @returns The number of bytes written.
 * @link [lovr.filesystem.write](https://lovr.org/docs/lovr.filesystem.write)
 */
export function write(fileName: number, content: string): number;
