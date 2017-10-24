// Import React
import React from "react";
import Prism from "prismjs";

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
require("prismjs/themes/prism.css");
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./my.css");

const theme = createTheme({
    primary: "white",
    secondary: "#212121",
    tertiary: "#212121",
    well: "#2196f3",
    quartenary: "gold",
    quarternary: "white"
}, {
    primary: "Open Sans",
    secondary: "Open Sans"
});

const Head = (props) => {
    return <Heading size={4} lineHeight={1} margin={"25px 0"} textColor="tertiary" {...props}>{props.children}</Heading>
};

const Code = (props) => {
    const lang = props.lang || "javascript";
    const codeHtml = Prism.highlight(props.code, Prism.languages[lang]);
    return <pre style={{fontSize: 20, padding: "0.5rem", lineHeight: 1.3}} className={"language-"+lang}><code dangerouslySetInnerHTML={{ __html: codeHtml}} /></pre>;
}

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
                    <img src={require('./resources/qr.png')} height={500} alt="" style={{border: "3px solid black"}}/>
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
                    <Head>
                        Step 1. IDE
                    </Head>

                    <List>
                        <ListItem textSize={25}>
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

                        <ListItem textSize={25}>
                            Прийняти додаткові
                            <a target="__blank"
                               href="http://www.espruino.com/webide?settings=%7B%22MODULE_URL%22%3A%22http%3A%2F%2Fjs.amperka.ru%2Fmodules%22%2C%22BOARD_JSON_URL%22%3A%22http%3A%2F%2Fjs.amperka.ru%2Fjson%22%2C%22SAVE_ON_SEND%22%3Atrue%7D">
                                &nbsp;налаштування&nbsp;
                            </a>
                            для шляхів бібліотек.
                        </ListItem>
                        <ListItem textSize={25}>
                            Якщо у вас Windows, установіть
                            <a href="http://wiki.amperka.ru/_media/js:iskra_js:stsw-stm32102.zip"
                               target="__blank">
                                &nbsp;драйвер&nbsp;
                            </a>
                            для USB-інтерфейсу мікроконтролера STM32. Для Mac OS і Linuxдрайвер не потрібен.
                        </ListItem>
                        <ListItem textSize={25}>Запустіть IDE, <mark>chrome://apps</mark></ListItem>
                    </List>
                </Slide>

                <Slide bgColor="secondary">
                    <Head size={4} textColor="quartenary">
                        Перший успішний крок
                    </Head>
                    <img src={require("./resources/ide.png")} height={400} alt=""/>
                    <Text textSize={20} textColor="primary">
                        Права частина - код програми, яку можна Завантажте на МК.
                        <br/>
                        Ліва частина - консоль, команди виконуються на МК і показується результат. Можна використовувати для відладки.
                    </Text>
                </Slide>

                <Slide bgColor="quartenary" textColor="secondary" textSize={25} textAlign="left">
                    <Head>
                        Step 2. Підключення плати
                    </Head>
                    <List>
                        <ListItem textSize={25}>Підключіть плату до комп'ютера USB-кабелем і натисніть кнопку <img
                            src={require("./resources/connect-icon.png")} alt=""/> вгорі лівому куті IDE для з'єднання.</ListItem>
                        <ListItem textSize={25}>
                            З'явится список портів доступних для підключення. Оберіть:
                            <Text textSize={25} textAlign={"center"}><mark>COMx</mark> на Windows</Text>
                            <Text textSize={25} textAlign={"center"}><mark>/dev/tty.usbmodemXXX</mark> на Mac OS</Text>
                            <Text textSize={25} textAlign={"center"}><mark>/dev/ttyACMx</mark> на Linux</Text>
                        </ListItem>
                    </List>
                    <Text textSize={25}>Після успішного підключення, ви побачите в консолі напис «Connected». Фон кнопки <img
                        src={require("./resources/connect-icon.png")} alt=""/> змінить колір на зелений</Text>
                </Slide>

                <Slide bgColor="quartenary" textColor="secondary">
                    <Head>
                        Step 3. Перевіримо інтерператор
                    </Head>
                    <Text textSize={30}>
                        Запустимо ряд команд в консолі.<br/>
                        Наприклад, математичні операції, оголошення і виклик функцій.<br/>
                        Ви отримаєте звичні результати.
                    </Text>
                    <Code code={require("./codes/inter.txt")}/>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Head>
                        Step 4. Завантаження першої програми
                    </Head>
                    <Text textSize={25}>Інтерпертатор включає ряд констант, які вказують на відповідні порти плати. Наприклад, LED1 вказує на діод</Text>
                    <Text textSize={25}>Код приведений ниже це "Hello, World" в мікроконтролерному світі - лампочка яка блимає</Text>
                    <Code code={require("./codes/first.txt")}/>
                    <Text textSize={25}>Метод <mark>write</mark> встановлює стан діода. Булеве <mark>TRUE</mark> показує, що лампочка має горіти</Text>
                    <Text textSize={25}>Для деяких компонентів доступний і аналоговий запис. Наприклад, можна контролювати рівень яркості лампочки</Text>
                    <Text textSize={25}>
                        Скористайтесь кнопкою <img src={require('./resources/deploy-icon.png')} alt=""/> для завантаження програми на мк.
                    </Text>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Head>
                        Step 5. Працюємо з компонентами
                    </Head>

                    <Text textSize={25}>Крім запису можна також зчитувати стан сенсорів і датчкиків</Text>

                    <List>
                        <ListItem textSize={25}>
                            Підключіть плату розширення
                        </ListItem>
                        <ListItem textSize={25}>
                            Підключіть кнопку до 2 піна (2VG)
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
                    <Head>
                        Step 6. Логуємо показники погоди в домі
                    </Head>

                    <Text textSize={25}>Аналогові порти включають аналогово-цифровий перетворювач, що дозволяє знімати інформацію не тільки в логічному форматі</Text>

                    <List>
                        <ListItem textSize={25}>
                            Підключіть температурний датчик до 2 аналогового піна (A2VG)
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
                    <Head>
                        Step 7. Виводимо температуру на екрані
                    </Head>

                    <Text textSize={25}>Крім стандартних цифрових і аналогових портів є можливість взаємодії через різноманітні інтерфейси, наприклад - SPI</Text>

                    <List>
                        <ListItem textSize={25}>
                            Підключіть дисплей. CS до порту P10 (10VG). DI до DO
                        </ListItem>
                        <ListItem textSize={25}>
                            Використовуючи бібліотеку <mark>@amperka/quaddisplay2</mark> створити з'єдання до дисплея через пін P10.
                            <Code code={require("./codes/quad.txt")}/>
                        </ListItem>
                        <ListItem textSize={25}>
                            Замість логування температури в консоль використати метод <mark>display</mark> з <mark>quadDisplay</mark> для відображення.
                        </ListItem>
                        <ListItem textSize={25}>
                            Завантажте програму і перевірте її роботу
                        </ListItem>
                    </List>
                </Slide>
                <Slide bgColor="quartenary" textColor="secondary">
                    <Head>
                        Step 8. Відображення часу
                    </Head>

                    <Text textSize={25}>Після запуску плата починає рахувати час</Text>

                    <List>
                        <ListItem textSize={25}>
                            Перевірте роботу функції <a href="http://wiki.amperka.ru/js:builtins#gettime" target="__blank">getTime</a>, яка повератає час мк
                        </ListItem>
                        <ListItem textSize={25}>
                            Встановити коректний час функцією <a href="http://wiki.amperka.ru/js:builtins#settime_time" target="__blank">setTime</a>
                        </ListItem>
                        <ListItem textSize={25}>
                            Використовуючи документацію по об'єкту <a href="http://wiki.amperka.ru/js:date" target="__blank">Date</a> додати відображення часу на дисплеї
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
                    <Head>
                        Step 9. У разі зникнення живлення
                    </Head>

                    <Text textSize={25}>Без живлення плата не тільки не виконує програму, а й не рахує час. В комп'ютерах присутня плата з батарейкою яка рахує час навіть коли він вимкнутий</Text>
                    <Text textSize={25}>Подібний компонент є і для цього мк і працює через протокол I2C</Text>

                    <List>
                        <ListItem textSize={25}>
                            Спробуйте від'єднати живлення на деякий час
                        </ListItem>
                        <ListItem textSize={25}>
                            Підключіть RTC модуль з батарейкою, DC та VG у відповідні порти.
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