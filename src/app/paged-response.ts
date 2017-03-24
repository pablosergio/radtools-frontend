export interface PagedResponse<T> {
	total: number;
	rows: T[];
	success: boolean;
}
