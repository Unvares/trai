export default defineNuxtPlugin(() => {
  if (process.client) {
    window.addEventListener('beforeunload', () => {
      sessionStorage.removeItem('thread_id');
    });
  }
});
