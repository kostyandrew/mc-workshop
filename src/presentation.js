// Import React
import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./my.css");

const theme = createTheme({
    primary: "white",
    secondary: "#212121",
    tertiary: "#ad1457",
    well: "#e91e63",
    quartenary: "gold",
    quarternary: "white"
}, {
    primary: "Open Sans",
    secondary: "Open Sans"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
                <Slide bgColor="well">
                    <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
                        Your first step in JavaScript on hardware
                    </Heading>
                    <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
                        Робимо годинник з термометром на мікроконтролері під JS
                    </Text>
                </Slide>

                <Slide>
                    <img src={require('./resources/qr.png')} alt=""/>
                    <Text><mark>https://kostyandrew.github.io/mc-workshop/</mark></Text>
                </Slide>

                <Slide bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
                        Що для цього потрібно
                    </Heading>
                    <List textColor="quartenary">
                        <ListItem>Плата Espruino</ListItem>
                        <ListItem>Компоненти</ListItem>
                        <ListItem>IDE</ListItem>
                    </List>
                </Slide>

                <Slide bgColor="quartenary" textColor="secondary" textSize={25} textAlign="left">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 1. IDE
                    </Heading>

                    <List>
                        <ListItem>
                            Інсталювати Espruino Web IDE для
                            <a
                                target="__blank"
                                href="https://chrome.google.com/webstore/detail/espruino-web-ide/bleoifhkdalbjfbobjackfdifdneehpo"
                            >
                                &nbsp;Google&nbsp;Chrome
                            </a>
                            , доступ
                            <a
                                href="https://www.espruino.com/ide/"
                            >
                                &nbsp;інших&nbsp;браузерів
                            </a>
                        </ListItem>

                        <ListItem>
                            Прийняти додаткові
                            <a target="__blank"
                               href="http://www.espruino.com/webide?settings=%7B%22MODULE_URL%22%3A%22http%3A%2F%2Fjs.amperka.ru%2Fmodules%22%2C%22BOARD_JSON_URL%22%3A%22http%3A%2F%2Fjs.amperka.ru%2Fjson%22%2C%22SAVE_ON_SEND%22%3Atrue%7D">
                                &nbsp;налаштування&nbsp;
                            </a>
                            для шляхів бібліотек.
                        </ListItem>
                        <ListItem>
                            Якщо у вас Windows, установіть
                            <a href="http://wiki.amperka.ru/_media/js:iskra_js:stsw-stm32102.zip"
                               target="__blank">
                                &nbsp;драйвер&nbsp;
                            </a>
                            для USB-інтерфейсу мікроконтролера STM32. Для Mac OS і Linuxдрайвер не потрібен.
                        </ListItem>
                        <ListItem>Запустіть IDE, <mark>chrome://apps</mark></ListItem>
                    </List>
                </Slide>

                <Slide bgColor="secondary">
                    <Heading size={4} textColor="quartenary">
                        Перший успішний крок.
                    </Heading>
                    <img src={require("./resources/ide.png")} height={400} alt=""/>
                    <Text textSize={20} textColor="primary">
                        Права частина - код програми, яку можна Завантажте на МК.
                        <br/>
                        Ліва частина - консоль, команди виконуються на МК і показується результат. Можна використовувати для відладки.
                    </Text>
                </Slide>

                <Slide bgColor="quartenary" textColor="secondary" textSize={25} textAlign="left">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 2. Підключення плати
                    </Heading>
                    <List>
                        <ListItem>Підключіть плату до комп'ютера USB-кабелем і натисніть кнопку <img
                            src={require("./resources/connect-icon.png")} alt=""/> вгорі лівому куті IDE для з'єднання.</ListItem>
                        <ListItem>
                            З'явится список портів доступних для підключення. Оберіть:
                            <Text><mark>COMx</mark> на Windows</Text>
                            <Text><mark>/dev/tty.usbmodemXXX</mark> на Mac OS</Text>
                            <Text><mark>/dev/ttyACMx</mark> на Linux</Text>
                        </ListItem>
                    </List>
                    <Text>Після успішного підключення, ви побачите в консолі напис «Connected». Фон кнопки <img
                        src={require("./resources/connect-icon.png")} alt=""/> змінить колір на зелений</Text>
                </Slide>

                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 3. Перевіримо інтерператор
                    </Heading>
                    <Text textSize={30}>
                        Запустимо ряд команд в консолі.<br/>
                        Наприклад, математичні операції, оголошення і виклик функцій.<br/>
                        Ви отримаєте звичні результати.
                    </Text>
                    <Text>
                        <code><pre>0.1 + 0.2</pre></code>
                        <code><pre>0.30000000000000004</pre></code>
                    </Text>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 4. Завантаження першої програми
                    </Heading>
                    <Text textSize={25}>Інтерпертатор включає ряд констант, які вказують на відповідні порти плати. Наприклад, LED1 вказує на діод</Text>
                    <Text textSize={25}>Код приведений ниже це "Hello, World" в мікроконтролерному світі - лампочка яка блимає</Text>
                    <Text textAlign="left" textSize={30}>
                    <code><pre>
var  on = false;<br/>
setInterval(function() {"{"}<br/>
{"\t"}on = !on;<br/>
{"\t"}LED1.write(on);<br/>
{"}"}, 500);
                    </pre></code>
                    </Text>
                    <Text textSize={25}>Метод <mark>write</mark> встановлює стан діода. Булеве <mark>TRUE</mark> показує, що лампочка має горіти</Text>
                    <Text textSize={25}>Для деяких компонентів доступний і аналоговий запис. Наприклад, можна контролювати рівень яркості лампочки</Text>
                    <Text textSize={25}>
                        Скористайтесь кнопкою <img src={require('./resources/deploy-icon.png')} alt=""/> для завантаження програми на мк.
                    </Text>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 5. Працюємо з компонентами
                    </Heading>

                    <Text textSize={25}>Крім запису можна також зчитувати стан сенсорів і датчкиків</Text>

                    <List>
                        <ListItem textSize={25}>
                            Підключіть плату розширення
                        </ListItem>
                        <ListItem textSize={25}>
                            Підключіть кнопку до 2 піна (P2)
                        </ListItem>
                        <ListItem textSize={25}>
                            Використовуючи документацію до модуля кнопки <a href="http://wiki.amperka.ru/js:button" target="__blank">@amperka/button</a> написати оброкник взаємодій з кнопкою. Наприклад, виводити інформацію в консоль.
                        </ListItem>
                        <ListItem textSize={25}>
                            Завантажте програму і перевірте її роботу
                        </ListItem>
                    </List>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 6. Логуємо показники погоди в домі
                    </Heading>

                    <Text textSize={25}>Аналогові порти включають аналогово-цифровий перетворювач, що дозволяє знімати інформацію не тільки в логічному форматі</Text>

                    <List>
                        <ListItem textSize={25}>
                            Підключіть температурний датчик до 5 аналогового піна (A5)
                        </ListItem>
                        <ListItem textSize={25}>
                            Використовуючи документацію до модуля термометра <a href="http://wiki.amperka.ru/js:thermometer" target="__blank">@amperka/thermometer</a> написати логер зміни температури. Інформацію виводити в консоль
                        </ListItem>
                        <ListItem textSize={25}>
                            Додати опцію вимкнення логера кнопкою
                        </ListItem>
                        <ListItem textSize={25}>
                            Завантажте програму і перевірте її роботу
                        </ListItem>
                    </List>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 7. Виводимо температуру на екрані
                    </Heading>

                    <Text textSize={25}>Крім стандартних цифрових і аналогових портів є можливість взаємодії через різноманітні інтерфейси, наприклад - SPI</Text>

                    <List>
                        <ListItem textSize={25}>
                            Підключіть дисплей до порту P10 {/* @todo more info */}
                        </ListItem>
                        <ListItem textSize={25}>
                            Використовуючи бібліотеку <mark>@amperka/quaddisplay2</mark> створити з'єдання до дисплея через пін P10.
                            <code><pre>
var quadDisplay = QuadDisplay.connect(P10);
                            </pre></code>
                        </ListItem>
                        <ListItem textSize={25}>
                            Замість логування температури в консоль використати метод <mark>display</mark> з <mark>quadDisplay</mark>.
                        </ListItem>
                        <ListItem textSize={25}>
                            Завантажте програму і перевірте її роботу
                        </ListItem>
                    </List>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 8. Відображення часу
                    </Heading>

                    <Text textSize={25}>Після запуску плата починає рахувати час</Text>

                    <List>
                        <ListItem textSize={25}>
                            Перевірте роботу функції getTime, яка повератає час мк
                        </ListItem>
                        <ListItem textSize={25}>
                            Встановити коректний час функцією setTime
                        </ListItem>
                        <ListItem textSize={25}>
                            Використовуючи документацію по об'єкту <a href="http://wiki.amperka.ru/js:date" target="__blank">Date</a> додати відображення часу на дисплею
                        </ListItem>
                        <ListItem textSize={25}>
                            Нажаття кнопки повинне переключати режими час/температура
                        </ListItem>
                        <ListItem textSize={25}>
                            Завантажте програму і перевірте її роботу
                        </ListItem>
                    </List>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} textColor="tertiary">
                        Step 9. У разі зникнення живлення
                    </Heading>

                    <Text textSize={25}>Без живлення плата не тільки не виконує програму, а й не рахує час. В комп'ютерах присутня плата з батарейкою яка рахує час навіть коли він вимкнутий</Text>
                    <Text textSize={25}>Подібний компонент є і для цього мк і працює через протокол I2C</Text>

                    <List>
                        <ListItem textSize={25}>
                            Спробуйте від'єднати живлення на деякий час
                        </ListItem>
                        <ListItem textSize={25}>
                            Підключіть RTC модуль з батарейкою
                        </ListItem>
                        <ListItem textSize={25}>
                            Використовуючи бібліотеку <a href="http://wiki.amperka.ru/js:rtc" target="__blank">@amperka/rtc</a> ініціалізуйте коректний час для RTC через консоль
                        </ListItem>
                        <ListItem textSize={25}>
                            Змініть код програми і виводьте час використовуючи RTC модуль
                        </ListItem>
                        <ListItem textSize={25}>
                            Завантажте програму і перевірте її роботу
                        </ListItem>
                    </List>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading size={4} lineHeight={1} caps fit textColor="quartenary" textFont="Times New Roman">
                        fin
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}