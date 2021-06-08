<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Let's plant a tree!</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Reddit Username</label>
          <input
            type="text"
            class="form-control"
            v-model="tip.userName"
            required
          />
        </div>

        <div class="form-group">
          <label>Post URL</label>
          <input
            type="text"
            class="form-control"
            v-model="tip.postUrl"
            required
          />
        </div>

        <div class="form-group">
          <label>Amount ($)</label>
          <input
            type="text"
            class="form-control"
            v-model="tip.amount"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Plant a tree</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createTip } from "../services/tip";

export default {
  data() {
    return {
      tip: {
        userName: "foobar",
        postUrl: "www.foo.com",
        amount: 1,
      },
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      createTip(this.tip);
    },
  },
};
</script>
