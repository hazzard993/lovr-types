import { AABB } from "./AABB";

/**
 * A Model is a drawable object loaded from a 3D file format. The supported 3D file formats are OBJ and glTF.
 *
 * @link [Model](https://lovr.org/docs/Model)
 */
export interface Model {
  /**
   * Returns a bounding box that encloses the vertices of the Model.
   *
   * @tupleReturn
   * @link [Model:getAABB](https://lovr.org/docs/Model:getAABB)
   */
  getAABB(): AABB;

  /**
   * Applies an animation to the current pose of the Model.
   *
   * @param name The name of an animation.
   * @param time The timestamp to evaluate the keyframes at, in seconds.
   * @param alpha How much of the animation to mix in, from 0 to 1.
   * @link [Model:animate](https://lovr.org/docs/Model:animate)
   */
  animate(name: string, time: number, alpha?: number): void;

  /**
   * Applies an animation to the current pose of the Model.
   *
   * @param index The index of an animation.
   * @param time 	The timestamp to evaluate the keyframes at, in seconds.
   * @param alpha How much of the animation to mix in, from 0 to 1.
   * @link [Model:animate](https://lovr.org/docs/Model:animate)
   */
  animate(index: number, time: number, alpha?: number): void;
  getMaterial;
  getMaterialCount;
  getMaterialName;
  draw;
  getAnimationCount;
  getAnimationDuration;
  getAnimationName;
  getNodeCount;
  getNodeName;
  getNodePost;
  pose;
}