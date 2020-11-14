<template><!-- Page loading spinner-->
    <div class="cs-page-loading active">
      <div class="cs-page-loading-inner">
        <div class="cs-page-spinner"></div>
        <span>Loading...</span>
      </div>
    </div>
    <main class="cs-page-wrapper">
      <!-- Sign In Modal-->
      <div class="modal fade" id="modal-signin" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content border-0">
            <div class="cs-view show" id="modal-signin-view">
              <div class="modal-header border-0 bg-dark px-4">
                <h4 class="modal-title text-light">Sign in</h4>
                <button class="close text-light" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div class="modal-body px-4">
                <p class="font-size-ms text-muted">Sign in to your account using email and password provided during registration.</p>
                <form class="needs-validation" novalidate>
                  <div class="input-group-overlay form-group">
                    <div class="input-group-prepend-overlay"><span class="input-group-text"><i class="fe-mail"></i></span></div>
                    <input class="form-control prepended-form-control" type="email" placeholder="Email" required>
                  </div>
                  <div class="input-group-overlay cs-password-toggle form-group">
                    <div class="input-group-prepend-overlay"><span class="input-group-text"><i class="fe-lock"></i></span></div>
                    <input class="form-control prepended-form-control" type="password" placeholder="Password" required>
                    <label class="cs-password-toggle-btn">
                      <input class="custom-control-input" type="checkbox"><i class="fe-eye cs-password-toggle-indicator"></i><span class="sr-only">Show password</span>
                    </label>
                  </div>
                  <div class="d-flex justify-content-between align-items-center form-group">
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" type="checkbox" id="keep-signed">
                      <label class="custom-control-label" for="keep-signed">Keep me signed in</label>
                    </div><a class="nav-link-style font-size-ms" href="password-recovery.html">Forgot password?</a>
                  </div>
                  <button class="btn btn-primary btn-block" type="submit">Sign in</button>
                  <p class="font-size-sm pt-3 mb-0">Don't have an account? <a href='#' class='font-weight-medium' data-view='#modal-signup-view'>Sign up</a></p>
                </form>
              </div>
            </div>
            <div class="cs-view" id="modal-signup-view">
              <div class="modal-header border-0 bg-dark px-4">
                <h4 class="modal-title text-light">Sign up</h4>
                <button class="close text-light" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div class="modal-body px-4">
                <p class="font-size-ms text-muted">Registration takes less than a minute but gives you full control over your orders.</p>
                <form class="needs-validation" novalidate>
                  <div class="form-group">
                    <input class="form-control" type="text" placeholder="Full name" required>
                  </div>
                  <div class="form-group">
                    <input class="form-control" type="text" placeholder="Email" required>
                  </div>
                  <div class="cs-password-toggle form-group">
                    <input class="form-control" type="password" placeholder="Password" required>
                    <label class="cs-password-toggle-btn">
                      <input class="custom-control-input" type="checkbox"><i class="fe-eye cs-password-toggle-indicator"></i><span class="sr-only">Show password</span>
                    </label>
                  </div>
                  <div class="cs-password-toggle form-group">
                    <input class="form-control" type="password" placeholder="Confirm password" required>
                    <label class="cs-password-toggle-btn">
                      <input class="custom-control-input" type="checkbox"><i class="fe-eye cs-password-toggle-indicator"></i><span class="sr-only">Show password</span>
                    </label>
                  </div>
                  <button class="btn btn-primary btn-block" type="submit">Sign up</button>
                  <p class="font-size-sm pt-3 mb-0">Already have an account? <a href='#' class='font-weight-medium' data-view='#modal-signin-view'>Sign in</a></p>
                </form>
              </div>
            </div>
            <div class="modal-body text-center px-4 pt-2 pb-4">
              <hr>
              <p class="font-size-sm font-weight-medium text-heading pt-4">Or sign in with</p><a class="social-btn sb-facebook sb-lg mx-1 mb-2" href="#"><i class="fe-facebook"></i></a><a class="social-btn sb-twitter sb-lg mx-1 mb-2" href="#"><i class="fe-twitter"></i></a><a class="social-btn sb-instagram sb-lg mx-1 mb-2" href="#"><i class="fe-instagram"></i></a><a class="social-btn sb-google sb-lg mx-1 mb-2" href="#"><i class="fe-google"></i></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Navbar Floating light for Index page only-->
      <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
      <header class="cs-header navbar navbar-expand-lg navbar-dark navbar-floating navbar-sticky">
        <div class="container px-0 px-xl-3">
          <button class="navbar-toggler ml-n2 mr-2" type="button" data-toggle="offcanvas" data-offcanvas-id="primaryMenu"><span class="navbar-toggler-icon"></span></button>
          <a class="navbar-brand order-lg-1 mx-auto ml-lg-0 pr-lg-2 mr-lg-4" href="index-2.html">
            <img class="navbar-floating-logo d-none d-lg-block" width="153" src="./assets/A.jpg" alt="Around"/>
            <img class="navbar-stuck-logo" width="153" src="img/logo/logo-dark.png" alt="Around"/>
            <img class="d-lg-none" width="58" src="img/logo/logo-icon.png" alt="Around"/></a>
          <div class="d-flex align-items-center order-lg-3 ml-lg-auto">
            <a class="btn btn-primary" href="https://themes.getbootstrap.com/product/around-multipurpose-template-ui-kit/" target="_blank" rel="noopener"><i class="fe-shopping-cart font-size-lg mr-2"></i>Buy <span class='d-none d-lg-inline'>Template</span></a></div>
          <div class="cs-offcanvas-collapse order-lg-2" id="primaryMenu">
            <div class="cs-offcanvas-cap navbar-box-shadow">
              <h5 class="mt-1 mb-0">Menu</h5>
              <button class="close lead" type="button" data-toggle="offcanvas" data-offcanvas-id="primaryMenu"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="cs-offcanvas-body">
              <!-- Menu-->
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="/team" class="nav-link">Team</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/powers" class="nav-link">Powers</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <!-- Page content-->
      <!-- Intro-->
      <router-view/>
    </main>
    <footer class="cs-footer bg-dark pt-5 pt-md-6 pt-lg-7 d-none">
      <div class="container pt-3 pt-md-0">
        <p class="font-size-sm text-center mb-4 py-3"><span class="text-light opacity-50 mr-1">© All rights reserved. Made by</span><a class="nav-link-style nav-link-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></p>
      </div>
    </footer>
</template>