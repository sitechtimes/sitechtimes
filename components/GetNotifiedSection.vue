<template>
  <div class="footer-form-box">
    <h2 class="footer-header-container">
      <span class="footer-header">Get Notified</span>
      <span class="footer-sub-header">Sign up for our newsletter!</span>
    </h2>
    <form class="footer-form" action="#" >
      <label class="footer-form-label" for="email">Email</label>
      <div class="footer-inputs">
          <input
          v-on:click="seeLabel()"
          class="footer-email-input"
          type="text"
          id="email"
          placeholder="Email"
          name="mail"
          required
        />
        <input class="footer-join-btn" type="submit" value="Join" />
      </div>
      <!-- <p class="footer-form-alert">Success!</p> -->
    </form>
  </div>
</template>

<script>
export default {
  name: "GetNotifiedSection",
  methods: {
    seeLabel: function() {
      const label = document.querySelector(".footer-form-label");
      label.style.opacity = "1";
    },
  },
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";
    .footer-form-box {
        padding-bottom: 5.1rem;
        border-bottom: .2rem solid var(--primary-color);
    }
    .footer-header-container {
        display: flex;
        flex-direction: column;
    }
    .footer-header,
    .footer-sub-header {
        font-size: var(--h2);
        text-align: center;
        color: var(--footer-header-color);
        font-weight: 700;
    }
    .footer-sub-header {
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
    .footer-form-label {
        opacity: 0;
        font-size: 1.5rem;
        letter-spacing: .05rem;
        color: var(--accent-color);
        transition: all .2s; 
    }
    .footer-email-input, .footer-join-btn {
        margin-top: .2rem;
        border: none;
        background-color: var(--accent-color);
        border-radius: 5rem;
    }
    .footer-inputs {
        display: flex; 
    }
    .footer-email-input {
        width: 36rem;
        font-size: 1.6rem;
        font-family: var(--font);
        padding: 1.3rem 2.2rem;
        padding-right: 9.7rem;
    }
    .footer-email-input:focus {
        outline: none;
    }
    .footer-email-input:focus::placeholder {
        color: transparent;
    }
    .footer-email-input:focus .footer-form-label {
        visibility: visible;
    }
    .footer-join-btn {
        width: 7.5rem;
        margin-left: -7.5rem;
        font-family: var(--font);
        font-size: var(--h5);
        font-weight: 700;
        background-color: var(--primary-color);
        text-transform: uppercase;
        transition: all .3s;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        opacity: 1;
        cursor: pointer;
    }
    .footer-join-btn:hover {
        background-color: var(--hover);
    }
    // .footer-form-alert {
    //     opacity: 0;
    //     transition: .2s;
    // }


      @media only screen and (max-width: $mid-screen) {
        .footer-form-box {
          border-bottom: none;
          padding-bottom: 0;
        }
        .footer-sub-header {
          font-size: var(--h4);
          font-weight: 500;
        }
        .footer-email-input {
          padding: 1.6rem 2rem;
          padding-right: 12rem;
        }
        .footer-join-btn {
          width: 10rem;
          margin-left: -10rem;
        }
        .footer-join-btn:hover {
          background-color: var(--primary-color);
        }
        .footer-email-input,
        .footer-join-btn {
          margin-top: 0.5rem;
        }
        .footer-email-input,
        .footer-join-btn,
        .footer-form-label {
          font-size: 2rem;
        }
      }
    @media only screen and (max-width: $small-screen) {
      .footer-email-input,
        .footer-join-btn,
        .footer-form-label {
          font-size: 2.25rem;
        }
    }
    @media only screen and (max-width: $x-small-screen) {
      .footer-email-input {
        max-width: 100%;
      }
    }
      
</style>

<!--<docs>-->
<!--This is the section of the footer with a form that allows the user to subscribe to the newsletter.-->

<!--## Variables Used:-->
<!--&#45;&#45;font, &#45;&#45;primary-color, &#45;&#45;accent-color, &#45;&#45;h3-->
<!--## Examples-->
<!--```jsx-->
<!--<GetNotifiedSection />-->
<!--```-->

<!--</docs>-->
