/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

import {ReactiveElement} from '../reactive-element.js';
import {decorateProperty} from './base.js';

/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedElements` of the given `slot`. Provides a declarative
 * way to use
 * [`slot.assignedElements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements).
 *
 * @param slotName A string name of the slot. Leave empty or use `''` for
 *     default slot.
 * @param options Object that sets options for nodes to be returned. See
 *     [MDN parameters section](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements#parameters)
 *     for available options.
 *
 * ```ts
 * class MyElement {
 *   @queryAssignedElements('list')
 *   listItems;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
export function queryAssignedElements(
  slotName = '',
  options?: AssignedNodesOptions | undefined
) {
  return decorateProperty({
    descriptor: (_name: PropertyKey) => ({
      get(this: ReactiveElement) {
        const slotSelector = `slot${
          slotName ? `[name=${slotName}]` : ':not([name])'
        }`;
        const slot = this.renderRoot?.querySelector(slotSelector);
        return (slot as HTMLSlotElement).assignedElements(options);
      },
      enumerable: true,
      configurable: true,
    }),
  });
}
