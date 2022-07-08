import React from "react";
import PropTypes from "prop-types";

const SignIn = () => {};

LoginOrSignIn.propTypes = {
  return (
    <div class="wrapper">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-5">
                <div class="sign-in-container">
                    <div class="sign-in-container__header">
                        <a href="javascript:history.back()" class="d-lg-none sign-in-container__header--back "><i class="icon-chevron-left"></i></a>
                        <div class="sign-in-container__header--title">Merhaba,</div>
                        <div class="sign-in-container__header--sub-title">Giriş Yap veya Hesap Oluştur, fırsatları kaçırma!</div>
                    </div>
                    <div class="sign-in-container__form">
                        <div class="sign-in-container__form--tabs">
                            <div class="sign-in-container__form--tabs__login">GİRİŞ YAP</div>
                            <div class="sign-in-container__form--tabs__register">ÜYE OL</div>
                        </div>
                        <div class="sign-in-container__form--auth">
                            <form id="customer-login-form" action="" class="auth__form-inner" novalidate="novalidate"  method="POST">
                                <div class="js-alert-message auth__form-alert d-none"></div>
                                {{ csrf_token('flo_login_form') }}
                                <div class="form-group">
                                    <input
                                        type="text"
                                        name="username"
                                        class="form-control form-control__input js-form-control js-email-control"
                                        data-rule-required="true"
                                        data-msg-required="{{ 'Lütfen bu alanı doldurunuz' | translate }}"
                                        placeholder="E-Posta Adresi"
                                        autocomplete="off"
                                    />
                                </div>

                                <div class="form-group hidden">
                                    <input
                                        type="password"
                                        name="password"
                                        class="form-control form-control__input js-form-control"
                                        data-rule-required="true"
                                        data-msg-required="{{ 'Lütfen bu alanı doldurunuz' | translate }}"
                                        placeholder="Şifre"
                                        autocomplete="off"
                                    />
                                </div>
                                {% if login.failures_num >= login.show_fail_num and login.active == true %}
                                    <div class="form-group animated">
                                        <div id="js-g-recaptcha" class="g-recaptcha" data-sitekey="{{ login.site_key }}"></div>
                                    </div>
                                {% else %}
                                    <div id="js-g-recaptcha" data-sitekey="{{ login.site_key }}"></div>
                                {% endif %}
                                {#<div class="form-group auth__form-forgot">
                                <a
                                    href="/customer/password-forget"
                                    class="auth__form-forgot--link"
                                    data-test="open-to-forget-password"
                                >
                                    Şifremi Unuttum
                                </a>
                            </div>#}

                                <button type="submit" class="btn sign-in-container__btn btn-block" data-test="submit-login-form">GİRİŞ YAP</button>


                                <div class="sign-in-container__sign-with--items">
                                    {% if config('env.webservice.social.google.client_id') and custom_sites_settings.google_login_is_active == '1' %}
                                        <div class="sign-in-container__sign-with--item">
                                            <button type="button" class="js-login-with-google sign-in-container__sign-with--button" data-test="action-login-from-google">
                                                <img class="sign-in-container__sign-with--button-img sign-in-container__sign-with--button-img__google" src="{{ assets('/pub/assets/common/images/login-logo-google.svg') }}">
                                                <span class="sign-in-container__sign-with--button-text">Google ile Giriş Yap</span>
                                            </button>
                                        </div>
                                    {% endif %}

                                    {% if config('env.webservice.social.apple.client_id') and custom_sites_settings.apple_login_is_active == '1' %}
                                        <div class="sign-in-container__sign-with--item">
                                            <button type="button" class="js-login-with-apple sign-in-container__sign-with--button apple-login" data-test="action-login-from-apple">
                                                <img class="sign-in-container__sign-with--button-img sign-in-container__sign-with--button-img--apple" src="{{ assets('/pub/assets/common/images/login-logo-apple.svg') }}">
                                                <span class="sign-in-container__sign-with--button-text">Apple ile Giriş Yap</span>
                                            </button>
                                        </div>
                                    {% endif %}

                                    {% if custom_sites_settings.facebook_login_is_active and (not is_application()) %}
                                        <div class="sign-in-container__sign-with--item">
                                            <button type="button" class="facebook-login sign-in-container__sign-with--button facebook" data-test="action-login-from-facebook">
                                                <img class="sign-in-container__sign-with--button-img sign-in-container__sign-with--button-img--facebook" src="{{ assets('/pub/assets/common/images/login-logo-facebook.svg') }}">
                                                <span class="sign-in-container__sign-with--button-text">Facebook ile Giriş Yap</span>
                                            </button>
                                        </div>
                                    {% endif %}
                                </div>

                            </form>
                        </div>

                    </div>
                    <div class="sign-in-container__footer">
                        <img src="https://floimages.mncdn.com/media/catalog/product/22-07/04/group-2332.svg" alt="güvenli alışveriş">
                        <div class="sign-in-container__footer--title">© 2022 FLO.COM.TR. TÜM HAKLARI SAKLIDIR.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
};

export default SignIn;
