export interface GraphQLErrorLocation {
  line: number;
  column: number;
}
export interface GraphQLError {
  message: string;
  locations: GraphQLErrorLocation[];
}
export interface GraphQLResponse<T> {
  data?: T;
  error?: GraphQLError;
  loading: boolean;
  networkStatus: number;
}
