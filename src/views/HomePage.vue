<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container" class='mx-auto'>
            <p class="form-title text-orange-500 text-2xl">Connectez-vous pour accéder à votre compte</p>
              <ion-toast :is-open="isOpenRef" @didDismiss="setOpen(false)" message="Hello World!" :duration="1500"></ion-toast>
            <form @submit.prevent="submit">
                <input v-model='form.email' type="email" placeholder="E-mail"/> <br/>
                <input v-model='form.password' type="password" placeholder="Mot de passe"/><br/>
                <button type="submit" v-if="! loading">Se connecter maintenant</button>
            </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent,
        IonPage,
        IonToast
} from '@ionic/vue';

import { ref } from 'vue';
import useLogin  from '@/composables/auth.js';


const isOpenRef = ref(false);
const { login, loading } = useLogin();

const setOpen = (state) => (isOpenRef.value = state);

const form = ref({
  email: '',
  password: '',
});

const submit = async () => {
   await login(form.value);
   setOpen(true);
}

</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}



#container a {
  text-decoration: none;
}

</style>
