<template>
  <div id="app">
    <navigation></navigation>
    <total-bar></total-bar>
    <modal></modal>

    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Modal from "@/components/Modal";
import TotalBar from "@/components/TotalBar";

export default {
  components: {
    Navigation,
    Modal,
    TotalBar
  }
};
</script>

<style>
@import url("https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap");
body {
  font-family: "Poppins", sans-serif;
  color: #444;
}

h1 {
  font-weight: 800;
  text-align: center;
  margin: 1.5em 0;
  font-size: 1.6em;
}

.balance {
  background: #cbd5e0;
  text-align: center;
  padding: 5px;
}

.input-field {
  display: flex;
  flex-direction: column;
  width: 20em;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.input-field label {
  font-size: 0.75em;
  margin-bottom: 10px;
}

.input-field input {
  padding: 10px 0;
}

.currency {
  font-size: 25px;
  padding: 2px 8px 0 0;
  color: #999;
}

.toggle-switch {
  display: flex;
  margin-bottom: 36px;
  overflow: hidden;
}

.toggle-switch input {
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.toggle-switch label {
  background-color: #ebf8ff;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  line-height: 1;
  text-align: center;
  padding: 1.2em 1.6em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.1s ease-in-out;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.toggle-switch label:hover {
  cursor: pointer;
}

.toggle-switch input:checked + label {
  background-color: #2a4365;
  color: #ebf8ff;
  box-shadow: none;
}

.toggle-switch label:first-of-type {
  border-radius: 10px 0 0 10px;
}

.toggle-switch label:last-of-type {
  border-radius: 0 10px 10px 0;
}

.transaction {
  display: flex;
  justify-content: space-between;
  width: 20em;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.modal-wrapper {
  background: #333;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 80%;
  z-index: 1000;
}
.modal-window {
  background: #eee;
  width: 275px;
  z-index: 9999;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  padding: 30px;
}
.modal-title {
  font-weight: bold;
  font-size: 18px;
}
.modal-body {
  font-size: 12px;
  margin: 10px 0 30px 0;
}
.button-wrapper {
  display: flex;
  justify-content: flex-end;
}
.cancel-button {
  padding: 10px 20px;
}
.ok-button {
  color: #ebf8ff;
  padding: 10px 20px;
  background: #2c5282;
  border-radius: 10px;
}
</style>
