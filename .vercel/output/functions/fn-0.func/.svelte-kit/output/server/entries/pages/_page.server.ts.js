async function load({ fetch }) {
  const response = await fetch("/api/posts?latest=true");
  const posts = await response.json();
  return {
    posts
  };
}
export {
  load
};
