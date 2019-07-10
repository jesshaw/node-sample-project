// @ is an alias to /src
import HelloWorld from '@/components/hello-world.vue';

export default {
    name: 'home',
    components: {
        'hello-world': HelloWorld,
    },
};
