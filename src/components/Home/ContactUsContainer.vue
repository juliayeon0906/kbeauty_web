<script setup>
import { Icon } from '@iconify/vue'

const contacts = [
  {
    icon: 'mdi:phone',
    label: 'Phone',
    text: 'TEL: (902) 405-0399',
  },
  {
    icon: 'mdi:map-marker',
    label: 'Address',
    text: '6299 Quinpool Road, Halifax, NS B3L 1A4',
  },
  {
    icon: 'mdi:gmail',
    label: 'Email',
    text: 'kbeautysalonhfx@gmail.com',
  },
  {
    icon: 'mdi:instagram',
    label: 'Instagram',
    text: '@k_beauty_salon_halifax',
  },
]
</script>

<template>
  <div class="contact-us-container">
    <div class="contact-header">
      <div class="gold-line" />
      <span class="label-text">Contact Us</span>
      <h2 class="contact-title">Get In Touch</h2>
    </div>
    <ul class="contact-list">
      <li v-for="(item, i) in contacts" :key="item.label" class="contact-row">
        <Icon :icon="item.icon" class="contact-icon" />
        <div class="contact-info">
          <span class="contact-label">{{ item.label }}</span>
          <span class="contact-text">{{ item.text }}</span>
        </div>
        <div v-if="i < contacts.length - 1" class="row-divider" />
      </li>
    </ul>
  </div>
</template>

<style>
.contact-us-container {
  flex: 1;
  min-height: 460px;
  background-color: #2b2b2b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 56px 64px;
  gap: 32px;
}

.contact-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-us-container .gold-line {
  width: 32px;
  height: 2px;
  background-color: #ffbf00;
}

.label-text {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #ffbf00;
}

.contact-title {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #fff;
  margin-top: 4px;
}

.contact-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0;
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-row {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 0;
}

.row-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
}

.contact-icon {
  width: 22px;
  height: 22px;
  color: #ffbf00;
  flex-shrink: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-label {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #888;
}

.contact-text {
  font-size: 14px;
  font-weight: 400;
  color: #d9d9d9;
  line-height: 1.5;
}

@media only screen and (max-width: 900px) {
  .contact-us-container {
    padding: 48px 10%;
    min-height: auto;
  }
}

@media only screen and (max-width: 530px) {
  .contact-us-container {
    padding: 40px 6%;
  }

  .contact-title {
    font-size: 26px;
  }

  .contact-text {
    font-size: 13px;
  }
}
</style>
