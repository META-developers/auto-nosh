export type Business = {
  createdAt: Date;
  id: string;
  menuProvider?: Array<
    | "Nosh"
    | "Chowly"
    | "Deliverect"
    | "Toast"
    | "Checkmate"
    | "Otter"
    | "Square"
    | "Clover"
  >;
  updatedAt: Date;
};
