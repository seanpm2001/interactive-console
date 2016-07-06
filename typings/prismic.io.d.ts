// Type definitions for prismic.io JS kit 3.1.3
// Still very incomplete!

declare namespace PrismicIO {

  interface Callback {
    (err: any, result: any): any
  }

  interface LinkResolver {
    (doc: Document): string
  }

  // TODO
  type Response = any

  // TODO
  type Document = any

  interface Api {
    accessToken?: string;
    url: string;
    apiCache: any;
    apiDataTTL: number;
    form: {(formId: string): any};
    master: {(): string};
    bookmarks: {[name: string]: string};
    ref: {(label: string): any};
    query: {(q: string, options?: Object, callback?: Callback): PromiseLike<Response>};
    getByID: {(id: string, options?: Object, callback?: Callback): PromiseLike<Document>};
    getByUID: {(typ: string, uid: string, options?: Object, callback?: Callback): PromiseLike<Document>};
  }

  interface ApiOptions {
    callback?: Callback,
    accessToken?: string,
    req?: any,
    requestHandler?: any,
    apiCache?: any,
    apiDataTTL?: number
  }

}

declare module "prismic.io" {
  const api: {(url: string, options?: PrismicIO.ApiOptions): PromiseLike<PrismicIO.Api>};
  const Predicates: any
}
