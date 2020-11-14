<template>
	<form>
        <div class="form-group" v-for="f in fields" :key="f.name">
            <label>{{ f.label }}</label>
            <input class="form-control" :type="f.type" :id="f.name" v-model="form[f.name]">
        </div>
    </form>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";
	import http from "../services/http";

	export default defineComponent({
		props: {
			fields: Array,
		},
		setup(_, {emit}) {
			const form = ref({});

			function saveRecord() {
				http.post("/", form).then((res) => {
                    emit('onsave');
                });
			}
			return { form, saveRecord };
		},
	});
</script>
