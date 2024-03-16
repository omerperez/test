type DebouncedFunction<T extends (...args: unknown[]) => unknown> = (...args: Parameters<T>) => void;

export const debounce = <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): DebouncedFunction<T> => {
    let timeout: NodeJS.Timeout;
    return (...args: unknown[]) => {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}