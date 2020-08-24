import { Mat4 } from "./Mat4";
import { Quat } from "./Quat";
import { RandomGenerator } from "./RandomGenerator";
import { Vec3 } from "./Vec3";
import { Vec2 } from "./Vec2";
import { Vec4 } from "./Vec4";
import { Curve } from "./Curve";

export function getRandomSeed(): number;
export function setRandomSeed(seed: number): void;
export function newRandomGenerator(): RandomGenerator;
export function newRandomGenerator(seed: number): RandomGenerator;
export function newRandomGenerator(low: number, high: number): RandomGenerator;
export function noise(x: number): number;
export function noise(x: number, y: number): number;
export function noise(x: number, y: number, z: number): number;
export function noise(x: number, y: number, z: number, w: number): number;
export function random(): number;
export function random(high: number): number;
export function random(low: number, high: number): number;
export function randomNormal(sigma: number, mu: number): number;
export function drain(): void;

interface Mat4Constructor {
  (): Mat4;
  (n: Mat4): Mat4;
  (position?: Vec3, scale?: Vec3, rotation?: Quat): Mat4;
  (position?: Vec3, rotation?: Quat): Mat4;
  (...numbers: number[]): Mat4;
  (d: number): Mat4;
}

export const mat4: Mat4Constructor;
export const newMat4: Mat4Constructor;

interface QuadConstructor {
  (angle?: number, ax?: number, ay?: number, az?: number, raw?: number): Quat;
  (angle?: number, axis?: Vec3): Quat;
  (r: Quat): Quat;
  (v: Vec3): Quat;
  (v: Vec3, u: Vec3): Quat;
  (m: Mat4): Quat;
  (): Quat;
}

export const newQuat: QuadConstructor;

interface Vec2Constructor {
  (x?: number, y?: number): Vec2;
  (u: Vec2): Vec2;
}

export const newVec2: Vec2Constructor;

interface Vec3Constructor {
  (x?: number, y?: number, z?: number): Vec3;
  (u: Vec3): Vec3;
}

export const newVec3: Vec3Constructor;

interface Vec4Constructor {
  (x?: number, y?: number, z?: number, w?: number): Vec4;
  (u: Vec4): Vec4;
}

export const newVec4: Vec4Constructor;
export const quat: QuadConstructor;
export const vec2: Vec2Constructor;
export const vec3: Vec3Constructor;
export const vec4: Vec4Constructor;

/**
 * Converts a color from gamma space to linear space.
 *
 * @param gr The red component of the gamma-space color.
 * @param gg The green component of the gamma-space color.
 * @param gb The blue component of the gamma-space color.
 * @tupleReturn
 * @link [lovr.math.gammaToLinear](https://lovr.org/docs/lovr.math.gammaToLinear)
 */
export function gammaToLinear(gr: number, gg: number, gb: number): [number, number, number];

/**
 * Converts a color from gamma space to linear space.
 *
 * @param color A table containing the components of a gamma-space color.
 * @tupleReturn
 * @link [lovr.math.gammaToLinear](https://lovr.org/docs/lovr.math.gammaToLinear)
 */
export function gammaToLinear(color: [number, number, number]): [number, number, number];

/**
 * Convert a single color channel.
 *
 * @param x The color channel to convert.
 * @returns The converted color channel.
 * @link [lovr.math.gammaToLinear](https://lovr.org/docs/lovr.math.gammaToLinear)
 */
export function gammaToLinear(x: number): number;

/**
 * Converts a color from linear space to gamma space.
 *
 * @param lr The red component of the linear-space color.
 * @param lg The green component of the linear-space color.
 * @param lb The blue component of the linear-space color.
 * @link [lovr.math.linearToGamma](https://lovr.org/docs/lovr.math.linearToGamma)
 */
export function linearToGamma(lr: number, lg: number, lb: number): [number, number, number];

/**
 * Creates a new Curve from a list of control points.
 *
 * @param xyz x, y and z point coordinates.
 * @link [lovr.math.newCurve](https://lovr.org/docs/lovr.math.newCurve)
 */
export function newCurve(...xyz: number[]): Curve;
export function newCurve(xyz: number[]): Curve;

/**
 * Create an empty Curve, reserving space ahead of time for a certain number of control points.
 *
 * @param n The number of points to reserve for the Curve.
 * @link [lovr.math.newCurve](https://lovr.org/docs/lovr.math.newCurve)
 */
export function newCurve(n: number): Curve;
