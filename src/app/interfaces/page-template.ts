export interface PageTemplate<M = any> {
  pageNumber: number;
  pageSize: number;
  offset: number;
  currentPage: number;
  totalPages: number;
  totalElements: number;
  content: M[];
}
