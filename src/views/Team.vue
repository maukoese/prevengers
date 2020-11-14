<template>
	<div class="position-relative bg-gradient" style="height: 480px;">
		<div
			class="cs-shape cs-shape-bottom cs-shape-slant bg-secondary d-none d-lg-block"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 260">
				<polygon
					fill="currentColor"
					points="0,257 0,260 3000,260 3000,0"
				></polygon>
			</svg>
		</div>
	</div>
	<!-- Page content-->
	<div
		class="container bg-overlay-content pb-4 mb-md-3"
		style="margin-top: -350px;"
	>
		<div class="row">
			<!-- Sidebar-->
			<sidebar></sidebar>
			<!-- Content-->
			<div class="col-lg-8">
				<div
					class="d-flex flex-column h-100 bg-light rounded-lg box-shadow-lg p-4"
				>
					<div class="py-2 p-md-3">
						<!-- Title + Compose button-->
						<div
							class="d-sm-flex align-items-center justify-content-between pb-2 text-center text-sm-left"
						>
							<h1 class="h3 mb-3 text-nowrap">
								All Avengers<span
									class="d-inline-block align-middle bg-faded-success text-success font-size-ms font-weight-medium rounded-sm py-1 px-2 ml-2"
									>{{ avengers.total }}</span
								>
							</h1>
							<div class="mb-3">
								<a
									class="btn btn-translucent-primary"
									href="#message-compose"
									data-toggle="collapse"
									><i class="fe-plus mr-2"></i>Register</a
								>
							</div>
						</div>
						<!-- Message compose form-->
						<div class="collapse" id="message-compose">
							<form
								class="needs-validation box-shadow rounded mb-4"
								novalidate
								@submit.prevent="saveAvenger"
							>
								<div
									class="d-flex align-items-center justify-content-between bg-dark rounded-top py-3 px-4"
								>
									<h3 class="font-size-base text-light mb-0">
										New Avenger
									</h3>
									<a
										class="close text-light"
										href="#message-compose"
										data-toggle="collapse"
										>&times;</a
									>
								</div>
								<div class="p-4">
									<div class="form-group">
										<input
											class="form-control"
											type="text"
											placeholder="Full Name"
											required
                      v-model="avenger.name"
										/>
										<div class="invalid-feedback">
											Please provide recipient(s) of your
											message!
										</div>
									</div>
									<div class="form-group">
										<input
											class="form-control bg-image-0"
											type="text"
											placeholder="Nickname"
                      v-model="avenger.nickname"
										/>
									</div>
									<div class="form-group">
										<textarea
											class="form-control"
											rows="5"
											required
                      v-model="avenger.description"
										></textarea>
										<div class="invalid-feedback">
                      Details <span v-if="avenger.nickname">
                     About {{ avenger.nickname }}
                    </span>
										</div>
									</div>
									<div class="form-group">
										<input
											class="form-control bg-image-0"
											type="text"
											placeholder="Avenger Logo"
                      v-model="avenger.avatar"
										/>
									</div>
									<button
										class="btn btn-primary"
										type="submit"
									>
										<i class="fe-send font-size-lg mr-2"></i
										>Create Profile <span v-if="avenger.nickname">
                     for {{ avenger.nickname }}
                    </span>
									</button>
								</div>
							</form>
						</div>
						<!-- Toolbar-->
						<div
							class="d-flex align-items-center justify-content-between bg-secondary py-2 px-3"
						>
							<div class="py-1">
								<div class="custom-control custom-checkbox">
									<input
										class="custom-control-input"
										type="checkbox"
										id="select-all"
										data-master-checkbox-for="#message-list"
									/>
									<label
										class="custom-control-label"
										for="select-all"
										>Select all</label
									>
								</div>
							</div>
							<div class="py-0">
								<input class="form-control form-control-sm" placeholder="Start typing to search" v-model="search" @keyup="assembleAvengers">
							</div>
						</div>
						<!-- Message list (table)-->
						<table class="table table-hover border-bottom">
							<tbody id="message-list">
								<!-- Message-->
								<tr
									id="item-message-1"
									v-for="a in avengers.data"
									:key="a.id"
								>
									<td
										class="py-3 align-middle pl-2 pr-0"
										style="width: 2.5rem;"
									>
										<div
											class="custom-control custom-checkbox ml-2 mr-0"
										>
											<input
												class="custom-control-input"
												type="checkbox"
												id="message-1"
												data-checkbox-toggle-class="bg-faded-primary"
												data-target="#item-message-1"
											/>
											<label
												class="custom-control-label"
												for="message-1"
											></label>
										</div>
									</td>
									<td class="py-3 align-middle">
										<a
											class="media d-block d-sm-flex align-items-center text-decoration-none"
											href="#"
											><img
												class="rounded-circle mb-2 mb-sm-0"
												width="42"
												:src="a.avatar"
												:alt="a.name"
											/>
											<div
												class="media-body font-size-sm pl-sm-3"
											>
												<div
													class="d-sm-flex text-heading align-items-center"
												>
													<div
														class="d-flex align-items-center"
													>
														<div
															class="text-truncate font-weight-semibold"
															style="max-width: 10rem;"
														>
															{{ a.name }}
														</div>
														<span
															class="nav-indicator d-none"
														></span>
													</div>
													<div
														class="ml-sm-auto text-muted font-size-xs"
													>
														{{ a.nickname }}
													</div>
												</div>
												<div class="pt-1 text-heading">
													{{ a.description }}
												</div>
											</div></a
										>
									</td>
								</tr>
							</tbody>
						</table>
						<!-- Pagination-->
						<nav
							class="d-md-flex justify-content-between align-items-center text-center text-md-left pt-3"
						>
							<div class="d-md-flex align-items-center w-100">
								<div
									class="progress w-100 my-3 mx-auto mx-md-0"
									style="max-width: 10rem; height: 4px;"
								>
									<div
										class="progress-bar"
										role="progressbar"
										:style="{ width: progress }"
										:aria-valuenow="avengers.current_page"
										aria-valuemin="0"
										:aria-valuemax="avengers.last_page"
									></div>
								</div>
							</div>
							<!-- <button
								class="btn btn-outline-primary btn-sm"
								type="button"
							>
								Load older messages
							</button> -->
							<paginate :data="avengers" @changed="assembleAvengers" />
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { computed, defineComponent, onMounted, reactive, ref } from "vue";
	import Sidebar from "../components/Sidebar.vue";
	import http from "../services/http";

	export default defineComponent({
		components: {
			Sidebar,
		},
		setup() {
			const search = ref("");
			const avenger = reactive({
				name: "",
				nickname: "",
				description: "",
				avatar: "",
			});
			const avengers = ref({
				data: [],
				current_page: 0,
				last_page: 1,
			});

			function assembleAvengers(page = 1) {
				if (search.value.length) {
					http.get(`/api/users?s=${search.value}`).then(
						(res) => {
							avengers.value = res.data;
						}
					);
				} else {
					http.get(`/api/users?page=${page}`).then((res) => {
						avengers.value = res.data;
					});
				}
			}

			function saveAvenger() {
				http.post("/api/users", avenger).then((res: any) => {
					if (res.status == "success") {
						assembleAvengers();
					}
				});
			}

			const progress = computed(() => {
				const p =
					(avengers.value.current_page / avengers.value.last_page) *
					100;
				return `${p}%`;
			});

			onMounted(() => {
				assembleAvengers();
			});

			return { avenger, avengers, search, assembleAvengers, saveAvenger, progress };
		},
	});
</script>
