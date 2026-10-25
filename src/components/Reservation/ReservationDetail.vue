<template>
  <div class="detail-wrap">
    <p class="detail-eyebrow">K-Beauty Halifax</p>
    <h1 class="detail-title">Book an<br />Appointment</h1>
    <div class="detail-rule">
      <div class="rule-line" />
      <div class="rule-dot" />
      <div class="rule-line" />
    </div>
    <div class="detail-body">
      <p class="detail-text">
        Have a question for one of our stylists? Need more info?<br />
        Give us a call or drop us a line below — we'll get back to you ASAP.
      </p>
      <p class="detail-text detail-notice">
        We require <strong>48 hours notice</strong> to reschedule or cancel
        appointments. For all inquiries, email us at
        <a href="mailto:kbeautysalonhfx@gmail.com" class="detail-link"
          >kbeautysalonhfx@gmail.com</a
        >
        or call <a href="tel:9024050399" class="detail-link">(902) 405-0399</a>.
      </p>
      <div class="confirm-badge">
        <svg viewBox="0 0 20 20" fill="none" class="confirm-icon">
          <circle cx="10" cy="10" r="9" stroke="#ffbf00" stroke-width="1.5" />
          <path
            d="M6.5 10.5l2.5 2.5 4.5-5"
            stroke="#ffbf00"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span
          >Reservation not confirmed until you receive a confirmation
          email.</span
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.detail-wrap {
  width: 100%;
  max-width: 560px;
}

.detail-eyebrow {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #ffbf00;
  margin-bottom: 18px;
}

.detail-title {
  font-family: 'Poppins', sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  margin-bottom: 24px;
}

.detail-rule {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
}

.rule-line {
  width: 32px;
  height: 1px;
  background-color: #ffbf00;
}

.rule-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #ffbf00;
  flex-shrink: 0;
}

.detail-body {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.detail-text {
  font-family: 'Noto Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.8;
  color: #555;
}

.detail-notice {
  padding: 18px 20px;
  border-left: 2px solid #ffbf00;
  background: rgba(255, 191, 0, 0.04);
}

.detail-link {
  color: #1a1a1a;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid rgba(26, 26, 26, 0.25);
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
}

.detail-link:hover {
  border-color: #ffbf00;
  color: #ff9d00;
}

.confirm-badge {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #999;
  line-height: 1.6;
}

.confirm-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-top: 1px;
}

@media only screen and (max-width: 786px) {
  .detail-title {
    font-size: 36px;
  }

  .detail-text {
    font-size: 13px;
  }

  .detail-text br {
    display: none;
  }
}

@media only screen and (max-width: 480px) {
  .detail-title {
    font-size: 28px;
  }
}
</style>
