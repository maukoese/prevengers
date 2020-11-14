<template>
	<div class="col-lg-4 mb-4 mb-lg-0">
		<div class="bg-light rounded-lg box-shadow-lg">
			<div class="px-4 py-4 mb-1 text-center">
				<img
					class="d-block rounded-circle mx-auto my-2"
					width="110"
					src="@/assets/A-Nick.jpg"
					alt="Nick Fury"
				/>
				<h6 class="mb-0 pt-1">Nick Fury</h6>
				<span class="text-muted font-size-sm">@fury</span>
			</div>
			<div class="d-lg-none px-4 pb-4 text-center">
				<a
					class="btn btn-primary px-5 mb-2"
					href="#account-menu"
					data-toggle="collapse"
					><i class="fe-menu mr-2"></i>Account menu</a
				>
			</div>
			<div class="d-lg-block collapse pb-2" id="account-menu">
				<h3
					class="d-block bg-secondary font-size-sm font-weight-semibold text-muted mb-0 px-4 py-3"
				>
					Dashboard
				</h3>
				<a
					class="d-flex align-items-center nav-link-style px-4 py-3"
					href="dashboard-orders.html"
					><i class="fe-shopping-bag font-size-lg opacity-60 mr-2"></i
					>Orders<span class="nav-indicator"></span
					><span
						class="text-muted font-size-sm font-weight-normal ml-auto"
						>2</span
					></a
				>
				<template v-for="s in routes" :key="s.name">
					<li class="navigation-header" v-if="s.meta.sidebar">
						<span
							v-if="s.name && s.name.length"
							:data-i18n="s.name"
						>
							{{ s.name }}
						</span>
						<span v-else :data-i18n="s.meta.title">
							{{ s.meta.title }}
						</span>
					</li>
					<template v-if="s.children">
						<template v-for="r in s.children" :key="r.name">
							<li
								v-if="r.meta.sidebar"
								class="nav-item"
								:class="{
									'has-sub': r.children,
									active:
										$route.path.includes(r.path) &&
										r.path !== '/',
								}"
							>
								<router-link
									:to="r.path"
									v-if="!r.children"
									class="no-children"
								>
									<i
										class="menu-livicon"
										:data-icon="r.meta.icon"
									></i>
									<span
										class="menu-title"
										v-if="r.name && r.name.length"
										:data-i18n="r.name"
									>
										{{ r.name }}
									</span>
									<span
										class="menu-title"
										v-else
										:data-i18n="r.meta.title"
									>
										{{ r.meta.title }}
									</span>
								</router-link>
								<a
									href="#"
									v-if="r.children"
									class="has-children"
								>
									<i
										class="menu-livicon"
										:data-icon="r.meta.icon"
									></i>
									<span
										class="menu-title"
										v-if="r.name && r.name.length"
									>
										{{ r.name }}
									</span>
									<span class="menu-title" v-else>
										{{ r.meta.title }}
									</span>
								</a>
								<ul class="menu-content" v-if="r.children">
									<li
										class="nav-item"
										v-for="c in r.children"
										:key="c.path"
										v-show="c.meta.sidebar"
									>
										<router-link
											:to="
												c.path.length
													? r.path + `/` + c.path
													: r.path
											"
										>
											<i
												class="fe-right-arrow-alt"
											></i>
											<span
												class="menu-item"
												v-if="c.name && c.name.length"
												:data-i18n="c.name"
											>
												{{ c.name }}
											</span>
											<span
												class="item"
												v-else
												:data-i18n="c.meta.title"
											>
												{{ c.meta.title }}
											</span>
										</router-link>
									</li>
								</ul>
								<!-- .nk-menu-sub -->
							</li>
						</template>
					</template>
				</template>
				<div class="d-flex align-items-center border-top">
					<a
						class="d-block w-100 nav-link-style px-4 py-3"
						href="account-notifications.html"
						>Notifications</a
					>
					<div class="ml-auto px-3">
						<div class="custom-control custom-switch">
							<input
								class="custom-control-input"
								type="checkbox"
								id="notifications-switch"
								data-master-checkbox-for="#notification-settings"
								checked
							/>
							<label
								class="custom-control-label"
								for="notifications-switch"
							></label>
						</div>
					</div>
				</div>
				<a
					class="d-flex align-items-center nav-link-style px-4 py-3 border-top"
					href="signin-illustration.html"
					><i class="fe-log-out font-size-lg opacity-60 mr-2"></i>Sign
					out</a
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, computed } from "vue";
	import router from "../router";
	export default defineComponent({
		setup() {
			const routes = computed(() => router.options.routes);
			return {
				routes,
			};
		},
	});
</script>
