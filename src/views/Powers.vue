<template>
    <div class="position-relative bg-gradient" style="height: 480px;">
        <div class="cs-shape cs-shape-bottom cs-shape-slant bg-secondary d-none d-lg-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 260">
            <polygon fill="currentColor" points="0,257 0,260 3000,260 3000,0"></polygon>
          </svg>
        </div>
      </div>
      <!-- Page content-->
      <div class="container bg-overlay-content pb-4 mb-md-3" style="margin-top: -350px;">
        <div class="row">
          <!-- Sidebar-->
          <sidebar></sidebar>
          <!-- Content-->
          <div class="col-lg-8">
            <div class="d-flex flex-column h-100 bg-light rounded-lg box-shadow-lg p-4">
              <div class="py-2 p-md-3">
                <!-- Title + Compose button-->
                <div class="d-sm-flex align-items-center justify-content-between pb-2 text-center text-sm-left">
                  <h1 class="h3 mb-3 text-nowrap">All Avengers<span class="d-inline-block align-middle bg-faded-success text-success font-size-ms font-weight-medium rounded-sm py-1 px-2 ml-2">1</span></h1>
                  <div class="mb-3"><a class="btn btn-translucent-primary" href="#message-compose" data-toggle="collapse"><i class="fe-plus mr-2"></i>Register</a></div>
                </div>
                <!-- Message compose form-->
                <div class="collapse" id="message-compose">
                  <form class="needs-validation box-shadow rounded mb-4" novalidate>
                    <div class="d-flex align-items-center justify-content-between bg-dark rounded-top py-3 px-4">
                      <h3 class="font-size-base text-light mb-0">New message</h3><a class="close text-light" href="#message-compose" data-toggle="collapse">&times;</a>
                    </div>
                    <div class="p-4">
                      <div class="form-group">
                        <input class="form-control" type="text" placeholder="To" required>
                        <div class="invalid-feedback">Please provide recipient(s) of your message!</div>
                      </div>
                      <div class="form-group">
                        <input class="form-control bg-image-0" type="text" placeholder="Subject">
                      </div>
                      <div class="form-group">
                        <textarea class="form-control" rows="5" required></textarea>
                        <div class="invalid-feedback">Please write your message!</div>
                      </div>
                      <button class="btn btn-primary" type="submit"><i class="fe-send font-size-lg mr-2"></i>Send</button>
                    </div>
                  </form>
                </div>
                <!-- Toolbar-->
                <div class="d-flex align-items-center justify-content-between bg-secondary py-2 px-3">
                  <div class="py-1">
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" type="checkbox" id="select-all" data-master-checkbox-for="#message-list">
                      <label class="custom-control-label" for="select-all">Select all</label>
                    </div>
                  </div>
                  <div class="py-1">
                    <div class="btn-group dropdown">
                      <button class="dropdown-toggle btn btn-light btn-sm" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Actions</button>
                      <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#"><i class="fe-eye-off mr-2"></i>Mark unread</a><a class="dropdown-item" href="#"><i class="fe-corner-up-left mr-2"></i>Reply</a><a class="dropdown-item" href="#"><i class="fe-corner-up-right mr-2"></i>Forward</a>
                        <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#"><i class="fe-trash-2 mr-2"></i>Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Message list (table)-->
                <table class="table table-hover border-bottom">
                  <tbody id="message-list">
                    <!-- Message-->
                    <tr id="item-message-1">
                      <td class="py-3 align-middle pl-2 pr-0" style="width: 2.5rem;">
                        <div class="custom-control custom-checkbox ml-2 mr-0">
                          <input class="custom-control-input" type="checkbox" id="message-1" data-checkbox-toggle-class="bg-faded-primary" data-target="#item-message-1">
                          <label class="custom-control-label" for="message-1"></label>
                        </div>
                      </td>
                      <td class="py-3 align-middle"><a class="media d-block d-sm-flex align-items-center text-decoration-none" href="#"><img class="rounded-circle mb-2 mb-sm-0" width="42" src="/img/dashboard/messages/01.jpg" alt="Edward Johnson"/>
                          <div class="media-body font-size-sm pl-sm-3">
                            <div class="d-sm-flex text-heading align-items-center">
                              <div class="d-flex align-items-center">
                                <div class="text-truncate font-weight-semibold" style="max-width: 10rem;">Edward Johnson</div><span class="nav-indicator"></span>
                              </div>
                              <div class="ml-sm-auto text-muted font-size-xs">Aug 13,2020</div>
                            </div>
                            <div class="pt-1 text-heading">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium...</div>
                          </div></a></td>
                    </tr>
                    <!-- Message-->
                    <tr id="item-message-2">
                      <td class="py-3 align-middle pl-2 pr-0" style="width: 2.5rem;">
                        <div class="custom-control custom-checkbox ml-2 mr-0">
                          <input class="custom-control-input" type="checkbox" id="message-2" data-checkbox-toggle-class="bg-faded-primary" data-target="#item-message-2">
                          <label class="custom-control-label" for="message-2"></label>
                        </div>
                      </td>
                      <td class="py-3 align-middle"><a class="media d-block d-sm-flex align-items-center text-decoration-none" href="#"><img class="rounded-circle mb-2 mb-sm-0" width="42" src="/img/dashboard/messages/02.jpg" alt="Emilia Young"/>
                          <div class="media-body font-size-sm pl-sm-3">
                            <div class="d-sm-flex text-heading align-items-center">
                              <div class="d-flex align-items-center">
                                <div class="text-truncate" style="max-width: 10rem;">Emilia Young</div>
                              </div>
                              <div class="ml-sm-auto text-muted font-size-xs">Aug 05,2020</div>
                            </div>
                            <div class="pt-1 text-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque...</div>
                          </div></a></td>
                    </tr>
                    <!-- Message-->
                    <tr id="item-message-3">
                      <td class="py-3 align-middle pl-2 pr-0" style="width: 2.5rem;">
                        <div class="custom-control custom-checkbox ml-2 mr-0">
                          <input class="custom-control-input" type="checkbox" id="message-3" data-checkbox-toggle-class="bg-faded-primary" data-target="#item-message-3">
                          <label class="custom-control-label" for="message-3"></label>
                        </div>
                      </td>
                      <td class="py-3 align-middle"><a class="media d-block d-sm-flex align-items-center text-decoration-none" href="#"><img class="rounded-circle mb-2 mb-sm-0" width="42" src="/img/dashboard/messages/03.jpg" alt="The Art Studio Inc."/>
                          <div class="media-body font-size-sm pl-sm-3">
                            <div class="d-sm-flex text-heading align-items-center">
                              <div class="d-flex align-items-center">
                                <div class="text-truncate" style="max-width: 10rem;">The Art Studio Inc.</div>
                              </div>
                              <div class="ml-sm-auto text-muted font-size-xs">Jul 18,2020</div>
                            </div>
                            <div class="pt-1 text-body">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae...</div>
                          </div></a></td>
                    </tr>
                    <!-- Message-->
                    <tr class="bg-faded-primary" id="item-message-4">
                      <td class="py-3 align-middle pl-2 pr-0" style="width: 2.5rem;">
                        <div class="custom-control custom-checkbox ml-2 mr-0">
                          <input class="custom-control-input" type="checkbox" id="message-4" data-checkbox-toggle-class="bg-faded-primary" data-target="#item-message-4" checked>
                          <label class="custom-control-label" for="message-4"></label>
                        </div>
                      </td>
                      <td class="py-3 align-middle"><a class="media d-block d-sm-flex align-items-center text-decoration-none" href="#"><img class="rounded-circle mb-2 mb-sm-0" width="42" src="/img/dashboard/messages/04.jpg" alt="Felicity Coleman"/>
                          <div class="media-body font-size-sm pl-sm-3">
                            <div class="d-sm-flex text-heading align-items-center">
                              <div class="d-flex align-items-center">
                                <div class="text-truncate" style="max-width: 10rem;">Felicity Coleman</div>
                              </div>
                              <div class="ml-sm-auto text-muted font-size-xs">Jul 10,2020</div>
                            </div>
                            <div class="pt-1 text-body">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit...</div>
                          </div></a></td>
                    </tr>
                    <!-- Message-->
                    <tr id="item-message-5">
                      <td class="py-3 align-middle pl-2 pr-0" style="width: 2.5rem;">
                        <div class="custom-control custom-checkbox ml-2 mr-0">
                          <input class="custom-control-input" type="checkbox" id="message-5" data-checkbox-toggle-class="bg-faded-primary" data-target="#item-message-5">
                          <label class="custom-control-label" for="message-5"></label>
                        </div>
                      </td>
                      <td class="py-3 align-middle"><a class="media d-block d-sm-flex align-items-center text-decoration-none" href="#"><img class="rounded-circle mb-2 mb-sm-0" width="42" src="/img/dashboard/messages/05.jpg" alt="Mike Rogers"/>
                          <div class="media-body font-size-sm pl-sm-3">
                            <div class="d-sm-flex text-heading align-items-center">
                              <div class="d-flex align-items-center">
                                <div class="text-truncate" style="max-width: 10rem;">Mike Rogers</div>
                              </div>
                              <div class="ml-sm-auto text-muted font-size-xs">Jun 30,2020</div>
                            </div>
                            <div class="pt-1 text-body">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus...</div>
                          </div></a></td>
                    </tr>
                    <!-- Message-->
                    <tr id="item-message-6">
                      <td class="py-3 align-middle pl-2 pr-0" style="width: 2.5rem;">
                        <div class="custom-control custom-checkbox ml-2 mr-0">
                          <input class="custom-control-input" type="checkbox" id="message-6" data-checkbox-toggle-class="bg-faded-primary" data-target="#item-message-6">
                          <label class="custom-control-label" for="message-6"></label>
                        </div>
                      </td>
                      <td class="py-3 align-middle"><a class="media d-block d-sm-flex align-items-center text-decoration-none" href="#"><img class="rounded-circle mb-2 mb-sm-0" width="42" src="/img/dashboard/messages/06.jpg" alt="Jeffrey Henderson"/>
                          <div class="media-body font-size-sm pl-sm-3">
                            <div class="d-sm-flex text-heading align-items-center">
                              <div class="d-flex align-items-center">
                                <div class="text-truncate" style="max-width: 10rem;">Jeffrey Henderson</div>
                              </div>
                              <div class="ml-sm-auto text-muted font-size-xs">Jun 26,2020</div>
                            </div>
                            <div class="pt-1 text-body">Et harum quidem rerum facilis est et expedita distinctio deleniti atque corrupti quos...</div>
                          </div></a></td>
                    </tr>
                    <!-- Message-->
                    <tr id="item-message-7">
                      <td class="py-3 align-middle pl-2 pr-0" style="width: 2.5rem;">
                        <div class="custom-control custom-checkbox ml-2 mr-0">
                          <input class="custom-control-input" type="checkbox" id="message-7" data-checkbox-toggle-class="bg-faded-primary" data-target="#item-message-7">
                          <label class="custom-control-label" for="message-7"></label>
                        </div>
                      </td>
                      <td class="py-3 align-middle"><a class="media d-block d-sm-flex align-items-center text-decoration-none" href="#"><img class="rounded-circle mb-2 mb-sm-0" width="42" src="/img/dashboard/messages/07.jpg" alt="Maria Sanchez"/>
                          <div class="media-body font-size-sm pl-sm-3">
                            <div class="d-sm-flex text-heading align-items-center">
                              <div class="d-flex align-items-center">
                                <div class="text-truncate" style="max-width: 10rem;">Maria Sanchez</div>
                              </div>
                              <div class="ml-sm-auto text-muted font-size-xs">Jun 14,2020</div>
                            </div>
                            <div class="pt-1 text-body">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus...</div>
                          </div></a></td>
                    </tr>
                    <!-- Message-->
                    <tr id="item-message-8">
                      <td class="py-3 align-middle pl-2 pr-0" style="width: 2.5rem;">
                        <div class="custom-control custom-checkbox ml-2 mr-0">
                          <input class="custom-control-input" type="checkbox" id="message-8" data-checkbox-toggle-class="bg-faded-primary" data-target="#item-message-8">
                          <label class="custom-control-label" for="message-8"></label>
                        </div>
                      </td>
                      <td class="py-3 align-middle"><a class="media d-block d-sm-flex align-items-center text-decoration-none" href="#"><img class="rounded-circle mb-2 mb-sm-0" width="42" src="/img/dashboard/messages/08.jpg" alt="Best Ever Company Ltd."/>
                          <div class="media-body font-size-sm pl-sm-3">
                            <div class="d-sm-flex text-heading align-items-center">
                              <div class="d-flex align-items-center">
                                <div class="text-truncate" style="max-width: 10rem;">Best Ever Company Ltd.</div>
                              </div>
                              <div class="ml-sm-auto text-muted font-size-xs">Jun 08,2020</div>
                            </div>
                            <div class="pt-1 text-body">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit aliquid...</div>
                          </div></a></td>
                    </tr>
                    <!-- Message-->
                    <tr id="item-message-9">
                      <td class="py-3 align-middle pl-2 pr-0" style="width: 2.5rem;">
                        <div class="custom-control custom-checkbox ml-2 mr-0">
                          <input class="custom-control-input" type="checkbox" id="message-9" data-checkbox-toggle-class="bg-faded-primary" data-target="#item-message-9">
                          <label class="custom-control-label" for="message-9"></label>
                        </div>
                      </td>
                      <td class="py-3 align-middle"><a class="media d-block d-sm-flex align-items-center text-decoration-none" href="#"><img class="rounded-circle mb-2 mb-sm-0" width="42" src="/img/dashboard/messages/09.jpg" alt="Daniel Adams"/>
                          <div class="media-body font-size-sm pl-sm-3">
                            <div class="d-sm-flex text-heading align-items-center">
                              <div class="d-flex align-items-center">
                                <div class="text-truncate" style="max-width: 10rem;">Daniel Adams</div>
                              </div>
                              <div class="ml-sm-auto text-muted font-size-xs">May 23,2020</div>
                            </div>
                            <div class="pt-1 text-body">Reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores...</div>
                          </div></a></td>
                    </tr>
                  </tbody>
                </table>
                <!-- Pagination-->
                <nav class="d-md-flex justify-content-between align-items-center text-center text-md-left pt-3">
                  <div class="d-md-flex align-items-center w-100"><span class="font-size-sm text-muted mr-md-3">Showing 9 of 84 messages</span>
                    <div class="progress w-100 my-3 mx-auto mx-md-0" style="max-width: 10rem; height: 4px;">
                      <div class="progress-bar" role="progressbar" style="width: 12%;" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <button class="btn btn-outline-primary btn-sm" type="button">Load older messages</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from "../components/Sidebar.vue"
export default defineComponent({
    components: {
        Sidebar
    }
})
</script>