import { SchemaTypeDefinition } from "sanity";

export const author: SchemaTypeDefinition = {
    name : "author",
    type : "document",
    title : "Forfatter",
    fields : [{ 
                name : "name", 
                title : "Tittel", 
                type : "string", 
                validation: (rule) => rule.required(),
            },
            { 
                name : "bio", 
                title : "Biografi", 
                type : "text", 
                rows : 3,
                validation: (rule) => rule.required().min(30).max(160),
            },
            {
                name : "image",
                title : "Bilde",
                type : "image",
                options : {
                    hotspot : true,
                },
            },
            {
                name : "socials",
                title : "Sosiale medier",
                type : "object",
                options : {
                    collapsible : true,
                    collapsed : true,
                },
                fields : [
                {
                    name : "github",
                    type : "url"
                },
                {
                    name : "twitter",
                    type : "url"
                },
                {
                    name : "linkedin",
                    type : "url"
                },
            ]
            }],
};

