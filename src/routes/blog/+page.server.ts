
export const load = async ({ fetch }) => {
    const data = (await fetch('/api/posts'))
    const posts = await data.json()

    return { 
        posts
    }
};