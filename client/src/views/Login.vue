<template>
  <div>
    <v-row>
      <v-col></v-col>
      <v-col cols="10">
        <v-layout>
          <v-flex xs12>
            <v-form ref="form" @submit.prevent="onSubmit">
              <v-row>
                <v-container>
                  <v-alert v-if="error" type="error">
                    {{ errorMsg }}
                  </v-alert>
                  <h1>Login</h1>
                  <v-text-field
                    v-model="form.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Enter your password"
                    v-model="form.password"
                    min="8"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    @click:append="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    :rules="passwordRules"
                    counter
                    required
                  ></v-text-field>
                  <v-btn block color="rgb(0, 43, 92)" dark @click="onSubmit"
                    >Login</v-btn
                  >
                </v-container>
              </v-row>
              <v-row></v-row>
            </v-form>
          </v-flex>
        </v-layout>
        <v-flex xs12>
          <v-container style="width:50%;margin:0 auto;text-align:center;">
            <p class="py-2">OR</p>
            <p>Sign in with Microsoft</p>
            <v-btn
              class="ma-2"
              tile
              dark
              color="rgb(0, 43, 92)"
              @click="login"
            >
              <v-icon left>mdi-microsoft</v-icon> Sign-In
            </v-btn>
          </v-container>
        </v-flex>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      error: false,
      response: null,
      errorMsg: "",
      form: {
        email: "",
        password: "",
      },
      e1: true,
      passwordRules: [(v) => !!v || "Password is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    async onSubmit() {
      try {
        const res = await axios.post(
          "https://directoryappdf.azurewebsites.net/api/v1/login",
          this.form
        );
        console.log(res);
        if (res.data.auth === true) {
          this.$router.push({ name: "Directory" });
          console.log(res);
          this.$emit("set-auth", res.data._user);
        } else {
          (this.error = true),
            (this.errorMsg = "Some Details were entered incorrectly");
          this.form.email = "";
          this.form.password = "";
        }
      } catch (err) {
        this.error = true;
        this.errorMsg = err;
        this.form.email = "";
        this.form.password = "";
      }
    },
    login() {
      this.$emit('set-auth')
    }
  },
};
</script>

<style scoped></style>
