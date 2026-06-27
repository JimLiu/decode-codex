// Restored from ref/webview/assets/pet-install-state-DJxALilf.js
// Entry wrapper that initializes pet install state before exposing the API.
import {
  closePetInstallSession,
  initPetInstallStateChunk,
  installPet,
  petInstallSession$,
  startPetInstallSession,
} from "./pet-install-state";

initPetInstallStateChunk();

export {
  closePetInstallSession,
  installPet,
  petInstallSession$,
  startPetInstallSession,
};
