/**
 * Thanks to Chakra UI
 *
 * @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/dom.ts
 */
export declare function canUseDOM(): boolean;
export declare const isBrowser: boolean;
declare function uniqueId(prefix?: string): string;
export { uniqueId };
/** Debounce Function */
export declare function debounce<T extends unknown[], U>(callback: (...args: T) => PromiseLike<U> | U, wait: number): (...args: T) => Promise<U>;
