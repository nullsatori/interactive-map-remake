import React from "react";
import NiceModal, { muiDialog, useModal } from "@ebay/nice-modal-react";
import { Dialog, Slide } from "@mui/material";
import { cn as bem } from "@bem-react/classname";
import useWindowSize from "../../app/utils";
import "./style.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide direction="up" ref={ref} {...props} mountOnEnter unmountOnExit />
  );
});

export const TableModal = NiceModal.create(() => {
  const modal = useModal();
  const cn = bem('tableModal');
  const [width] = useWindowSize();

  return (
    <Dialog
      TransitionComponent={Transition}
      {...muiDialog(modal)}
      className={cn('')}
    >
      {(width < 768 && (
        <div className="exit" onClick={() => modal.hide()}>
          Закрыть
        </div>
      )) || (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => modal.hide()}
          className='exitCircle'
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.6808 7.31918C32.9219 -2.43973 17.0781 -2.43973 7.31918 7.31918C-2.43973 17.0781 -2.43973 32.9219 7.31918 42.6808C17.0781 52.4397 32.9219 52.4397 42.6808 42.6808C52.4397 32.9219 52.4397 17.0781 42.6808 7.31918ZM40.3236 9.67637C48.7809 18.1336 48.7809 31.8661 40.3236 40.3238C31.8664 48.7811 18.1339 48.7811 9.67618 40.3238C1.21846 31.8666 1.21893 18.1341 9.67618 9.67637C18.1334 1.21912 31.8659 1.21912 40.3236 9.67637ZM22.6433 25.0001L16.147 18.5038C15.4962 17.8537 15.4962 16.7966 16.147 16.1466C16.797 15.4958 17.8541 15.4958 18.5042 16.1466L25.0005 22.6429L31.4968 16.1466C32.1468 15.4958 33.204 15.4958 33.854 16.1466C34.5048 16.7966 34.5048 17.8538 33.854 18.5038L27.3577 25.0001L33.854 31.4964C34.5048 32.1465 34.5048 33.2036 33.854 33.8536C33.2039 34.5044 32.1468 34.5044 31.4968 33.8536L25.0005 27.3573L18.5042 33.8536C17.8541 34.5044 16.797 34.5044 16.147 33.8536C15.4962 33.2036 15.4962 32.1464 16.147 31.4964L22.6433 25.0001Z"
            fill="#4D5759"
          />
        </svg>
      )}
      <div className="schedule">

        <div className='wrapper'>
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
        </div>
        <div className='wrapper'>
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
      </div>
    </Dialog>
  );
});