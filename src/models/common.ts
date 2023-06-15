export interface PaginationParams {
    total: number;
    skip: number;
    limit: number;
}
export interface ListResponse<T> {
    products: T[];
    pagination: PaginationParams;
}
export interface AddResponse<T> {
   id:number;
   title:string;
}