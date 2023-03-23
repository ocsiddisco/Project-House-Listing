<!-- popup delete listing -->
<!-- parent component: -->
<!-- <button @click="showPopup = true">show popup</button>
<popop v-show="showPopup"@close="showPopup = false" />

<script>
import { defineComponent } from '@vue/composition-api'

        export default {
            name: 'App',
            components: {
                Popup,
            },
        data(){
            return {
                showPopup: false
            }
        }
        }
        possibilit to add a methode that returns data from childr to component
        methods: {
            closePopup(name){
                this.showPopup = false
            }
        }

</script> -->

<!-- <button @click="$emit('close')">close popup</button>


<script>
import { defineComponent } from '@vue/composition-api'

        export default {
            name: 'App',
            emits: ['close'],
            components: {
                Popup,
            },
        data(){
            return {
                showPopup: false
            }
        }
        }

    }
</script>