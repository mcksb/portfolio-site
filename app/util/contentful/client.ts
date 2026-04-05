const SPACE_ID: string = process.env.CONTENTFUL_SPACE_ID ?? '';
const TOKEN: string = process.env.CONTENTFUL_TOKEN ?? '';
const ENV: string = process.env.CONTENTFUL_ENVIRONMENT ?? '';
const contentfulUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENV}`;

function checkEnv() {
    if (!SPACE_ID || !TOKEN || !ENV) {
        return false
    } else {
        return true
    }
};

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
};

export async function contentfulTypewriter(page: string) {
    let phrases;
    let res;
    
    if (!checkEnv()) {
        console.error('Error fetching from Contentful: Missing environment variables')
        return ['']
    };

    const query = `{
        typewriterCollection(where: { page: "${page}" }) {
            items {
                page
                phrases
            }
        }
    }`
    const options = contentulOptions(query);
    
    try {
        res = await fetch (contentfulUrl, options);
    } catch (err) {
        console.error('Error fetching from Contentful:', err);
        return ['']
    };
    
    if (!res.ok) {
        console.error('Error fetching from Contentful:', res.statusText);
        return ['']
    } else {
        const data = await res.json();
        phrases = data?.data?.typewriterCollection?.items[0]?.phrases ?? [''];
        if (phrases[0] === '') {
            console.error('Error fetching from Contentful: Phrases array is empty')
        }
        return phrases
    };
}