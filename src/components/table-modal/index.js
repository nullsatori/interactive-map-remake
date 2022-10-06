import React from "react";
import NiceModal, { muiDialog, useModal } from "@ebay/nice-modal-react";
import { Dialog, Slide } from "@mui/material";
import { cn as bem } from "@bem-react/classname";
import "./style.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide direction="up" ref={ref} {...props} mountOnEnter unmountOnExit />
  );
});

export const TableModal = NiceModal.create(() => {
  const modal = useModal();
  const cn = bem('mainModal');
  return (
    <Dialog
      TransitionComponent={Transition}
      {...muiDialog(modal)}
      className={cn('')}
    >
      <div className="schedule">
        <svg
          onClick={() => modal.hide()}
          width="47"
          height="47"
          viewBox="0 0 29 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.5897 5.03536C19.0759 -0.478422 10.1242 -0.478422 4.61037 5.03536C-0.903409 10.5491 -0.903409 19.5009 4.61037 25.0147C10.1242 30.5285 19.0759 30.5285 24.5897 25.0147C30.1035 19.5009 30.1035 10.5491 24.5897 5.03536ZM23.2579 6.36717C28.0362 11.1455 28.0362 18.9044 23.2579 23.683C18.4795 28.4613 10.7207 28.4613 5.94208 23.683C1.16346 18.9046 1.16373 11.1458 5.94208 6.36717C10.7204 1.58883 18.4793 1.58883 23.2579 6.36717ZM13.2685 15.0251L9.59807 11.3547C9.23038 10.9874 9.23038 10.3901 9.59807 10.0228C9.96535 9.65515 10.5626 9.65515 10.9299 10.0228L14.6003 13.6933L18.2707 10.0228C18.638 9.65515 19.2353 9.65515 19.6025 10.0228C19.9702 10.3901 19.9702 10.9874 19.6025 11.3547L15.9321 15.0251L19.6025 18.6955C19.9702 19.0628 19.9702 19.66 19.6025 20.0273C19.2353 20.395 18.638 20.395 18.2707 20.0273L14.6003 16.3569L10.9299 20.0273C10.5626 20.395 9.96534 20.395 9.59807 20.0273C9.23038 19.66 9.23038 19.0628 9.59807 18.6955L13.2685 15.0251Z"
            fill="#4D5759"
          />
        </svg>
        <h2>25 мая</h2>
        <div className="item">
          <div className="time">
            <p>10:15 - 10:30</p>
          </div>
          <div className="info">
            <p>
              Встреча министра цифры Айратом Хайруллиным с Сергеем Кржановским
              по вопросам грантового поддержки участников проекта Сколково,
              тиражирование мер поддержки.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>11:00 - 11:15</p>
          </div>
          <div className="info">
            <p>
              <b>Подписание соглашения о сотрудничестве</b> между ГАУ
              &quot;ИТ-парк&quot;, Казань (А. С. Борисов) и ИТ-парк74, Челябинск
              (Д. В.Козленков)
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>11:30 - 12:00</p>
          </div>
          <div className="info">
            <p>
              <b>Обход стендов VIP делегацией</b>
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>12:00 - 12:30</p>
          </div>
          <div className="info">
            <p>
              Встреча с генеральным директором АПС Энергия Рус - Елена
              Анатольевна Никонова
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>14:15 - 14:45</p>
          </div>
          <div className="info">
            <p>
              <b>Презентация нового Технопарка им. Б.Рамеева - Татарстан</b>
              <br />
              Cпикер Алексей Таранов, Эксперт по работе со стартапами и
              инвесторами ГАУ &quot;ИТ-парк&quot;
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>14:45 - 15:00</p>
          </div>
          <div className="info">
            <p>
              <b>О новой Концепции Бизнес-инкубатора ГАУ «ИТ-парк» Татарстан</b>
              <br />
              Cпикер Алексей Таранов, Эксперт по работе со стартапами и
              инвесторами ГАУ &quot;ИТ-парк&quot;
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>15:00 - 15:30</p>
          </div>
          <div className="info">
            <p>
              <b>Презентация Акселератора технологических стартапов ХМАО</b>
              <br />
              Модератор - Олег Макаров
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>15:30 - 16:30</p>
          </div>
          <div className="info">
            <p>
              <b>Ментор hours Акселератора ХМАО </b>
              <br />
              Модератор - Ястина Екатерина
              <br />
              Трекер, эксперт и ментор программы - Михаил Захаревич, Управляющий
              партнёр «Центра коммерциализации инноваций»
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>16:45 - 17:45</p>
          </div>
          <div className="info">
            <p>
              <b>
                Квартальная встреча с региональными операторами и региональными
                представителями Фонда Сколково{' '}
              </b>
              <br />
              Модератор - Юрий Сибирский
              <br />
              Рейтинг РО, Итоги 2021, Цифровой фронт офис, Изменение попсовета
              (ЮВС)
            </p>
          </div>
        </div>
        <h2>26 мая</h2>
        <div className="item">
          <div className="time">
            <p>10:00 - 10:30</p>
          </div>
          <div className="info">
            <p>
              Встреча Хьюмекс, сотрудничество с СНГ
              <br />
              Генеральный директор Черкашина Евгения
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>10:45 - 11:30</p>
          </div>
          <div className="info">
            <p>
              <b>Встреча с</b> Генеральным директором Агентства инноваций
              Ростовской области - Абдуллаев Рустам Ашурбекович
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>11:30 - 12:30</p>
          </div>
          <div className="info">
            <p>
              <b>
                Университетские кампусы как среда для развития технологий и
                запуска стартапов
              </b>
              <br />
              Модератор - Юрий Сибирский
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>12:30 - 13:00</p>
          </div>
          <div className="info">
            <p>
              <b>
                Как найти заказчика и исполнителя по технологическим услугам.{' '}
                Антон Труфанов
              </b>
            </p>
            <p>
              Проблема коммерциализации результатов интеллектуальной
              деятельности с каждым годом становится острее. Стартапы, научные
              коллективы и молодые ученые должны научиться выходить на новые
              рынки, предлагать свои услуги корпоративным заказчикам, а также
              выстраивать долгие и партнерские взаимоотношения с потенциальными
              заказчиками.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>13:00 - 14:00</p>
          </div>
          <div className="info">
            <p>
              Питч сессия проектов &quot;Предпринимательский старт&quot;
              <br />
              Фонд &quot;Сколково&quot; совместно с Росмолодежь.Бизнес и
              институтами развития группы ВЭБ. РФ
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>15:30 - 16:00</p>
          </div>
          <div className="info">
            <p>
              Встреча директора ГАУ ИТ-парк Александра Борисова с
              представителями Т.Парк (Щеглов Сергей, директор Сети Т.Парк, и
              Протопопов Евгений, учредитель, директор Т.Парк и Т.Парк Пермь)
            </p>
          </div>
        </div>
        <div className="item">
          <div className="time">
            <p>16:30 - 17:45</p>
          </div>
          <div className="info">
            <p>
              Встреча с Алексеем Давыденковым (Технопарк &quot;Нимлофт&quot;) и
              ТХП Сколково
            </p>
          </div>
        </div>
      </div>
    </Dialog>
  );
});