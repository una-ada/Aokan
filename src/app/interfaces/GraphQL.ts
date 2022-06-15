export interface GraphQLErrorLocation {
  line: number;
  column: number;
}
export interface GraphQLError {
  message: string;
  locations: GraphQLErrorLocation[];
}
export interface GraphQLResponse<T> {
  data?: {[key: string]: T};
  error?: GraphQLError;
  loading: boolean;
  networkStatus: number;
}
