"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5394,827],{65394:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var i=r(1005),l=r(32358),n=r(29469);const a="@jupyterlite/pyolite-kernel-extension:kernel",s=[{id:a,autoStart:!0,requires:[n.IKernelSpecs,l.IServiceWorkerRegistrationWrapper],activate:(e,t,l)=>{const n=i.PageConfig.getBaseUrl(),s=JSON.parse(i.PageConfig.getOption("litePluginSettings")||"{}")[a]||{},o=s.pyodideUrl||"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js",p=i.URLExt.parse(o).href,d=(s.pipliteUrls||[]).map((e=>i.URLExt.parse(e).href)),c=!!s.disablePyPIFallback;t.register({spec:{name:"python",display_name:"Python (Pyodide)",language:"python",argv:[],resources:{"logo-32x32":"TODO","logo-64x64":i.URLExt.join(n,"/kernelspecs/python.png")}},create:async e=>{const{PyoliteKernel:t}=await Promise.all([r.e(4547),r.e(5062)]).then(r.bind(r,75062));return new t({...e,pyodideUrl:p,pipliteUrls:d,disablePyPIFallback:c,mountDrive:l.enabled})}})}}]}}]);
//# sourceMappingURL=5394.e4e57c1.js.map