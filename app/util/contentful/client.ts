const SPACE_ID: string = process.env.CONTENTFUL_SPACE_ID ?? '';
const TOKEN: string = process.env.CONTENTFUL_TOKEN ?? '';
const ENV: string = process.env.CONTENTFUL_ENVIRONMENT ?? '';

export const contentfulUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/`

export function contentulOptions(query) {
    const contentfulOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({ query })
    }
    return contentfulOptions
}

export async function contentfulTypewriter(page) {
    const query = `{
        typewriterCollection(where: { page: "${page}" }) {
            items {
                page
                phrases
            }
        }
    }`
    const options = contentulOptions(query);
    const res = await fetch (contentfulUrl, options);
    const data = await res.json();
    const phrases = data.data.typewriterCollection.items[0].phrases;

    return phrases
}