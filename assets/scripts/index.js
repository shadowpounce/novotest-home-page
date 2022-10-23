const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuTabs = mobileMenu.querySelectorAll('li')
const pageWrapper = document.querySelector('.page-wrapper')
const overlay = document.querySelector('.overlay')

let activePageIndex = 0

const pages = [
  {
    id: 0,
    html: `<section class="application-banner">
    <div class="container">
      <div class="swiper" id="swiper-1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="wrapper">
              <h4>Откройте для себя уникальные возможности</h4>
              <p>
                Прибор в твоём смартфоне | Облачное хранение результатов
                контроля | Расширение функционала
              </p>

              <a href=""> Установить приложение </a>
              <div class="app-links">
                <div class="app-link">
                  <a href="">
                    <img src="./assets/images/svg/appstore.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="./assets/images/svg/googleplay.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="wrapper">
              <h4>Откройте для себя уникальные возможности</h4>
              <p>
                Прибор в твоём смартфоне | Облачное хранение результатов
                контроля | Расширение функционала
              </p>

              <a href=""> Установить приложение </a>
              <div class="app-links">
                <div class="app-link">
                  <a href="">
                    <img src="./assets/images/svg/appstore.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="./assets/images/svg/googleplay.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="wrapper">
              <h4>Откройте для себя уникальные возможности</h4>
              <p>
                Прибор в твоём смартфоне | Облачное хранение результатов
                контроля | Расширение функционала
              </p>

              <a href=""> Установить приложение </a>
              <div class="app-links">
                <div class="app-link">
                  <a href="">
                    <img src="./assets/images/svg/appstore.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="./assets/images/svg/googleplay.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev" id="swiper-button-prev-1"></div>
        <div class="swiper-button-next" id="swiper-button-next-1"></div>

        <div class="swiper-pagination" id="swiper-pagination-1"></div>
      </div>
    </div>
  </section>
  <section class="best-suggestions">
    <div class="container">
      <div class="swiper" id="swiper-2">
        <h2 class="section__title">Лучшие предложения в этом месяце</h2>
        <div class="swiper-wrapper">
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p1.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
                Android)
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p1.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
                Android)
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p1.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
                Android)
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p2.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Ультразвуковой толщиномер УТ-1М (с датчиком 5 МГц) и
                опциональным Bluetooth и Android
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p3.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Электромагнитно-акустический (ЭМА) толщиномер УТ-3М-ЭМА
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p4.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Твердомер динамический Т-Д2 (c опциональным Bluetooth и
                Android)
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p5.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Измеритель толщины защитного слоя бетона Арматуроскоп (новое
                поколение 2020г)
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p1.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
                Android)
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p1.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
                Android)
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p1.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
                Android)
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button class="show-more">Показать больше</button>

        <div class="swiper-button-prev" id="swiper-button-prev-2"></div>
        <div class="swiper-button-next" id="swiper-button-next-2"></div>
      </div>
    </div>
  </section>
  <section class="catalog-devices">
    <div class="container">
      <div class="section__row">
        <h2 class="section__title">
          Каталог приборов неразрушающего контроля
        </h2>
        <div class="section__show-more">
          <a href=""> Посмотреть всё </a>
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.481044 9.70646C0.314627 9.54004 0.299498 9.27962 0.435657 9.09612L0.481044 9.04354L4.52437 5L0.481044 0.956457C0.314627 0.79004 0.299498 0.529625 0.435657 0.346118L0.481044 0.293545C0.64746 0.127128 0.907875 0.111999 1.09138 0.248158L1.14396 0.293545L5.51896 4.66854C5.68537 4.83496 5.7005 5.09538 5.56434 5.27888L5.51896 5.33146L1.14396 9.70646C0.960898 9.88951 0.664102 9.88951 0.481044 9.70646Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
      </div>
      <div class="devices-row">
        <div class="device">
          <h6>Твердомеры для металлов, сплавов, резины, пластиков</h6>
          <img src="./assets/images/pictures/d1.png" alt="" />
        </div>
        <div class="device">
          <h6>Ультразвуковой контроль</h6>
          <img src="./assets/images/pictures/d2.png" alt="" />
        </div>
        <div class="device">
          <h6>Контроль качества покрытий</h6>
          <img src="./assets/images/pictures/d3.png" alt="" />
        </div>
        <div class="device">
          <h6>Толщиномеры (ультразвуковые, покрытий)</h6>
          <img src="./assets/images/pictures/d4.png" alt="" />
        </div>
        <div class="device">
          <h6>Дефектоскопы (металлов, покрытий, пластиков)</h6>
          <img src="./assets/images/pictures/d5.png" alt="" />
        </div>
        <div class="device">
          <h6>Дефектоскопы (металлов, покрытий, пластиков)</h6>
          <img src="./assets/images/pictures/d5.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section class="last-news">
    <div class="container">
      <div class="section__row">
        <h2 class="section__title">Последние новости</h2>
        <div class="section__show-more">
          <a href=""> Посмотреть всё </a>
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.481044 9.70646C0.314627 9.54004 0.299498 9.27962 0.435657 9.09612L0.481044 9.04354L4.52437 5L0.481044 0.956457C0.314627 0.79004 0.299498 0.529625 0.435657 0.346118L0.481044 0.293545C0.64746 0.127128 0.907875 0.111999 1.09138 0.248158L1.14396 0.293545L5.51896 4.66854C5.68537 4.83496 5.7005 5.09538 5.56434 5.27888L5.51896 5.33146L1.14396 9.70646C0.960898 9.88951 0.664102 9.88951 0.481044 9.70646Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
      </div>
      <div class="swiper" id="swiper-3">
        <div class="swiper-wrapper">
          <div class="news-card swiper-slide">
            <div class="news-card__preview">
              <img src="./assets/images/pictures/np2.png" alt="" />
            </div>
            <div class="news-card__body">
              <span class="date"> 03 февраля 2022 </span>
              <h4>
                Новая разработка - автономный ЭМА преобразователь ЭМАП-А1
              </h4>
              <p>
                Автономный ЭМА преобразователь ЭМАП-А1 - новое техническое
                решение, которое позволит получить ...
              </p>
            </div>
          </div>
          <div class="news-card swiper-slide">
            <div class="news-card__preview">
              <img src="./assets/images/pictures/np1.png" alt="" />
            </div>
            <div class="news-card__body">
              <span class="date"> 03 февраля 2022 </span>
              <h4>
                Облачный онлайн сервис для просмотра результатов измерений
              </h4>
              <p>
                Запущен в тестовую эксплуатацию онлайн сервис для просмотра
                записей архивов приборов.
              </p>
            </div>
          </div>
          <div class="news-card swiper-slide">
            <div class="news-card__preview">
              <img src="./assets/images/pictures/np3.png" alt="" />
            </div>
            <div class="news-card__body">
              <span class="date"> 03 февраля 2022 </span>
              <h4>
                На склад поступила ограниченная партия твердомеров с Блютус
              </h4>
              <p>
                Небольшая партия твердомеров третьей серии с Блютус доступна
                к отгрузке со склада.
              </p>
            </div>
          </div>
          <div class="news-card swiper-slide">
            <div class="news-card__preview">
              <img src="./assets/images/pictures/np4.png" alt="" />
            </div>
            <div class="news-card__body">
              <span class="date"> 03 февраля 2022 </span>
              <h4>Повышение цен на продукцию</h4>
              <p>
                Мы прикладывали максимальные усилия для фиксации цен и
                избежания подорожания ...
              </p>
            </div>
          </div>
          <div class="news-card swiper-slide">
            <div class="news-card__preview">
              <img src="./assets/images/pictures/np1.png" alt="" />
            </div>
            <div class="news-card__body">
              <span class="date"> 03 февраля 2022 </span>
              <h4>
                Облачный онлайн сервис для просмотра результатов измерений
              </h4>
              <p>
                Запущен в тестовую эксплуатацию онлайн сервис для просмотра
                записей архивов приборов.
              </p>
            </div>
          </div>
          <div class="news-card swiper-slide">
            <div class="news-card__preview">
              <img src="./assets/images/pictures/np1.png" alt="" />
            </div>
            <div class="news-card__body">
              <span class="date"> 03 февраля 2022 </span>
              <h4>
                Облачный онлайн сервис для просмотра результатов измерений
              </h4>
              <p>
                Запущен в тестовую эксплуатацию онлайн сервис для просмотра
                записей архивов приборов.
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination" id="swiper-pagination-3"></div>
      </div>
    </div>
  </section>
  <section class="brand-description">
    <div class="container">
      <h2 class="section__title">
        NOVOTEST – приборы и системы контроля качества от производителя
      </h2>
      <div class="description">
        <p>
          Процесс эксплуатации и воздействие агрессивных факторов окружающей
          внешней среды, а также влияние особенностей технологических
          процессов приводят к тому, что свойства материалов и различных
          конструкций – меняются. Вследствие этого возникают серьезные риски
          нарушения качества изделий и уменьшение сроков их эксплуатации.
          Современные приборы контроля позволяют точно и своевременно
          оценить состояние оборудования, конструкций и изделий из различных
          материалов, а также спрогнозировать возможные последствия.
        </p>
      </div>
      <button class="read-more">
        Читать полностью
        <img src="./assets/images/svg/read-more.svg" alt="" />
      </button>
    </div>
  </section>
  <div class="pre-footer__banner">
    <div class="pre-footer__banner-picture">
      <img src="./assets/images/pictures/banner-phones.png" alt="" />
    </div>

    <div class="top-row">
      <div class="container">
        <p>Подпишитесь на новости</p>
        <form action="submit">
          <input type="email" placeholder="Ваш e-mail" />
          <input type="submit" value="Подписаться" />
        </form>
        <div class="social-links">
          <button>
            <a href="">
              <img src="./assets/images/svg/facebook.svg" alt="" />
            </a>
          </button>
          <button>
            <a href="">
              <img src="./assets/images/svg/instagram.svg" alt="" />
            </a>
          </button>
          <button>
            <a href="">
              <img src="./assets/images/svg/youtube.svg" alt="" />
            </a>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="container">
        <div>
          <h2>Откройте для себя уникальные возможности</h2>
          <p>
            Прибор в твоём смартфоне | Облачное хранение результатов
            контроля | Расширение функционала
          </p>
        </div>
        <div class="app-links">
          <button>
            <img src="./assets/images/svg/Google Play - rus.svg" alt="" />
          </button>
          <button>
            <img src="./assets/images/svg/App Store - rus.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="spacer"></div>
    <div class="footer__body">
      <div class="container">
        <div class="row">
          <div class="column column-main">
            <div class="logo">
              <img src="./assets/images/svg/logo.svg" alt="" />
            </div>
            <h6>
              NOVOTEST – приборы и системы контроля качества от
              производителя
            </h6>
            <div class="social-links-mobile">
              <button>
                <img src="./assets/images/svg/facebook.svg" alt="" />
              </button>
              <button>
                <img src="./assets/images/svg/instagram.svg" alt="" />
              </button>
              <button>
                <img src="./assets/images/svg/youtube.svg" alt="" />
              </button>
            </div>
            <div class="social-links">
              <button>
                <img src="./assets/images/svg/inst.svg" alt="" />
              </button>
              <button>
                <img src="./assets/images/svg/twt.svg" alt="" />
              </button>
              <button>
                <img src="./assets/images/svg/yt.svg" alt="" />
              </button>
            </div>
          </div>

          <div class="column dropdown">
            <div>
              <h4>Компания</h4>
              <img src="./assets/images/svg/dropdown-arrow.svg" alt="" />
            </div>
            <ul>
              <li>
                <a href="#"> Новости </a>
              </li>
              <li>
                <a href="#"> О компании </a>
              </li>
              <li>
                <a href="#"> Дипломы </a>
              </li>
              <li>
                <a href="#"> Контакты </a>
              </li>
            </ul>
          </div>
          <div class="column dropdown">
            <div>
              <h4>Услуги</h4>
              <img src="./assets/images/svg/dropdown-arrow.svg" alt="" />
            </div>
            <ul>
              <li>
                <a href="#"> Проверка приборов </a>
              </li>
              <li>
                <a href="#"> Ремонт </a>
              </li>
              <li>
                <a href="#"> Аренда </a>
              </li>
              <li>
                <a href="#"> Контакты </a>
              </li>
            </ul>
          </div>

          <div class="column dropdown">
            <div>
              <h4>Клиентам</h4>
              <img src="./assets/images/svg/dropdown-arrow.svg" alt="" />
            </div>
            <ul>
              <li>
                <a href="#"> Программы для ПК </a>
              </li>
              <li>
                <a href="#"> Прошивки для ПК </a>
              </li>
              <li>
                <a href="#"> Документация </a>
              </li>
              <li>
                <a href="#"> Рекомандации </a>
              </li>
              <li>
                <a href="#"> Расширения </a>
              </li>
            </ul>
          </div>

          <div class="column">
            <h4>Контакты</h4>
            <ul>
              <li>
                <img src="./assets/images/svg/Mobile.svg" alt="" />
                <a
                  href="tel:+380567672325 
                "
                >
                  +38 (056) 767-23-25
                </a>
              </li>
              <li>
                <img src="./assets/images/svg/Message.svg" alt="" />
                <a
                  href="mailto:sales@novotest.com.ua
                "
                >
                  sales@novotest.com.ua
                </a>
              </li>
              <li>
                <img src="./assets/images/svg/Location.svg" alt="" />
                <a href="#"> г. Новомосковск, ул. Спасская, 5 </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="app-links">
          <button>
            <img src="./assets/images/svg/googleplay.svg" alt="" />
          </button>
          <button>
            <img src="./assets/images/svg/appstore.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <p>© 2022 NOVOTEST. Все права защищены</p>
      </div>
    </div>
  </footer>`,
  },
  {
    id: 1,
    html: `<div class="catalog__page-mobile">
    <div class="container">
      <h2 class="section__title">Выберите категорию</h2>
      <ul class="catalog">
        <li class="catalog__item">
          Контроль твердости
          <img src="./assets/images/svg/arrow.svg" alt="" />
        </li>
        <li class="catalog__item">
          Контроль твердости
          <img src="./assets/images/svg/arrow.svg" alt="" />
        </li>
        <li class="catalog__item">
          Контроль твердости
          <img src="./assets/images/svg/arrow.svg" alt="" />
        </li>
        <li class="catalog__item">
          Контроль твердости
          <img src="./assets/images/svg/arrow.svg" alt="" />
        </li>
        <li class="catalog__item">
          Контроль твердости
          <img src="./assets/images/svg/arrow.svg" alt="" />
        </li>
        <li class="catalog__item">
          Контроль твердости
          <img src="./assets/images/svg/arrow.svg" alt="" />
        </li>
        <li class="catalog__item">
          Контроль твердости
          <img src="./assets/images/svg/arrow.svg" alt="" />
        </li>
        <li class="catalog__item">
          Контроль твердости
          <img src="./assets/images/svg/arrow.svg" alt="" />
        </li>
        <li class="catalog__item">
          Контроль твердости
          <img src="./assets/images/svg/arrow.svg" alt="" />
        </li>
        <li class="catalog__item">
          Контроль твердости
          <img src="./assets/images/svg/arrow.svg" alt="" />
        </li>
      </ul>
    </div>
  </div>`,
  },
  {
    id: 2,
    html: `<div class="cart-modal">
    <div class="cart-modal__header">
      <h2 class="section__title">Корзина</h2>
      <img src="./assets/images/svg/close-modal.svg" alt="" />
    </div>
    <div class="cart-modal__body">
      
      <ul class="order-list">
        <li class="order">
          <div class="product-info">
            <img src="./assets/images/pictures/ord1.png" alt="" />
            <div>
              <h4 class="product__title">
                Влагозащищенный ультразвуковой толщиномер УТ-1М-IP
              </h4>
              <span class="product__code"> Код: 22513000-1 </span>
            </div>
          </div>
          <div class="amount">
            <button>-</button>
            <button>1</button>
            <button>+</button>
          </div>
          <div class="group">
            <span class="price"> 15 900 грн </span>
            <img
              class="order-trash"
              src="./assets/images/svg/trash.svg"
              alt=""
            />
          </div>
        </li>
        <li class="order">
          <div class="product-info">
            <img src="./assets/images/pictures/ord1.png" alt="" />
            <div>
              <h4 class="product__title">
                Влагозащищенный ультразвуковой толщиномер УТ-1М-IP
              </h4>
              <span class="product__code"> Код: 22513000-1 </span>
            </div>
          </div>
          <div class="amount">
            <button>-</button>
            <button>1</button>
            <button>+</button>
          </div>
          <div class="group">
            <span class="price"> 15 900 грн </span>
            <img
              class="order-trash"
              src="./assets/images/svg/trash.svg"
              alt=""
            />
          </div>
        </li>
      </ul>
      <div class="cart-row">
        <button class="continue-purchases">Продолжить покупки</button>
        <div class="order-total">
          <div>
            <span class="total"> Итого, без доставки: </span>
            <div class="prices">
              <span class="old-price"> 70 000 грн </span>
              <span class="new-price"> 83 840 грн </span>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <div class="dropdown__header">
          <span>Вместе с этим товаром покупают</span>
          <img
            class="dropdown__arrow"
            src="./assets/images/svg/dropdown-arrow.svg"
            alt=""
          />
        </div>
        <div class="dropdown__body">
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p1.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
                Android)
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p1.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
                Android)
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p1.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
                Android)
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="swiper-slide product-card">
            <div class="product-card__image">
              <img src="./assets/images/pictures/p2.png" alt="" />
            </div>
            <div class="product-card__body">
              <span class="product-code"> Код: 22513000-1 </span>
              <h4>
                Ультразвуковой толщиномер УТ-1М (с датчиком 5 МГц) и
                опциональным Bluetooth и Android
              </h4>
              <div class="row">
                <div class="group">
                  <h6>17 580 грн</h6>
                  <span> Цена указана с НДС </span>
                </div>
                <button>
                  <img src="./assets/images/svg/cart-btn.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="or">
        <div class="line"></div>
        <span>Или</span>
        <div class="line"></div>
      </div>
      <div class="order-method-row">
        <div class="phone-order">
          <button>Заказать по телефону</button>
          <p>
            Мы перезвоним Вам в течение 10 минут. Или оформите заказ на сайте
            самостоятельно.
          </p>
        </div>
        <form action="submit">
          <input type="tel" placeholder="+38 (0)" />
          <input type="submit" value="Купить в один клик" />
        </form>
      </div>
    </div>
  </div>`,
  },
  {
    id: 3,
    html: `<div class="promotions__page">
    <div class="container">
      <h2 class="section__title">
        Топ продаж
      </h2>
      <div class="promotions-products">
        <div class="swiper-slide product-card promotion-product">
          <div class="promotion">-50 %</div>
          <div class="product-card__image">
            <img src="./assets/images/pictures/p1.png" alt="" />
          </div>
          <div class="product-card__body">
            <span class="product-code"> Код: 22513000-1 </span>
            <h4>
              Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
              Android)
            </h4>
            <div class="row">
              <div class="group">
                <span class="old-price"> 35 160 грн </span>
                <h6>17 580 грн</h6>
                <span> Цена указана с НДС </span>
              </div>
              <button>
                <img src="./assets/images/svg/cart-btn.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="swiper-slide product-card promotion-product">
          <div class="promotion">-50 %</div>
          <div class="product-card__image">
            <img src="./assets/images/pictures/p1.png" alt="" />
          </div>
          <div class="product-card__body">
            <span class="product-code"> Код: 22513000-1 </span>
            <h4>
              Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
              Android)
            </h4>
            <div class="row">
              <div class="group">
                <span class="old-price"> 35 160 грн </span>
                <h6>17 580 грн</h6>
                <span> Цена указана с НДС </span>
              </div>
              <button>
                <img src="./assets/images/svg/cart-btn.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="swiper-slide product-card promotion-product">
          <div class="promotion">-50 %</div>
          <div class="product-card__image">
            <img src="./assets/images/pictures/p1.png" alt="" />
          </div>
          <div class="product-card__body">
            <span class="product-code"> Код: 22513000-1 </span>
            <h4>
              Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
              Android)
            </h4>
            <div class="row">
              <div class="group">
                <span class="old-price"> 35 160 грн </span>
                <h6>17 580 грн</h6>
                <span> Цена указана с НДС </span>
              </div>
              <button>
                <img src="./assets/images/svg/cart-btn.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="swiper-slide product-card promotion-product">
          <div class="promotion">-50 %</div>
          <div class="product-card__image">
            <img src="./assets/images/pictures/p1.png" alt="" />
          </div>
          <div class="product-card__body">
            <span class="product-code"> Код: 22513000-1 </span>
            <h4>
              Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
              Android)
            </h4>
            <div class="row">
              <div class="group">
                <span class="old-price"> 35 160 грн </span>
                <h6>17 580 грн</h6>
                <span> Цена указана с НДС </span>
              </div>
              <button>
                <img src="./assets/images/svg/cart-btn.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="swiper-slide product-card promotion-product">
          <div class="promotion">-50 %</div>
          <div class="product-card__image">
            <img src="./assets/images/pictures/p1.png" alt="" />
          </div>
          <div class="product-card__body">
            <span class="product-code"> Код: 22513000-1 </span>
            <h4>
              Твердомер ультразвуковой Т-У3 (c опциональным Bluetooth и
              Android)
            </h4>
            <div class="row">
              <div class="group">
                <span class="old-price"> 35 160 грн </span>
                <h6>17 580 грн</h6>
                <span> Цена указана с НДС </span>
              </div>
              <button>
                <img src="./assets/images/svg/cart-btn.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  },
]

mobileMenuTabs.forEach((tab) => {
  function resetActiveTabs() {
    mobileMenuTabs.forEach((tab) => tab.classList.remove('active'))
  }

  tab.addEventListener('click', (e) => {
    activePageIndex = e.target.dataset.pageIndex
    resetActiveTabs()
    e.target.classList.add('active')
    if (e.target.dataset.pageIndex == 2) {
      document.querySelector('.cart-modal')
        ? document
            .querySelector('.cart-modal')
            .parentNode.removeChild(document.querySelector('.cart-modal'))
        : void 0
    }
    pageWrapper.innerHTML = pages.find(
      (page) => page.id == e.target.dataset.pageIndex
    ).html
    if (e.target.dataset.pageIndex == 2) {
      cartFunctional()
    }
  })
})
