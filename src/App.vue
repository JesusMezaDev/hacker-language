<template>
  <div class="container">
    <div class="row m-3">
      <div class="col input-group">
        <span class="input-group-text">
          <i class="bi-safe"></i>
          &nbsp;Mensaje a encriptar:
        </span>
        <input type="text" class="form-control" v-model="textToEncrypt" @keyup.enter="encryptMessage">
      </div>
    </div>
    <div class="row m-3">
      <div class="col input-group">
        <span class="input-group-text">
          <i class="bi-safe-fill"></i>
          &nbsp;Mensaje encriptado:
        </span>
        <input type="text" class="form-control" v-model="cryptedMessage" readonly>
      </div>
    </div>
    <div class="row m-3">
      <div class="col input-group">
        <span class="input-group-text">
          <i class="bi-safe2-fill"></i>
          &nbsp;Mensaje a desencriptar:
        </span>
        <input type="text" class="form-control" v-model="textToDecrypt" @keyup.enter="decryptMessage">
      </div>
    </div>
    <div class="row m-3">
      <div class="col input-group">
        <span class="input-group-text">
          <i class="bi-safe2"></i>
          &nbsp;Mensaje desencriptado:
        </span>
        <input type="text" class="form-control" v-model="decryptedMessage" readonly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useApp } from './useApp';
  const { decryptedMessage, cryptedMessage, textToEncrypt, encryptMessage, textToDecrypt, decryptMessage }  = useApp();
</script>

<style scoped>

</style>