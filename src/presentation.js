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
                                href="https://chrome.google.com/webstore/detail/espruino-web-ide/bleoifhkdalbjfbobjackfdifdneehpo">
                                &nbsp;Google&nbsp;Chrome</a>
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
                        Права частина - код програми, яку можна завантажити на МК.
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
                    <Text textAlign="left">
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
                    <Text textAlign="left">
                    <code><pre>
var  on = false;<br/>
setInterval(function() {"{"}<br/>
    on = !on;<br/>
    LED1.write(on);<br/>
{"}"}, 500);
                    </pre></code>
                    </Text>
                    <Text>
                        Скористайтесь кнопкою <img src={require('./resources/deploy-icon.png')} alt=""/> для завантаження програми на мк.
                    </Text>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 5. Працюємо з компонентами
                    </Heading>
                    <List>
                        <ListItem textSize={25}>
                            Підключити плату розширення
                        </ListItem>
                        <ListItem textSize={25}>
                            Підключити кнопку до 2 піна (P2)
                        </ListItem>
                        <ListItem textSize={25}>
                            Використовуючи документацію до модуля кнопки <a href="http://wiki.amperka.ru/js:button" target="__blank">@amperka/button</a> написати оброкник взаємодій з кнопкою.
                        </ListItem>
                        <ListItem textSize={25}>
                            Завантажити програму і перевірити її роботу
                        </ListItem>
                    </List>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 6. Логуємо показники погоди в домі
                    </Heading>

                    <List>
                        <ListItem textSize={25}>
                            Підключити температурний датчик до 5 аналогового піна (A5)
                        </ListItem>
                        <ListItem textSize={25}>
                            Використовуючи документацію до модуля термометра <a href="http://wiki.amperka.ru/js:thermometer" target="__blank">@amperka/thermometer</a> написати логер зміни температури через setInterval. Інформацію виводити в консоль
                        </ListItem>
                        <ListItem textSize={25}>
                            Додати опцію вимкнення логера кнопкою
                        </ListItem>
                        <ListItem textSize={25}>
                            Завантажити програму і перевірити її роботу
                        </ListItem>
                    </List>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 7. Виводимо температуру на екрані
                    </Heading>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} lineHeight={1} textColor="tertiary">
                        Step 8. Відображення часу
                    </Heading>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Heading size={4} textColor="tertiary">
                        Step 9. У разі зникнення живлення
                    </Heading>
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