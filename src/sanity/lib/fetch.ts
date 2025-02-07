import { createClient } from "next-sanity";


const client = createClient
({
  projectId: "yrnyzt9i",
  dataset: "production",
  apiVersion: "2023-03-25",
  useCdn: true,
});

export async function sanityFetch(query: string, params: { [key: string]: any } = {}){
    return await client.fetch(query, params);
}
