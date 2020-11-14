<template>
	<form>
        <div class="form-group" v-for="f in fields" :key="f.name">
            <label>{{ f.label }}</label>
            <input class="form-control" :type="f.type" :id="f.name" v-model="avenger[f.name]">
        </div>
    </form>
</template>

<script lang="ts">
	import { defineComponent, reactive } from "vue";
	import http from "../services/http";

	export default defineComponent({
		props: {
			fields: Array,
		},
		setup(_, {emit}) {
			const avenger = reactive({});

			function saveRecord() {
				http.post("/", avenger).then((res) => {
                    emit('onsave');
                });
			}
			return { avenger, saveRecord };
		},
	});
</script>
