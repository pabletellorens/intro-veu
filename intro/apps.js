
const { createApp, ref} = Vue;

const app = createApp({
    template: `
    <h1>{{ nuntius }} </h1>
    <p>{{ auctor }}</p>
    
    `,

    setup() {

        const nuntius = ref("I'm Batman");

        const auctor = ref("Batman")
/*
        setTimeout(() => {
            nuntius.value = "Soy Goku";

            auctor.value = "Goku"
        }, 1000); */

        const mutareSentencia= () => {
            nuntius.valie = "Hola, soy G";
            auctor.value = "Goku"
        }

        return {
            nuntius,
            auctor,
            mutareSentencia,
        }
    }
})

app.mount("#myApp")