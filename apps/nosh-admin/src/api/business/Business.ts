export type Business = {
  createdAt: Date;
  id: string;
  menuProvider?:
    | "Nosh"
    | "Chowly"
    | "Toast"
    | "Deliverect"
    | "Square"
    | "Checkmate"
    | "Otter";
  updatedAt: Date;
};
