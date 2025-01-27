import { putDb, getDb } from './idb';
import 'regenerator-runtime/runtime';

// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, (error) => {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}

// Handle install prompt
let deferredPrompt;
const installButton = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installButton.style.display = 'block';
});

installButton.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    deferredPrompt = null;
    installButton.style.display = 'none';
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed');
});

// Load content from IndexedDB
window.addEventListener('DOMContentLoaded', async () => {
  const editor = document.getElementById('editor');
  const content = await getDb();
  if (content) {
    editor.value = content;
  }
  editor.addEventListener('input', () => {
    putDb(editor.value);
  });
});