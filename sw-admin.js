/* Permite instalar el panel como app. NO guarda en el teléfono ninguna encuesta ni dato de clientes:
   todo se pide siempre a internet. Solo muestra un aviso si no hay conexión. */
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
if(e.request.mode==="navigate"){
e.respondWith(fetch(e.request).catch(()=>new Response(
'<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sin conexión</title>'+
'<body style="font-family:system-ui;display:grid;place-items:center;min-height:100vh;margin:0;background:#f4f6fb;color:#0f1222;text-align:center;padding:24px">'+
'<div><h2>Sin conexión</h2><p style="color:#636b82">El panel necesita internet para mostrar los datos. Revisa tu conexión e inténtalo de nuevo.</p></div>',
{headers:{"Content-Type":"text/html; charset=utf-8"}})));
}
});
