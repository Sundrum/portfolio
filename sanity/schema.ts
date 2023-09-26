import { type SchemaTypeDefinition } from "sanity";
import { author } from "./schemas/author";
import { project } from "./schemas/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, project],
};
