export default {
  async fetch(request, env, ctx) {
    return new Response("✅ 部署成功！", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};
