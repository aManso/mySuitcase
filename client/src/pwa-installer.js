
// we check if there is browser support for service workers
if ('serviceWorker' in navigator) {

    window.addEventListener("beforeinstallprompt", e => {
        installButton = document.getElementById("install_button");
        console.log("beforeinstallprompt fired");
        // Prevent Chrome 76 and earlier from automatically showing a prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Show the install button
        installButton.hidden = false;
        installButton.addEventListener("click", installApp);
    });

    function installApp() {
      // Show the prompt
      deferredPrompt.prompt();
      installButton.disabled = true;
    
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === "accepted") {
          console.log("PWA setup accepted");
          installButton.hidden = true;
        } else {
          console.log("PWA setup rejected");
        }
        installButton.disabled = false;
        deferredPrompt = null;
      });
    }

    window.addEventListener("appinstalled", evt => {
      console.log("appinstalled fired", evt);
      // Esconder la promoción de instalación de la PWA
      hideInstallPromotion();
      // Limpiar el defferedPrompt para que pueda ser eliminado por el recolector de basura
      deferredPrompt = null;
      // De manera opcional, enviar el evento de analíticos para indicar una instalación exitosa
      console.log('PWA was installed');
    });
}