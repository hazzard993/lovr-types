/**
 * Returns the average delta over the last second.
 *
 * @link [lovr.timer.getAverageDelta](https://lovr.org/docs/lovr.timer.getAverageDelta)
 */
export function getAverageDelta(): number;

/**
 * Returns the time between the last two frames.
 *
 * @link [lovr.timer.getDelta](https://lovr.org/docs/lovr.timer.getDelta)
 */
export function getDelta(): number;

/**
 * Returns the current frames per second, averaged over the last 90 frames.
 *
 * @link [lovr.timer.getFPS](https://lovr.org/docs/lovr.timer.getFPS)
 */
export function getFPS(): number;

/**
 * Returns the time since some time in the past.
 *
 * @link [lovr.timer.getTime](https://lovr.org/docs/lovr.timer.getTime)
 */
export function getTime(): number;

/**
 * Sleeps the application for a specified number of seconds.
 *
 * @param duration The number of seconds to sleep for.
 * @link [lovr.timer.sleep](https://lovr.org/docs/lovr.timer.sleep)
 */
export function sleep(duration: number): void;

/**
 * Steps the timer, returning the new delta time.
 *
 * @returns The amount of time since the last call to this function, in seconds.
 * @link [lovr.timer.step](https://lovr.org/docs/lovr.timer.step)
 */
export function step(): number;
