export interface Options {
  baseUrl: string;
  params: Record<string, string>;
}

export abstract class HttpAdapter {

  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}
