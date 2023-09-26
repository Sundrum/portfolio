import { SchemaTypeDefinition } from "sanity";


export const project: SchemaTypeDefinition = {
    name : "project",
    type : "document",
    title : "Prosjekter",
    fields : [{
        name : "projectName",
        title : "Prosjektnavn",
        type : "string",
        validation: (rule) => rule.required(),
    },
    {
        name : "shortDescription",
        title : "En kort beskrivelse av prosjektet",
        type : "text",
        validation: (rule) => rule.required(),
    },
    {
        name : "slug",
        type : "slug",
        options : { source : "projectName" },
        validation: (rule) => rule.required(),
    },
    {
        name : "date",
        title : "Dato",
        type : "date",
        validation: (rule) => rule.required(),
    },
    {
        name : "keywords",
        title : "Nøkkelord",
        type : "array",
        of : [{ type : "string" }],
        options : {
            layout : "tags",
        },
    },
    {
        name : "image",
        title : "Prosjektbilde",
        type : "image",
        options : {
            hotspot : true,
        },
        validation: (rule) => rule.required(),
    },
    {
        name : "content",
        title : "Content",
        type : "array",
        of : [
            {
                type : "block",
            },
        ],
    },
    ],
};

