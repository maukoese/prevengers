<script>
	import { defineComponent } from "vue";
	export default defineComponent({
		props: {
			maxVisibleAs: {
				type: Number,
				required: false,
				default: 3,
			},
			data: {
				type: Object,
				required: true,
			},
		},
		computed: {
			startPage() {
				if (this.data.current_page === 1) {
					return 1;
				}
				if (this.data.current_page === this.data.last_page) {
					return this.data.last_page - this.maxVisibleAs + 1;
				}
				return this.data.current_page - 1;
			},
			endPage() {
				return Math.min(
					this.startPage + this.maxVisibleAs - 1,
					this.data.last_page
				);
			},
			pages() {
				const range = [];
				for (let i = this.startPage; i <= this.endPage; i += 1) {
					range.push({
						name: i,
						isDisabled: i === this.data.current_page,
					});
				}
				return range;
			},
			isOnFirstPage() {
				return this.data.current_page === 1;
			},
			isOnLastPage() {
				return this.data.current_page === this.data.last_page;
			},
		},
		methods: {
			onClickFirstPage() {
				this.$emit("changed", 1);
			},
			onClickPreviousPage() {
				this.$emit("changed", this.data.current_page - 1);
			},
			onClickPage(page) {
				this.$emit("changed", page);
			},
			onClickNextPage() {
				this.$emit("changed", this.data.current_page + 1);
			},
			onClickLastPage() {
				this.$emit("changed", this.data.last_page);
			},
			isPageActive(page) {
				return this.data.current_page === page;
			},
		},
	});
</script>
<template>
	<ul class="pagination pagination-borderless pagination-dark justify-content-center mt-2">
		
		<li class="page-item previous">
			<a
				class="page-link"
				@click="onClickPreviousPage"
				:disabled="isOnFirstPage"
				:class="{ disabled: isOnFirstPage }"
			>
				<i class="fe-chevron-left"></i>
			</a>
		</li>

		<li
			v-for="page in pages"
			class="page-item"
			:key="page.name"
			:class="{ active: isPageActive(page.name) }"
		>
			<a
				href="#"
				class="page-link"
				@click="onClickPage(page.name)"
				:disabled="page.isDisabled"
				:class="[
					{ disabled: page.isDisabled },
				]"
			>
				{{ page.name }}
			</a>
		</li>

		<li class="page-item next" :class="{ disabled: isOnLastPage }">
			<a
				class="page-link"
				@click="onClickNextPage"
				:disabled="isOnLastPage"
			>
				
				<i class="fe-chevron-right"></i>
			</a>
		</li>
	</ul>
</template>