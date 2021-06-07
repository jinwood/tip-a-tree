<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Let's plant a tree!</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Reddit Username</label>
                    <input type="text" class="form-control" v-model="tip.userName" required>
                </div>

                <div class="form-group">
                    <label>Post URL</label>
                    <input type="text" class="form-control" v-model="tip.postUrl" required>
                </div>

                <div class="form-group">
                    <label>Amount ($)</label>
                    <input type="text" class="form-control" v-model="tip.amount" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Plant a tree</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebase';

    export default {
        data() {
            return {
                tip: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('tips').add(this.tip).then(() => {
                    console.log("tip successfully created!");
                    this.tip.userName = ''
                    this.tip.postUrl = ''
                    this.tip.amount = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>
