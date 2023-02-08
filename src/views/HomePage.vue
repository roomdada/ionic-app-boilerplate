<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="font-sans text-gray-900 antialiased">
            <!-- Page Container -->
    <div id="page-container" class="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
        <!-- Page Content -->
        <div class="w-full h-screen  md:flex lg:flex xl:flex">
            <div class="bg-white flex justify-center flex-col lg:w-5/12 xl:w-5/12 md:w-6/12 w-full shadow-lg">
                <div class="flex font-bold justify-center mb-6 mt-2">
                    <img class="h-auto w-1/3" src="/assets/logo-ciprel-vf.png" alt="Logo">
                </div>
                <div class="w-full text-center px-16">
                    <form class="w-full bg-white rounded-lg" method="POST" action="" @submit.prevent='submit'>
                        <h2 class="text-xl text-center text-gray-700 my-4 mb-8 px-18">
                            Bienvenue, veuillez-vous connecter à votre compte
                        </h2>
                        <x-auth-validation-errors />
                        <div class="px-2 pb-4">
                            <div class="w-full mt-8 mb-4">
                                <div class="flex items-center">
                                    <input type="text" id="tk-pages-sign-in-email" placeholder="Entrez votre email"
                                        name="email"
                                        class="px-2 w-full border rounded py-2 bg-opacity-25 text-gray-600 focus:outline-none bg-gray-100"
                                        required autofocus />
                                </div>
                            </div>

                            <div class="w-full mt-4">
                                <div class="flex items-center">
                                    <input type="password" id="tk-pages-sign-in-password" name="password"
                                        placeholder="Entrez votre mot de passe"
                                        class="px-2 w-full border rounded py-2 bg-opacity-25 text-gray-600 focus:outline-none bg-gray-100"
                                        required autocomplete="current-password" />
                                </div>
                            </div>
                            <button type="submit"
                                class="w-full text-secondary-content uppercase px-4 rounded py-3 font-medium bg-primary mt-4  focus:outline-none">
                                Connectez-vous
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <img src="/assets/login_image.jpg" alt="background"
                class="object-cover object-center h-screen w-full md:w-6/12 lg:w-7/12 xl:w-7/12">
        </div>
    </div>
      </div>
      {{ loading }}
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent,
        IonPage,
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
