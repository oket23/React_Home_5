import { useCallback, useState } from "react";

export function useFetch<T = unknown>(baseUrl: string, opts?: RequestInit) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const request = useCallback(
        async (url: string = baseUrl, signal?: AbortSignal) => {
            setIsLoading(true);
            setError(null);

            try {
                const res = await fetch(url, {
                    ...opts,
                    method: "GET",
                    signal,
                    headers: {
                        "Content-Type": "application/json",
                        ...opts?.headers,
                    },
                });

                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`);
                }

                const json = (await res.json()) as T;
                setData(json);
                return json;
            } catch (e) {
                if ((e as Error).name !== "AbortError") {
                    setError(e as Error);
                }
            } finally {
                setIsLoading(false);
            }
        },
        [baseUrl, opts]
    );

    return { data, isLoading, error, request };
}
