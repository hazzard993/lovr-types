/** @noSelfInFile */
import { ArcMode } from "./ArcMode";
import { BlendAlphaMode } from "./BlendAlphaMode";
import { BlendMode } from "./BlendMode";
import { Blob } from "./Blob";
import { BlockType } from "./BlockType";
import { BufferUsage } from "./BufferUsage";
import { Canvas } from "./Canvas";
import { CompareMode } from "./CompareMode";
import { DefaultShader } from "./DefaultShader";
import { DrawMode } from "./DrawMode";
import { DrawStyle } from "./DrawStyle";
import { FilterMode } from "./FilterMode";
import { Font } from "./Font";
import { HorizontalAlign } from "./HorizontalAlign";
import { Mat4 } from "./Mat4";
import { Material } from "./Material";
import { Mesh } from "./Mesh";
import { MeshUsage } from "./MeshUsage";
import { Model } from "./Model";
import { ModelData } from "./ModelData";
import { Rasterizer } from "./Rasterizer";
import { Shader } from "./Shader";
import { ShaderBlock } from "./ShaderBlock";
import { StencilAction } from "./StencilAction";
import { Texture } from "./Texture";
import { TextureData } from "./TextureData";
import { TextureFormat } from "./TextureFormat";
import { TextureType } from "./TextureType";
import { VerticalAlign } from "./VerticalAlign";
import { Winding } from "./Winding";

/**
 * Draws an arc.
 *
 * @param mode Whether the arc is filled or outlined.
 * @param x The x coordinate of the center of the arc.
 * @param y The y coordinate of the center of the arc.
 * @param z The z coordinate of the center of the arc.
 * @param radius The radius of the arc, in meters.
 * @param angle The rotation of the arc around its rotation axis, in radians.
 * @param ax The x coordinate of the arc's axis of rotation.
 * @param ay The y coordinate of the arc's axis of rotation.
 * @param az The z coordinate of the arc's axis of rotation.
 * @param start The starting angle of the arc, in radians.
 * @param end The ending angle of the arc, in radians.
 * @param segments The number of segments to use for the full circle. A smaller number of segments will be used, depending on how long the arc is.
 * @link [lovr.graphics.arc](https://lovr.org/docs/lovr.graphics.arc)
 */
export function arc(mode: DrawStyle, x?: number, y?: number, z?: number, radius?: number, angle?: number, ax?: number, ay?: number, az?: number, start?: number, end?: number, segments?: number): void;

/**
 * Draws an arc.
 *
 * @param material The Material to apply to the arc.
 * @param x The x coordinate of the center of the arc.
 * @param y The y coordinate of the center of the arc.
 * @param z The z coordinate of the center of the arc.
 * @param radius The radius of the arc, in meters.
 * @param angle The rotation of the arc around its rotation axis, in radians.
 * @param ax The x coordinate of the arc's axis of rotation.
 * @param ay The y coordinate of the arc's axis of rotation.
 * @param az The z coordinate of the arc's axis of rotation.
 * @param start The starting angle of the arc, in radians.
 * @param end The ending angle of the arc, in radians.
 * @param segments The number of segments to use for the full circle. A smaller number of segments will be used, depending on how long the arc is.
 * @link [lovr.graphics.arc](https://lovr.org/docs/lovr.graphics.arc)
 */
export function arc(material: Material, x?: number, y?: number, z?: number, radius?: number, angle?: number, ax?: number, ay?: number, az?: number, start?: number, end?: number, segments?: number): void;

/**
 * Draws an arc.
 *
 * @param mode Whether the arc is filled or outlined.
 * @param transform The arc's transform.
 * @param start The starting angle of the arc, in radians.
 * @param end The ending angle of the arc, in radians.
 * @param segments The number of segments to use for the full circle. A smaller number of segments will be used, depending on how long the arc is.
 * @link [lovr.graphics.arc](https://lovr.org/docs/lovr.graphics.arc)
 */
export function arc(mode: DrawStyle, transform: Mat4, start?: number, end?: number, segments?: number): void;

/**
 * Draws an arc.
 *
 * @param material The Material to apply to the arc.
 * @param transform The arc's transform.
 * @param start The starting angle of the arc, in radians.
 * @param end The ending angle of the arc, in radians.
 * @param segments The number of segments to use for the full circle. A smaller number of segments will be used, depending on how long the arc is.
 * @link [lovr.graphics.arc](https://lovr.org/docs/lovr.graphics.arc)
 */
export function arc(material: Material, transform: Mat4, start?: number, end?: number, segments?: number): void;

/**
 * Draws an arc.
 *
 * @param mode Whether the arc is filled or outlined.
 * @param arcmode How to draw the arc.
 * @param x The x coordinate of the center of the arc.
 * @param y The y coordinate of the center of the arc.
 * @param z The z coordinate of the center of the arc.
 * @param radius The radius of the arc, in meters.
 * @param angle The rotation of the arc around its rotation axis, in radians.
 * @param ax The x coordinate of the arc's axis of rotation.
 * @param ay The y coordinate of the arc's axis of rotation.
 * @param az The z coordinate of the arc's axis of rotation.
 * @param start The starting angle of the arc, in radians.
 * @param end The ending angle of the arc, in radians.
 * @param segments The number of segments to use for the full circle. A smaller number of segments will be used, depending on how long the arc is.
 * @link [lovr.graphics.arc](https://lovr.org/docs/lovr.graphics.arc)

 */
export function arc(mode: DrawStyle, arcmode?: ArcMode, x?: number, y?: number, z?: number, radius?: number, angle?: number, ax?: number, ay?: number, az?: number, start?: number, end?: number, segments?: number): void;

/**
 * Draws an arc.
 *
 * @param material The Material to apply to the arc.
 * @param arcmode How to draw the arc.
 * @param x The x coordinate of the center of the arc.
 * @param y The y coordinate of the center of the arc.
 * @param z The z coordinate of the center of the arc.
 * @param radius The radius of the arc, in meters.
 * @param angle The rotation of the arc around its rotation axis, in radians.
 * @param ax The x coordinate of the arc's axis of rotation.
 * @param ay The y coordinate of the arc's axis of rotation.
 * @param az The z coordinate of the arc's axis of rotation.
 * @param start The starting angle of the arc, in radians.
 * @param end The ending angle of the arc, in radians.
 * @param segments The number of segments to use for the full circle. A smaller number of segments will be used, depending on how long the arc is.
 * @link [lovr.graphics.arc](https://lovr.org/docs/lovr.graphics.arc)
 */
export function arc(material: DrawStyle, arcmode?: ArcMode, x?: number, y?: number, z?: number, radius?: number, angle?: number, ax?: number, ay?: number, az?: number, start?: number, end?: number, segments?: number): void;

/**
 * Draws an arc.
 *
 * @param mode Whether the arc is filled or outlined.
 * @param arcmode How to draw the arc.
 * @param transform The arc's transform.
 * @param start The starting angle of the arc, in radians.
 * @param end The ending angle of the arc, in radians.
 * @param segments The number of segments to use for the full circle. A smaller number of segments will be used, depending on how long the arc is.
 * @link [lovr.graphics.arc](https://lovr.org/docs/lovr.graphics.arc)
 */
export function arc(mode: DrawStyle, arcmode: ArcMode | undefined, transform: Mat4, start?: number, end?: number, segments?: number): void;

/**
 * Draws an arc.
 *
 * @param mode The Material to apply to the arc.
 * @param arcmode How to draw the arc.
 * @param transform The arc's transform.
 * @param start The starting angle of the arc, in radians.
 * @param end The ending angle of the arc, in radians.
 * @param segments The number of segments to use for the full circle. A smaller number of segments will be used, depending on how long the arc is.
 * @link [lovr.graphics.arc](https://lovr.org/docs/lovr.graphics.arc)
 */
export function arc(material: Material, arcmode: ArcMode | undefined, transform: Mat4, start?: number, end?: number, segments?: number): void;

/**
 * Draws a box.
 *
 * @param mode How to draw the box.
 * @param x The x coordinate of the center of the box.
 * @param y The y coordinate of the center of the box.
 * @param z The z coordinate of the center of the box.
 * @param width The width of the box, in meters.
 * @param height The height of the box, in meters.
 * @param depth The depth of the box, in meters.
 * @param angle The rotation of the box around its rotation axis, in radians.
 * @param ax The x coordinate of the axis of rotation.
 * @param ay The y coordinate of the axis of rotation.
 * @param az The z coordinate of the axis of rotation.
 */
export function box(mode: DrawStyle, x?: number, y?: number, z?: number, width?: number, height?: number, depth?: number, angle?: number, ax?: number, ay?: number, az?: number): void;

/**
 * Draws a box.
 *
 * @param material The Material to apply to the box.
 * @param x The x coordinate of the center of the box.
 * @param y The y coordinate of the center of the box.
 * @param z The z coordinate of the center of the box.
 * @param width The width of the box, in meters.
 * @param height The height of the box, in meters.
 * @param depth The depth of the box, in meters.
 * @param angle The rotation of the box around its rotation axis, in radians.
 * @param ax The x coordinate of the axis of rotation.
 * @param ay The y coordinate of the axis of rotation.
 * @param az The z coordinate of the axis of rotation.
 */
export function box(material: Material, x?: number, y?: number, z?: number, width?: number, height?: number, depth?: number, angle?: number, ax?: number, ay?: number, az?: number): void;

/**
 * Draws a box.
 *
 * @param mode How to draw the box.
 * @param transform The transform of the box.
 */
export function box(mode: DrawStyle, transform: Mat4): void;

/**
 * Draws a box.
 *
 * @param material The Material to apply to the box.
 * @param transform The transform of the box.
 */
export function box(material: Material, transform: Mat4): void;

/**
 * Draws a 2D circle.
 *
 * @param mode Whether the circle is filled or outlined.
 * @param x The x coordinate of the center of the circle.
 * @param y The y coordinate of the center of the circle.
 * @param z The z coordinate of the center of the circle.
 * @param radius The radius of the circle, in meters.
 * @param angle The rotation of the circle around its rotation axis, in radians.
 * @param ax The x coordinate of the circle's axis of rotation.
 * @param ay The y coordinate of the circle's axis of rotation.
 * @param az The z coordinate of the circle's axis of rotation.
 * @link [lovr.graphics.circle](https://lovr.org/docs/lovr.graphics.circle)
 */
export function circle(mode: DrawStyle, x?: number, y?: number, z?: number, radius?: number, angle?: number, ax?: number, ay?: number, az?: number): void;

/**
 * Draws a 2D circle.
 *
 * @param material The Material to apply to the circle.
 * @param x The x coordinate of the center of the circle.
 * @param y The y coordinate of the center of the circle.
 * @param z The z coordinate of the center of the circle.
 * @param radius The radius of the circle, in meters.
 * @param angle The rotation of the circle around its rotation axis, in radians.
 * @param ax The x coordinate of the circle's axis of rotation.
 * @param ay The y coordinate of the circle's axis of rotation.
 * @param az The z coordinate of the circle's axis of rotation.
 * @link [lovr.graphics.circle](https://lovr.org/docs/lovr.graphics.circle)
 */
export function circle(material: Material, x?: number, y?: number, z?: number, radius?: number, angle?: number, ax?: number, ay?: number, az?: number): void;

/**
 * Draws a 2D circle.
 *
 * @param mode Whether the circle is filled or outlined.
 * @param transform The circle's transform.
 * @link [lovr.graphics.circle](https://lovr.org/docs/lovr.graphics.circle)
 */
export function circle(mode: DrawStyle, transform: Mat4): void;

/**
 * Draws a 2D circle.
 *
 * @param material The Material to apply to the circle.
 * @param transform The circle's transform.
 * @link [lovr.graphics.circle](https://lovr.org/docs/lovr.graphics.circle)
 */
export function circle(material: Material, transform: Mat4): void;

/**
 * This function runs a compute shader on the GPU.
 *
 * @param shader The compute shader to run.
 * @param x The amount of times to run in the x direction.
 * @param y The amount of times to run in the y direction.
 * @param z The amount of times to run in the z direction.
 * @link [lovr.graphics.compute](https://lovr.org/docs/lovr.graphics.compute)
 */
export function compute(shader: Shader, x?: number, y?: number, z?: number): void;

/**
 * Draws a cube.
 *
 * @param mode How to draw the cube.
 * @param x The x coordinate of the center of the cube.
 * @param y The y coordinate of the center of the cube.
 * @param z The z coordinate of the center of the cube.
 * @param size The size of the cube, in meters.
 * @param angle The rotation of the cube around its rotation axis, in radians.
 * @param ax The x coordinate of the cube's axis of rotation.
 * @param ay The y coordinate of the cube's axis of rotation.
 * @param az The z coordinate of the cube's axis of rotation.
 * @link [lovr.graphics.cube](https://lovr.org/docs/lovr.graphics.cube)
 */
export function cube(mode: DrawStyle, x?: number, y?: number, z?: number, size?: number, angle?: number, ax?: number, ay?: number, az?: number): void;

/**
 * Draws a cube.
 *
 * @param material The Material to apply to the cube faces.
 * @param x The x coordinate of the center of the cube.
 * @param y The y coordinate of the center of the cube.
 * @param z The z coordinate of the center of the cube.
 * @param size The size of the cube, in meters.
 * @param angle The rotation of the cube around its rotation axis, in radians.
 * @param ax The x coordinate of the cube's axis of rotation.
 * @param ay The y coordinate of the cube's axis of rotation.
 * @param az The z coordinate of the cube's axis of rotation.
 * @link [lovr.graphics.cube](https://lovr.org/docs/lovr.graphics.cube)
 */
export function cube(material: Material, x?: number, y?: number, z?: number, size?: number, angle?: number, ax?: number, ay?: number, az?: number): void;

/**
 * Draws a cube.
 *
 * @param mode How to draw the cube.
 * @param transform The cube's transform.
 * @link [lovr.graphics.cube](https://lovr.org/docs/lovr.graphics.cube)
 */
export function cube(mode: DrawStyle, transform: Mat4): void;

/**
 * Draws a cube.
 *
 * @param material The Material to apply to the cube faces.
 * @param transform The cube's transform.
 * @link [lovr.graphics.cube](https://lovr.org/docs/lovr.graphics.cube)
 */
export function cube(material: Material, transform: Mat4): void;

/**
 * Draws a cylinder.
 *
 * @param x The x coordinate of the center of the cylinder.
 * @param y The y coordinate of the center of the cylinder.
 * @param z The z coordinate of the center of the cylinder.
 * @param length The length of the cylinder, in meters.
 * @param angle The rotation of the cylinder around its rotation axis, in radians.
 * @param ax The x coordinate of the cylinder's axis of rotation.
 * @param ay The y coordinate of the cylinder's axis of rotation.
 * @param az The z coordinate of the cylinder's axis of rotation.
 * @param r1 The radius of one end of the cylinder.
 * @param r2 The radius of the other end of the cylinder.
 * @param capped Whether the top and bottom should be rendered.
 * @param segments The number of radial segments to use for the cylinder. If nil, the segment count is automatically determined from the radii.
 * @link [lovr.graphics.cylinder](https://lovr.org/docs/lovr.graphics.cylinder)
 */
export function cylinder(x?: number, y?: number, z?: number, length?: number, angle?: number, ax?: number, ay?: number, az?: number, r1?: number, r2?: number, capped?: boolean, segments?: number | undefined): void;

/**
 * Draws a cylinder.
 *
 * @param material The Material to apply to the cylinder.
 * @param x The x coordinate of the center of the cylinder.
 * @param y The y coordinate of the center of the cylinder.
 * @param z The z coordinate of the center of the cylinder.
 * @param length The length of the cylinder, in meters.
 * @param angle The rotation of the cylinder around its rotation axis, in radians.
 * @param ax The x coordinate of the cylinder's axis of rotation.
 * @param ay The y coordinate of the cylinder's axis of rotation.
 * @param az The z coordinate of the cylinder's axis of rotation.
 * @param r1 The radius of one end of the cylinder.
 * @param r2 The radius of the other end of the cylinder.
 * @param capped Whether the top and bottom should be rendered.
 * @param segments The number of radial segments to use for the cylinder. If nil, the segment count is automatically determined from the radii.
 * @link [lovr.graphics.cylinder](https://lovr.org/docs/lovr.graphics.cylinder)
 */
export function cylinder(material: Material, x?: number, y?: number, z?: number, length?: number, angle?: number, ax?: number, ay?: number, az?: number, r1?: number, r2?: number, capped?: boolean, segments?: number | undefined): void;

/**
 * Discards pixel information in the active Canvas or display.
 *
 * @param color Whether or not to discard color information.
 * @param depth Whether or not to discard depth information.
 * @param stencil Whether or not to discard stencil information.
 * @link [lovr.graphics.discard](https://lovr.org/docs/lovr.graphics.discard)
 */
export function discard(color?: boolean, depth?: boolean, stencil?: boolean): void;

/**
 * Draws a fullscreen textured quad.
 *
 * @param texture The texture to use.
 * @param u The x component of the uv offset.
 * @param v The y component of the uv offset.
 * @param w The width of the Texture to render, in uv coordinates.
 * @param h The height of the Texture to render, in uv coordinates.
 * @link [lovr.graphics.fill](https://lovr.org/docs/lovr.graphics.fill)
 */
export function fill(texture: Texture, u?: number, v?: number, w?: number, h?: number): void;

/**
 * Flushes the internal queue of draw batches.
 *
 * @link [lovr.graphics.flush](https://lovr.org/docs/lovr.graphics.flush)
 */
export function flush(): void;

/**
 * Draws lines between points.
 *
 * @param xyz x, y and z coordinates of each point.
 * @link [lovr.graphics.line](https://lovr.org/docs/lovr.graphics.line)
 */
export function line(...xyz: number[]): void;
export function line(points: number[]): void;

/**
 * Draws a plane with a given position, size, and orientation.
 *
 * @param mode How to draw the plane.
 * @param x The x coordinate of the center of the plane.
 * @param y The y coordinate of the center of the plane.
 * @param z The z coordinate of the center of the plane.
 * @param width The width of the plane, in meters.
 * @param height The height of the plane, in meters.
 * @param angle The number of radians to rotate around the rotation axis.
 * @param ax The x component of the rotation axis.
 * @param ay The y component of the rotation axis.
 * @param az The z component of the rotation axis.
 * @param u The u coordinate of the texture.
 * @param v The v coordinate of the texture.
 * @param w The width of the texture UVs to render.
 * @param h The height of the texture UVs to render.
 * @link [lovr.graphics.plane](https://lovr.org/docs/lovr.graphics.plane)
 */
export function plane(mode: DrawStyle, x?: number, y?: number, z?: number, width?: number, height?: number, angle?: number, ax?: number, ay?: number, az?: number, u?: number, v?: number, w?: number, h?: number): void;

/**
 * Draws a plane with a given position, size, and orientation.
 *
 * @param material The material to apply to the plane.
 * @param x The x coordinate of the center of the plane.
 * @param y The y coordinate of the center of the plane.
 * @param z The z coordinate of the center of the plane.
 * @param width The width of the plane, in meters.
 * @param height The height of the plane, in meters.
 * @param angle The number of radians to rotate around the rotation axis.
 * @param ax The x component of the rotation axis.
 * @param ay The y component of the rotation axis.
 * @param az The z component of the rotation axis.
 * @param u The u coordinate of the texture.
 * @param v The v coordinate of the texture.
 * @param w The width of the texture UVs to render.
 * @param h The height of the texture UVs to render.
 * @link [lovr.graphics.plane](https://lovr.org/docs/lovr.graphics.plane)
 */
export function plane(material: Material, x?: number, y?: number, z?: number, width?: number, height?: number, angle?: number, ax?: number, ay?: number, az?: number, u?: number, v?: number, w?: number, h?: number): void;

/**
 * Draws one or more points.
 *
 * @param xyz An x, y and z coordinate followed by further x, y and z coordinates.
 * @link [lovr.graphics.points](https://lovr.org/docs/lovr.graphics.points)
 */
export function points(...xyz: number[]): void;
export function points(xyz: number[]): void;

/**
 * Draws text in 3D space using the active font.
 *
 * @param str	The text to render.
 * @param x The x coordinate of the center of the text.
 * @param y The y coordinate of the center of the text.
 * @param z The z coordinate of the center of the text.
 * @param scale The scale of the text.
 * @param angle The number of radians to rotate the text around its rotation axis.
 * @param ax The x component of the axis of rotation.
 * @param ay The y component of the axis of rotation.
 * @param az The z component of the axis of rotation.
 * @param wrap The maximum width of each line, in meters (affected by scale). Set to 0 or nil for no wrapping.
 * @param halign The horizontal alignment.
 * @param valign The vertical alignment.
 * @link [lovr.graphics.print](https://lovr.org/docs/lovr.graphics.print)
 */
export function print(str: string, x?: number, y?: number, z?: number, scale?: number, angle?: number, ax?: number, ay?: number, az?: number, wrap?: number | undefined, halign?: HorizontalAlign, valign?: VerticalAlign): void;

/**
 * Render a skybox from a texture.
 *
 * @param texture The texture to use.
 * @link [lovr.graphics.skybox](https://lovr.org/docs/lovr.graphics.skybox)
 */
export function skybox(texture: Texture): void;

/**
 * Draws a sphere.
 *
 * @param x The x coordinate of the center of the sphere.
 * @param y The y coordinate of the center of the sphere.
 * @param z The z coordinate of the center of the sphere.
 * @param radius The radius of the sphere, in meters.
 * @param angle The rotation of the sphere around its rotation axis, in radians.
 * @param ax The x coordinate of the sphere's axis of rotation.
 * @param ay The y coordinate of the sphere's axis of rotation.
 * @param az The z coordinate of the sphere's axis of rotation.
 * @link [lovr.graphics.sphere](https://lovr.org/docs/lovr.graphics.sphere)
 */
export function sphere(x?: number, y?: number, z?: number, radius?: number, angle?: number, ax?: number, ay?: number, az?: number): void;

/**
 * Draws a sphere.
 *
 * @param material The Material to apply to the sphere.
 * @param x The x coordinate of the center of the sphere.
 * @param y The y coordinate of the center of the sphere.
 * @param z The z coordinate of the center of the sphere.
 * @param radius The radius of the sphere, in meters.
 * @param angle The rotation of the sphere around its rotation axis, in radians.
 * @param ax The x coordinate of the sphere's axis of rotation.
 * @param ay The y coordinate of the sphere's axis of rotation.
 * @param az The z coordinate of the sphere's axis of rotation.
 * @link [lovr.graphics.sphere](https://lovr.org/docs/lovr.graphics.sphere)
 */
export function sphere(material: Material, x?: number, y?: number, z?: number, radius?: number, angle?: number, ax?: number, ay?: number, az?: number): void;

/**
 * Renders to the stencil buffer using a function.
 *
 * @param callback The function that will be called to render to the stencil buffer.
 * @param action How to modify the stencil value of pixels that are rendered to.
 * @param value If action is "replace", this is the value that pixels are replaced with.
 * @param keep If false, the stencil buffer will be cleared to zero before rendering.
 * @link [lovr.graphics.stencil](https://lovr.org/docs/lovr.graphics.stencil)
 */
export function stencil(callback: (this: void) => void, action?: StencilAction, value?: number, keep?: boolean): void;

/**
 * Renders to the stencil buffer using a function.
 *
 * @param callback The function that will be called to render to the stencil buffer.
 * @param action How to modify the stencil value of pixels that are rendered to.
 * @param value If action is "replace", this is the value that pixels are replaced with.
 * @param initial The value to clear the stencil buffer to before rendering.
 * @link [lovr.graphics.stencil](https://lovr.org/docs/lovr.graphics.stencil)
 */
export function stencil(callback: (this: void) => void, action?: StencilAction, value?: number, initial?: number): void;

/**
 * Draws triangles from a list of points.
 *
 * @param mode How to draw the triangle.
 * @param xyz 3D points describing where to draw the triangles.
 * @link [lovr.graphics.triangle](https://lovr.org/docs/lovr.graphics.triangle)
 */
export function triangle(mode?: DrawStyle, ...xyz: number[]): void;

/**
 * Draws triangles from a list of points.
 *
 * @param material The Material to apply.
 * @param xyz 3D points describing where to draw the triangles.
 * @link [lovr.graphics.triangle](https://lovr.org/docs/lovr.graphics.triangle)
 */
export function triangle(material?: Material, ...xyz: number[]): void;

type CanvasFlags = {
  format?: TextureFormat;
  depth?: TextureFormat;
  stereo?: boolean;
  msaa?: number;
  mipmaps?: boolean;
};

/**
 * Creates a new Canvas.
 *
 * @param width The width of the canvas, in pixels.
 * @param height The height of the canvas, in pixels.
 * @param flags Optional settings for the Canvas.
 * @link [lovr.graphics.newCanvas](https://lovr.org/docs/lovr.graphics.newCanvas)
 */
export function newCanvas(width: number, height: number, flags?: CanvasFlags): Canvas;

/**
 * Create a Canvas with attached Textures.
 *
 * @param texturesFollowedByOptionalFlags A list of textures, the last argument is optional and can only be CanvasFlags.
 * @link [lovr.graphics.newCanvas](https://lovr.org/docs/lovr.graphics.newCanvas)
 */
export function newCanvas(...texturesFollowedByOptionalFlags: (Texture | CanvasFlags)[]): Canvas;

/**
 * Create a Canvas with attached Textures, using specific layers and mipmap levels from each one.
 *
 * Layers and mipmaps can be specified after each Texture as numbers, or a table of a Texture, layer, and mipmap can be used for each attachment.
 *
 * @param attachments A table of textures, layers, and mipmaps (in any combination) to attach.
 * @param flags Optional settings for the Canvas.
 * @link [lovr.graphics.newCanvas](https://lovr.org/docs/lovr.graphics.newCanvas)
 */
export function newCanvas(attachments: any[], flags: CanvasFlags): Canvas;

type ComputeShaderFlags = {
  flags?: any;
};

/**
 * Creates a new compute Shader, used for running generic compute operations on the GPU.
 *
 * @param source The code or filename of the compute shader.
 * @param options Optional settings for the Shader.
 */
export function newComputeShader(source: string, options?: ComputeShaderFlags): Shader;

/**
 * Creates a new Font.
 *
 * @param fileName The filename of the font file.
 * @param size The size of the font, in pixels.
 * @link [lovr.graphics.newFont](https://lovr.org/docs/lovr.graphics.newFont)
 */
export function newFont(fileName: string, size?: number): Font;

/**
 * Creates a new Font from the default font included with LÖVR (Varela Round).
 *
 * @param size The size of the font, in pixels.
 * @link [lovr.graphics.newFont](https://lovr.org/docs/lovr.graphics.newFont)
 */
export function newFont(size?: number): Font;

/**
 * Creates a new Font.
 *
 * @param rasterizer The existing Rasterizer object used to render the glyphs.
 * @link [lovr.graphics.newFont](https://lovr.org/docs/lovr.graphics.newFont)
 */
export function newFont(rasterizer?: Rasterizer): Font;

/**
 * Creates a new Material.
 *
 * @link [lovr.graphics.newMaterial](https://lovr.org/docs/lovr.graphics.newMaterial)
 */
export function newMaterial(): Material;

/**
 * Creates a new Material.
 *
 * @param texture The diffuse texture.
 * @param r The red component of the diffuse color.
 * @param g The green component of the diffuse color.
 * @param b The blue component of the diffuse color.
 * @param a The alpha component of the diffuse color.
 * @link [lovr.graphics.newMaterial](https://lovr.org/docs/lovr.graphics.newMaterial)
 */
export function newMaterial(texture: Texture, r?: number, g?: number, b?: number, a?: number): Material;

/**
 * Creates a new Material.
 *
 * @param canvas A Canvas to use as the diffuse texture.
 * @param r The red component of the diffuse color.
 * @param g The green component of the diffuse color.
 * @param b The blue component of the diffuse color.
 * @param a The alpha component of the diffuse color.
 * @link [lovr.graphics.newMaterial](https://lovr.org/docs/lovr.graphics.newMaterial)
 */
export function newMaterial(canvas: Canvas, r?: number, g?: number, b?: number, a?: number): Material;

/**
 * Creates a new Material.
 *
 * @param r The red component of the diffuse color.
 * @param g The green component of the diffuse color.
 * @param b The blue component of the diffuse color.
 * @param a The alpha component of the diffuse color.
 * @link [lovr.graphics.newMaterial](https://lovr.org/docs/lovr.graphics.newMaterial)
 */
export function newMaterial(r?: number, g?: number, b?: number, a?: number): Material;

/**
 * Creates a new Material.
 *
 * @param hex A hexcode to use for the diffuse color (alpha is not supported).
 * @link [lovr.graphics.newMaterial](https://lovr.org/docs/lovr.graphics.newMaterial)
 */
export function newMaterial(hex?: number): Material;

/**
 * Creates a new Mesh.
 *
 * @param size The maximum number of vertices the Mesh can store.
 * @param mode How the Mesh will connect its vertices into triangles.
 * @param usage An optimization hint indicating how often the data in the Mesh will be updated.
 * @param readable Whether vertices from the Mesh can be read.
 * @link [lovr.graphics.newMesh](https://lovr.org/docs/lovr.graphics.newMesh)
 */
export function newMesh(size: number, mode?: DrawMode, usage?: MeshUsage, readable?: boolean): Mesh;

/**
 * Creates a new Mesh.
 *
 * @param vertices A table of vertices. Each vertex is a table containing the vertex data.
 * @param mode How the Mesh will connect its vertices into triangles.
 * @param usage An optimization hint indicating how often the data in the Mesh will be updated.
 * @param readable Whether vertices from the Mesh can be read.
 * @link [lovr.graphics.newMesh](https://lovr.org/docs/lovr.graphics.newMesh)
 */
export function newMesh(vertices, mode?: DrawMode, usage?: MeshUsage, readable?: boolean): Mesh;

/**
 * Creates a new Mesh.
 *
 * @param blob A binary Blob containing vertex data.
 * @param mode How the Mesh will connect its vertices into triangles.
 * @param usage An optimization hint indicating how often the data in the Mesh will be updated.
 * @param readable Whether vertices from the Mesh can be read.
 * @link [lovr.graphics.newMesh](https://lovr.org/docs/lovr.graphics.newMesh)
 */
export function newMesh(blob: Blob, mode?: DrawMode, usage?: MeshUsage, readable?: boolean): Mesh;

/**
 * Creates a new Mesh.
 *
 * @param format A table describing the attribute format for the vertices.
 * @param mode The maximum number of vertices the Mesh can store.
 * @param usage An optimization hint indicating how often the data in the Mesh will be updated.
 * @param readable Whether vertices from the Mesh can be read.
 * @link [lovr.graphics.newMesh](https://lovr.org/docs/lovr.graphics.newMesh)
 */
export function newMesh(format, mode?: DrawMode, usage?: MeshUsage, readable?: boolean): Mesh;

/**
 * Creates a new Mesh.
 *
 * @param format A table describing the attribute format for the vertices.
 * @param vertices The maximum number of vertices the Mesh can store.
 * @param mode How the Mesh will connect its vertices into triangles.
 * @param usage An optimization hint indicating how often the data in the Mesh will be updated.
 * @param readable Whether vertices from the Mesh can be read.
 */
export function newMesh(format, vertices, mode?: DrawMode, usage?: MeshUsage, readable?: boolean): Mesh;

/**
 * Creates a new Mesh.
 *
 * @param format A table describing the attribute format for the vertices.
 * @param blob A binary Blob containing vertex data.
 * @param mode How the Mesh will connect its vertices into triangles.
 * @param usage An optimization hint indicating how often the data in the Mesh will be updated.
 * @param readable Whether vertices from the Mesh can be read.
 */
export function newMesh(format, blob: Blob, mode?: DrawMode, usage?: MeshUsage, readable?: boolean): Mesh;

/**
 * Creates a new Model.
 *
 * @param fileName The filename of the model to load.
 * @link [lovr.graphics.newModel](https://lovr.org/docs/lovr.graphics.newModel)
 */
export function newModel(fileName: string): Model;

/**
 * Creates a new Model.
 *
 * @param modelData The ModelData containing the data for the Model.
 * @link [lovr.graphics.newModel](https://lovr.org/docs/lovr.graphics.newModel)
 */
export function newModel(modelData: ModelData): Model;

type ShaderOptions = {
  /**
   * A table of key-value options passed to the Shader.
   */
  flags: object;

  /**
   * Whether the Shader should be configured for stereo rendering (Currently Android-only).
   */
  stereo?: boolean;
};

/**
 * Create a Shader with custom GLSL code.
 *
 * @param vertex The code or filename of the vertex shader. If nil, the default vertex shader is used.
 * @param fragment The code or filename of the fragment shader. If nil, the default fragment shader is used.
 * @param options Optional settings for the Shader.
 * @link [lovr.graphics.newShader](https://lovr.org/docs/lovr.graphics.newShader)
 */
export function newShader(vertex: string | undefined, fragment: string | undefined, options?: ShaderOptions): Shader;

/**
 * Create a new instance of a built-in Shader.
 *
 * @param defaultKind A builtin shader to use for the shader code.
 * @param options Optional settings for the Shader.
 * @link [lovr.graphics.newShader](https://lovr.org/docs/lovr.graphics.newShader)
 */
export function newShader(defaultKind: DefaultShader, options?: ShaderOptions): Shader;

type ShaderBlockFlags = {
  usage?: BufferUsage;
  readable?: boolean;
};

/**
 * Creates a new ShaderBlock from a table of variable definitions with their names and types.
 *
 * @param type Whether the block will be used for read-only uniform data or compute shaders.
 * @param uniforms A table where the keys are uniform names and the values are uniform types. Uniform arrays can be specified by supplying a table as the uniform's value containing the type and the array size.
 * @param flags Optional settings.
 * @link [lovr.graphics.newShaderBlock](https://lovr.org/docs/lovr.graphics.newShaderBlock)
 */
export function newShaderBlock(type: BlockType, uniforms: object, flags?: ShaderBlockFlags): ShaderBlock;

type TextureFlags = {
  linear?: boolean;
  mipmaps?: boolean;
  type?: TextureType;
  format?: TextureFormat;
  msaa?: number;
};

/**
 * Creates a new Texture from an image file.
 *
 * @param fileName The filename of the image to load.
 * @param flags Optional settings for the texture.
 * @link [lovr.graphics.newTexture](https://lovr.org/docs/lovr.graphics.newTexture)
 */
export function newTexture(fileName: string, flags?: TextureFlags): Texture;

type ImageCubeMap = {
  right: string;
  left: string;
  top: string;
  bottom: string;
  back: string;
  front: string;
};

/**
 * Creates a new Texture from an image file.
 *
 * @param images A mapping of image paths to create a cube map.
 * @param flags Optional settings for the texture.
 * @link [lovr.graphics.newTexture](https://lovr.org/docs/lovr.graphics.newTexture)
 */
export function newTexture(images: ImageCubeMap, flags?: TextureFlags): Texture;

/**
 * Creates a blank Texture with specified dimensions.
 *
 * @param width The width of the Texture.
 * @param height The height of the Texture.
 * @param depth The depth of the Texture.
 * @param flags Optional settings for the texture.
 * @link [lovr.graphics.newTexture](https://lovr.org/docs/lovr.graphics.newTexture)
 */
export function newTexture(width: number, height: number, depth: number, flags?: TextureFlags): Texture;

/**
 * Create a texture from a single Blob.
 *
 * @param blob The Blob containing encoded image data used to create the Texture.
 * @param flags Optional settings for the texture.
 * @link [lovr.graphics.newTexture](https://lovr.org/docs/lovr.graphics.newTexture)
 */
export function newTexture(blob: Blob, flags?: TextureFlags): Texture;

/**
 * Create a texture from a single TextureData.
 *
 * @param textureData The TextureData to create the Texture from.
 * @param flags Optional settings for the texture.
 * @link [lovr.graphics.newTexture](https://lovr.org/docs/lovr.graphics.newTexture)
 */
export function newTexture(textureData: TextureData, flags?: TextureFlags): Texture;

/**
 * Resets the transformation to the origin.
 *
 * @link [lovr.graphics.origin](https://lovr.org/docs/lovr.graphics.origin)
 */
export function origin(): void;

/**
 * Pops the current transform from the stack, returning to the transformation that was applied before lovr.graphics.push was called.
 *
 * @link [lovr.graphics.pop](https://lovr.org/docs/lovr.graphics.pop)
 */
export function pop(): void;

/**
 * Pushes a copy of the current transform onto the transformation stack.
 *
 * @link [lovr.graphics.push](https://lovr.org/docs/lovr.graphics.push)
 */
export function push(): void;

/**
 * Pushes a copy of the current transform onto the transformation stack.
 *
 * @param angle The amount to rotate the coordinate system by, in radians.
 * @param ax The x component of the axis of rotation.
 * @param ay The y component of the axis of rotation.
 * @param az The z component of the axis of rotation.
 * @link [lovr.graphics.rotate](https://lovr.org/docs/lovr.graphics.rotate)
 */
export function rotate(angle?: number, ax?: number, ay?: number, az?: number): void;

/**
 * Scales the coordinate system in 3 dimensions.
 *
 * @param x The amount to scale on the x axis.
 * @param y The amount to scale on the y axis.
 * @param z The amount to scale on the z axis.
 * @link [lovr.graphics.scale](https://lovr.org/docs/lovr.graphics.scale)
 */
export function scale(x?: number, y?: number, z?: number): void;

/**
 * Apply a transform to the coordinate system, changing its translation, rotation, and scale using a single function.
 *
 * @param x The x component of the translation.
 * @param y The y component of the translation.
 * @param z The z component of the translation.
 * @param sx The x scale factor.
 * @param sy The y scale factor.
 * @param sz The z scale factor.
 * @param angle The number of radians to rotate around the rotation axis.
 * @param ax The x component of the axis of rotation.
 * @param ay The y component of the axis of rotation.
 * @param az The z component of the axis of rotation.
 * @link [lovr.graphics.transform](https://lovr.org/docs/lovr.graphics.transform)
 */
export function transform(x?: number, y?: number, z?: number, sx?: number, sy?: number, sz?: number, angle?: number, ax?: number, ay?: number, az?: number): void;

/**
 * Modify the coordinate system using a mat4 object.
 *
 * @param transform The mat4 to apply to the coordinate system.
 * @link [lovr.graphics.transform](https://lovr.org/docs/lovr.graphics.transform)
 */
export function transform(transform: Mat4): void;

/**
 * Translates the coordinate system in three dimensions.
 *
 * @param x The amount to translate on the x axis.
 * @param y The amount to translate on the y axis.
 * @param z The amount to translate on the z axis.
 * @link [lovr.graphics.translate](https://lovr.org/docs/lovr.graphics.translate)
 */
export function translate(x?: number, y?: number, z?: number): void;

/**
 * Returns the current background color.
 *
 * Color components are from 0.0 to 1.0.
 *
 * @tupleReturn
 * @link [lovr.graphics.getBackgroundColor](https://lovr.org/docs/lovr.graphics.getBackgroundColor)
 */
export function getBackgroundColor(): [number, number, number, number];

/**
 * Sets the background color used to clear the screen.
 *
 * Color components are from 0.0 to 1.0
 *
 * @param r The red component of the background color.
 * @param g The green component of the background color.
 * @param b The blue component of the background color.
 * @param a The alpha component of the background color.
 * @link [lovr.graphics.setBackgroundColor](https://lovr.org/docs/lovr.graphics.setBackgroundColor)
 */
export function setBackgroundColor(r: number, g: number, b: number, a?: number): void;

/**
 * Sets the background color used to clear the screen.
 *
 * @param hex A hexcode like 0xffffff to use for the background (does not support alpha).
 * @link [lovr.graphics.setBackgroundColor](https://lovr.org/docs/lovr.graphics.setBackgroundColor)
 */
export function setBackgroundColor(hex: number): void;

/**
 * Sets the background color used to clear the screen.
 *
 * @param color A table containing 3 or 4 color components.
 * @link [lovr.graphics.setBackgroundColor](https://lovr.org/docs/lovr.graphics.setBackgroundColor)
 */
export function setBackgroundColor(color: [number, number, number, number?]): void;

/**
 * Returns the active Canvas.
 *
 * @link [lovr.graphics.getCanvas](https://lovr.org/docs/lovr.graphics.getCanvas)
 */
export function getCanvas(): Canvas | undefined;

/**
 * Sets or disables the active Canvas object.
 *
 * @param canvas The new active Canvas object, or nil to just render to the headset.
 * @link [lovr.graphics.setCanvas](https://lovr.org/docs/lovr.graphics.setCanvas)
 */
export function setCanvas(canvas: Canvas | undefined): void;

/**
 * Returns the default filter mode for new Textures.
 *
 * @tupleReturn
 * @link [lovr.graphics.getDefaultFilter](https://lovr.org/docs/lovr.graphics.getDefaultFilter)
 */
export function getDefaultFilter(): [FilterMode, number];

/**
 * Sets the default filter mode for new Textures.
 *
 * @param mode The filter mode.
 * @param anisotropy If the filtering mode is "anisotropic", returns the level of anisotropy. Otherwise, this will be nil.
 * @link [lovr.graphics.setDefaultFilter](https://lovr.org/docs/lovr.graphics.setDefaultFilter)
 */
export function setDefaultFilter(mode: FilterMode, anisotropy: number): void;

/**
 * Returns the current depth test settings.
 *
 * @tupleReturn
 * @link [lovr.graphics.getDepthTest](https://lovr.org/docs/lovr.graphics.getDepthTest)
 */
export function getDepthTest(): [CompareMode, boolean];

/**
 * Sets the current depth test.
 *
 * @param compareMode The new depth test. Use nil to disable the depth test.
 * @param write Whether pixels will have their z value updated when rendered to.
 * @link [lovr.graphics.setDepthTest](https://lovr.org/docs/lovr.graphics.setDepthTest)
 */
export function setDepthTest(compareMode?: CompareMode | undefined, write?: boolean): void;

/**
 * Returns the active shader.
 *
 * @link [lovr.graphics.getShader](https://lovr.org/docs/lovr.graphics.getShader)
 */
export function getShader(): Shader | undefined;

/**
 * Sets or disables the Shader used for drawing.
 *
 * @param shader The shader to use.
 * @link [lovr.graphics.setShader](https://lovr.org/docs/lovr.graphics.setShader)
 */
export function setShader(shader: Shader): void;

/**
 * Revert back to the default shader.
 *
 * @link [lovr.graphics.setShader](https://lovr.org/docs/lovr.graphics.setShader)
 */
export function setShader(): void;

/**
 * Returns the current polygon winding.
 *
 * @link [lovr.graphics.getWinding](https://lovr.org/docs/lovr.graphics.getWinding)
 */
export function getWinding(): Winding;

/**
 * Sets the polygon winding.
 *
 * @param winding The new winding direction.
 * @link [lovr.graphics.setWinding](https://lovr.org/docs/lovr.graphics.setWinding)
 */
export function setWinding(winding: Winding): void;

/**
 * Returns the current line width.
 *
 * @link [lovr.graphics.getLineWidth](https://lovr.org/docs/lovr.graphics.getLineWidth)
 */
export function getLineWidth(): number;

/**
 * Sets the width of lines rendered using lovr.graphics.line.
 *
 * @param width The new line width, in pixels.
 * @link [lovr.graphics.setLineWidth](https://lovr.org/docs/lovr.graphics.setLineWidth)
 */
export function setLineWidth(width?: number): void;

/**
 * Returns a boolean indicating whether or not wireframe rendering is enabled.
 *
 * @link [lovr.graphics.isWireframe](https://lovr.org/docs/lovr.graphics.isWireframe)
 */
export function isWireframe(): boolean;

/**
 * Enables or disables wireframe rendering.
 *
 * This is meant to be used as a debugging tool.
 *
 * @param wireframe Whether or not wireframe rendering should be enabled.
 * @link [lovr.graphics.setWireframe](https://lovr.org/docs/lovr.graphics.setWireframe)
 */
export function setWireframe(wireframe: boolean): void;

/**
 * Returns the current blend mode.
 *
 * @tupleReturn
 * @link [lovr.graphics.getBlendMode](https://lovr.org/docs/lovr.graphics.getBlendMode)
 */
export function getBlendMode(): [BlendMode, BlendAlphaMode];

/**
 * Sets the blend mode.
 *
 * @param blend The blend mode.
 * @param alphaBlend The alpha blend mode.
 * @link [lovr.graphics.setBlendMode](https://lovr.org/docs/lovr.graphics.setBlendMode)
 */
export function setBlendMode(blend: BlendMode, alphaBlend: BlendAlphaMode): void;

/**
 * Returns whether or not alpha sampling is enabled.
 *
 * @link [lovr.graphics.getAlphaSampling](https://lovr.org/docs/lovr.graphics.getAlphaSampling)
 */
export function getAlphaSampling(): boolean;

/**
 * Enables or disables alpha sampling.
 *
 * @param enabled Whether or not alpha sampling is enabled.
 * @link [lovr.graphics.setAlphaSampling](https://lovr.org/docs/lovr.graphics.setAlphaSampling)
 */
export function setAlphaSampling(enabled: boolean): void;

/**
 * Returns the current point size.
 *
 * @link [lovr.graphics.getPointSize](https://lovr.org/docs/lovr.graphics.getPointSize)
 */
export function getPointSize(): number;

/**
 * Sets the width of drawn points, in pixels.
 *
 * @param size The new point size.
 * @link [lovr.graphics.setPointSize](https://lovr.org/docs/lovr.graphics.setPointSize)
 */
export function setPointSize(size?: number): void;

/**
 * Returns the current global color factor.
 *
 * @tupleReturn
 * @link [lovr.graphics.getColor](https://lovr.org/docs/lovr.graphics.getColor)
 */
export function getColor(): [number, number, number, number];

/**
 * Sets the color used for drawing objects.
 *
 * @param r The red component of the color.
 * @param g The green component of the color.
 * @param b The blue component of the color.
 * @param a The alpha component of the color.
 * @link [lovr.graphics.setColor](https://lovr.org/docs/lovr.graphics.setColor)
 */
export function setColor(r: number, g: number, b: number, a?: number): void;

/**
 * Returns the active font.
 *
 * @link [lovr.graphics.getFont](https://lovr.org/docs/lovr.graphics.getFont)
 */
export function getFont(): Font;

/**
 * Sets the active font used to render text with lovr.graphics.print.
 *
 * @param font The font to use. If nil, the default font is used (Varela Round).
 * @link [lovr.graphics.setFont](https://lovr.org/docs/lovr.graphics.setFont)
 */
export function setFont(font?: Font): void;

/**
 * Resets all graphics state to the initial values.
 *
 * @link [lovr.graphics.reset](https://lovr.org/docs/lovr.graphics.reset)
 */
export function reset(): void;

/**
 * Sets the projection matrix.
 *
 * @param projection The projection matrix to use.
 * @link [lovr.graphics.setProjection](https://lovr.org/docs/lovr.graphics.setProjection)
 */
export function setProjection(projection: Mat4): void;

type Stats = {
  drawcalls: number;
  shaderswitches: number;
};

/**
 * Returns graphics-related performance statistics for the current frame.
 *
 * @link [lovr.graphics.getStats](https://lovr.org/docs/lovr.graphics.getStats)
 */
export function getStats(): Stats;

/**
 * Returns the current stencil test.
 *
 * @tupleReturn
 * @link [lovr.graphics.getStencilTest](https://lovr.org/docs/lovr.graphics.getStencilTest)
 */
export function getStencilTest(): [CompareMode, number];

/**
 * Sets the stencil test.
 *
 * @param compareMode The comparison method used to decide if a pixel should be visible, or nil if the stencil test is disabled.
 * @param compareValue The value to compare stencil values to.
 * @link [lovr.graphics.setStencilTest](https://lovr.org/docs/lovr.graphics.setStencilTest)
 */
export function setStencilTest(compareMode: CompareMode | undefined, compareValue: number): void;

/**
 * Returns whether or not culling is active.
 *
 * @link [lovr.graphics.isCullingEnabled](https://lovr.org/docs/lovr.graphics.isCullingEnabled)
 */
export function isCullingEnabled(): boolean;

/**
 * Enables or disables culling.
 *
 * @param isEnabled Whether or not culling should be enabled.
 * @link [lovr.graphics.setCullingEnabled](https://lovr.org/docs/lovr.graphics.setCullingEnabled)
 */
export function setCullingEnabled(isEnabled: boolean): void;

/**
 * Clears the screen, resetting the color, depth, and stencil information to default values.
 *
 * @param r The value to clear the red channel to, from 0.0 to 1.0.
 * @param g The value to clear the green channel to, from 0.0 to 1.0.
 * @param b The value to clear the blue channel to, from 0.0 to 1.0.
 * @param a The value to clear the alpha channel to, from 0.0 to 1.0.
 * @param z The value to clear the depth buffer to.
 * @param s The integer value to clear the stencil buffer to.
 * @link [lovr.graphics.clear](https://lovr.org/docs/lovr.graphics.clear)
 */
export function clear(color?: boolean, depth?: boolean, stencil?: boolean): void;

/**
 * Clears the screen, resetting the color, depth, and stencil information to default values.
 *
 * @param r The value to clear the red channel to, from 0.0 to 1.0.
 * @param g The value to clear the green channel to, from 0.0 to 1.0.
 * @param b The value to clear the blue channel to, from 0.0 to 1.0.
 * @param a The value to clear the alpha channel to, from 0.0 to 1.0.
 * @param z The value to clear the depth buffer to.
 * @param s The integer value to clear the stencil buffer to.
 * @link [lovr.graphics.clear](https://lovr.org/docs/lovr.graphics.clear)
 */
export function clear(r: number, g: number, b: number, a: number, z?: number, s?: number): void;

/**
 * Clears the screen, resetting the color, depth, and stencil information to default values.
 *
 * @param hex A hexcode to clear the color to, in the form 0xffffff (alpha unsupported).
 * @link [lovr.graphics.clear](https://lovr.org/docs/lovr.graphics.clear)
 */
export function clear(hex: number): void;

type WindowFlags = {
  width: number;
  height: number;
  fullscreen: boolean;
  resizable: boolean;
  msaa: number;
  title: string;
  icon: string;
  vsync: number;
};

/**
 * Create the desktop window, usually used to mirror the headset display.
 *
 * @param flags Flags to customize the window's appearance and behavior.
 * @link [lovr.graphics.createWindow](https://lovr.org/docs/lovr.graphics.createWindow)
 */
export function createWindow(flags: WindowFlags): void;

type FeatureTable = {
  async: boolean;
  compute: boolean;
  dxt: boolean;
  instancedstereo: boolean;
  multiview: boolean;
  timers: boolean;
};

/**
 * Returns whether certain features are supported by the system's graphics card.
 *
 * @link [lovr.graphics.getFeatures](https://lovr.org/docs/lovr.graphics.getFeatures)
 */
export function getFeatures(): FeatureTable;

/**
 * Returns the height of the desktop window.
 *
 * @link [lovr.graphics.getHeight](https://lovr.org/docs/lovr.graphics.getHeight)
 */
export function getHeight(): number;

/**
 * Returns whether the desktop window is currently created.
 *
 * @link [lovr.graphics.hasWindow](https://lovr.org/docs/lovr.graphics.hasWindow)
 */
export function hasWindow(): boolean;

/**
 * Returns the width of the desktop window.
 *
 * @link [lovr.graphics.getWidth](https://lovr.org/docs/lovr.graphics.getWidth)
 */
export function getWidth(): number;

/**
 * Returns the dimensions of the desktop window.
 *
 * @tupleReturn
 * @link [lovr.graphics.getDimensions](https://lovr.org/docs/lovr.graphics.getDimensions)
 */
export function getDimensions(): [number, number];

type Limits = {
  anisotropy: number;
  blocksize: number;
  texturemsaa: number;
  texturesize: number;
};

/**
 * Returns information about the maximum limits of the graphics card, such as the maximum texture size or the amount of supported antialiasing.
 *
 * @link [lovr.graphics.getLimits](https://lovr.org/docs/lovr.graphics.getLimits)
 */
export function getLimits(): Limits;

/**
 * Returns the pixel density of the window.
 *
 * @link [lovr.graphics.getPixelDensity](https://lovr.org/docs/lovr.graphics.getPixelDensity)
 */
export function getPixelDensity(): number;

/**
 * Presents the results of pending drawing operations to the window.
 *
 * @link [lovr.graphics.present](https://lovr.org/docs/lovr.graphics.present)
 */
export function present(): void;

/**
 * Starts a named timer on the GPU, which can be stopped using lovr.graphics.tock.
 *
 * @param label The name of the timer.
 * @link [lovr.graphics.tick](https://lovr.org/docs/lovr.graphics.tick)
 */
export function tick(label: string): void;

/**
 * Stops a named timer on the GPU, previously started with lovr.graphics.tick.
 *
 * @param label The name of the timer.
 * @link [lovr.graphics.tock](https://lovr.org/docs/lovr.graphics.tock)
 */
export function tock(label: string): number;
