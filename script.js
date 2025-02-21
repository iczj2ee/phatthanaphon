// เมื่อโหลด topic.html ให้เปลี่ยนเนื้อหาอัตโนมัติ
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get("topic");

    if (topic) {
        document.getElementById("topic-title").innerText = topic;
        document.getElementById("topic-description").innerHTML = getTopicDescription(topic);
    }
});




function getTopicDescription(topic) {
    const topics = {
        "Overview": `
            <p>ESP32 คือไมโครคอนโทรลเลอร์ (MCU) ที่ได้รับความนิยมสูงเนื่องจากมีฟังก์ชันการใช้งานหลากหลาย ซึ่งรวมถึงการเชื่อมต่อ <span style="color: #2196F3;">Wi-Fi</span> และ <span style="color: #2196F3;">Bluetooth</span> ในตัว ช่วยให้สามารถพัฒนาโปรเจค IoT (Internet of Things) และ Embedded Systems ได้อย่างง่ายดาย โดยที่ไม่จำเป็นต้องใช้ฮาร์ดแวร์ภายนอกเพิ่มเติม เช่น โมดูล Wi-Fi หรือ Bluetooth</p>
            <h3><strong><span style="color:rgb(93, 144, 255);">ข้อมูลเพิ่มเติม:</span></strong></h3>
            <ul>
                <li><strong>รองรับ Dual-Core CPU</strong></li>
                <li><strong>พัฒนาได้ทั้งในโหมด Arduino และ ESP-IDF</strong></li>
                <li><strong>รองรับการเชื่อมต่อทั้ง Wi-Fi และ Bluetooth</strong></li>
                <li><strong>ใช้งานได้ทั้งในโปรเจค IoT และ Embedded Systems อื่นๆ</strong></li>
            </ul>
        `,

        "Features": `
            <p>ESP32 มีคุณสมบัติที่ทำให้มันโดดเด่นในด้านการพัฒนาโปรเจค IoT ที่มีความหลากหลายและการทำงานที่มีประสิทธิภาพสูง เช่น Dual-Core CPU ที่ให้การประมวลผลหลายงานพร้อมกันได้, <span style="color: #2196F3;">Wi-Fi</span> และ <span style="color: #2196F3;">Bluetooth</span> ที่ทำให้การเชื่อมต่อกับอุปกรณ์ภายนอกเป็นเรื่องง่าย รวมทั้ง GPIOs ที่รองรับการเชื่อมต่อกับเซ็นเซอร์และอุปกรณ์ต่างๆ</p>
            <h3><strong><span style="color: rgb(93, 144, 255);">ข้อมูลเพิ่มเติม:</span></strong></h3>
            <ul>
                <li><strong>Dual-Core CPU:</strong> ช่วยให้การประมวลผลหลายงานในเวลาเดียวกัน</li>
                <li><strong>Wi-Fi & Bluetooth:</strong> ใช้งานได้ทั้งการเชื่อมต่อแบบไร้สาย</li>
                <li><strong>ADC/DAC:</strong> สามารถใช้ในการอ่านค่าแอนะล็อกและส่งค่าแอนะล็อกได้</li>
                <li><strong>GPIO:</strong> คือพินการใช้ที่รองรับการใช้งานหลายโหมด</li>
            </ul>
        `,
        "Projects": `
            <p>โปรเจคที่สามารถสร้างด้วย ESP32 ได้แก่:</p>
            <ul>
                <li><strong>Smart Home:</strong> ใช้ ESP32 ในการควบคุมอุปกรณ์ภายในบ้าน เช่น การเปิด-ปิดไฟ หรือการควบคุมเครื่องปรับอากาศ</li>
                <li><strong>IoT Sensors:</strong> ESP32 สามารถเก็บข้อมูลจากเซ็นเซอร์แล้วส่งข้อมูลไปยัง Cloud หรือฐานข้อมูล</li>
                <li><strong>Home Automation:</strong> ใช้ ESP32 ควบคุมอุปกรณ์ต่างๆ ภายในบ้าน เช่น เครื่องปรับอากาศ, พัดลม, ไฟ LED</li>
                <li><strong>Robotics:</strong> ESP32 ถูกนำไปใช้ในการควบคุมหุ่นยนต์ โดยใช้ Bluetooth หรือ Wi-Fi ในการสื่อสาร</li>
            </ul>
            <h3><strong><span style="color: #FF5733;">ข้อมูลเพิ่มเติม:</span></strong></h3>
            <p><span style="color: #FF9800;">โปรเจคที่ใช้ ESP32 ช่วยให้การพัฒนา IoT นั้นง่ายและมีประสิทธิภาพ เนื่องจาก ESP32 รองรับทั้ง Wi-Fi และ Bluetooth พร้อมด้วยตัวอย่างโค้ดที่สามารถเริ่มใช้งานได้ทันที</span></p>
        `,

        "Code": `<b>ตัวอย่างโค้ด ESP32</b><br><br>
        🔹 <b>เชื่อมต่อ Wi-Fi</b><br>
        <pre>
#include &lt;WiFi.h&gt;
const char* ssid = "Your_SSID";
const char* password = "Your_PASSWORD";

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting...");
    }
    Serial.println("Connected!");
}

void loop() {}
        </pre>
        <h3>🔹 แจ้งเตือนผ่าน Telegram Bot</h3>
            <p>ESP32 ส่งข้อความแจ้งเตือนเข้า Telegram เมื่อค่า Sensor เกินกำหนด:</p>
            <pre>
#include &lt;WiFi.h&gt;
#include &lt;WiFiClientSecure.h&gt;
#include &lt;UniversalTelegramBot.h&gt;

// ใส่ WiFi SSID และ Password
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// ใส่ Token จาก BotFather ใน Telegram
const char* botToken = "YOUR_TELEGRAM_BOT_TOKEN";

// ใส่ Chat ID ของ Telegram (ใช้ @userinfobot หาได้)
const char* chatID = "YOUR_CHAT_ID";

WiFiClientSecure client;
UniversalTelegramBot bot(botToken, client);

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    
    Serial.println("Connected to WiFi");

    // แจ้งเตือนเมื่อเปิด ESP32
    bot.sendMessage(chatID, "🚀 ESP32 is Online!", "");
}

void loop() {
    int sensorValue = analogRead(34); // อ่านค่าจากเซ็นเซอร์
    Serial.println(sensorValue);
    
    if (sensorValue > 500) {
        bot.sendMessage(chatID, "🔥 Sensor Alert! Value: " + String(sensorValue), "");
        delay(5000); // ป้องกันการส่งถี่เกินไป
    }

    delay(1000);
}
            </pre>
            <h3>🔹 ส่งข้อมูลไป Google Sheets ผ่าน Web App</h3>
            <p>ESP32 ใช้ HTTP POST ส่งข้อมูลไปบันทึกใน Google Sheets:</p>
            <pre>
#include &lt;WiFi.h&gt;
#include &lt;HTTPClient.h&gt;

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* scriptURL = "YOUR_GOOGLE_SCRIPT_URL"; // URL จาก Apps Script

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }

    Serial.println("Connected to WiFi");
}

void loop() {
    if (WiFi.status() == WL_CONNECTED) {
        HTTPClient http;
        http.begin(scriptURL);
        http.addHeader("Content-Type", "application/json");

        String jsonData = "{\"temperature\": 25.5, \"humidity\": 60}";
        int httpResponseCode = http.POST(jsonData);

        Serial.println(httpResponseCode);
        http.end();
    }

    delay(60000); // อัพเดตทุก 60 วินาที
}
            </pre>`
        ,

        "Applications": `
            <p>ESP32 ถูกใช้อย่างกว้างขวางในหลายอุตสาหกรรม ไม่ว่าจะเป็น:</p>
            <ul>
                <li><strong>Smart Devices:</span> เช่น Smart Speakers, Smart Watches, Smart Lights</li>
                <li><strong>Industry Automation:</span> ใช้ ESP32 ในการควบคุมกระบวนการผลิตหรือในระบบอัตโนมัติ</li>
                <li><strong>Health Monitoring:</span> ใช้เซ็นเซอร์ต่างๆ ที่เชื่อมต่อกับ ESP32 ในการตรวจสอบค่าทางการแพทย์ เช่น อุณหภูมิ, ความดันโลหิต</li>
                <li><strong>IoT Networks:</span> ใช้ ESP32 ในการสร้างเครือข่าย IoT ที่มีความหลากหลาย</li>
            </ul>
            <h3><strong><span style="color: #FF5733;">ข้อมูลเพิ่มเติม:</span></strong></h3>
            <p><span style="color: #FF9800;">ESP32 ถูกออกแบบมาให้มีประสิทธิภาพสูงและสามารถใช้งานในหลากหลายแอปพลิเคชัน ซึ่งเหมาะสำหรับการพัฒนาระบบที่ต้องการการเชื่อมต่อที่เร็วและเสถียร</span></p>
        `,
        "Future": `
            <p>อนาคตของ ESP32 และ IoT จะมุ่งไปสู่การพัฒนา AIoT (Artificial Intelligence of Things) ซึ่งเป็นการผสมผสานระหว่าง AI (ปัญญาประดิษฐ์) กับ IoT เพื่อให้สามารถตัดสินใจได้อัตโนมัติและมีการเรียนรู้จากข้อมูลที่ได้จากเซ็นเซอร์ต่างๆ โดยสามารถประมวลผลได้ที่ Edge (อุปกรณ์ปลายทาง) โดยไม่ต้องส่งข้อมูลไปที่ Cloud</p>
            <h3><strong><span style="color:rgb(93, 144, 255);">ข้อมูลเพิ่มเติม:</span></strong></h3>
            <ul>
                <li><strong>Edge Computing:</strong> การประมวลผลที่อุปกรณ์ ซึ่งช่วยลดการพึ่งพา Cloud และทำให้ข้อมูลสามารถประมวลผลได้เร็วขึ้น</li>
                <li><strong>AIoT:</strong> การนำ AI มาใช้ในอุปกรณ์ IoT เพื่อให้มีการวิเคราะห์และตัดสินใจอัตโนมัติ</li>
                <li><strong>5G & IoT:</strong> การพัฒนาของเทคโนโลยี 5G จะช่วยเพิ่มความเร็วในการส่งข้อมูลในระบบ IoT</li>
            </ul>
        `,
        "About Me": `
            <p>👋 สวัสดีครับ ผมชื่อ พัฒนพล สุธรรม เป็นนักเรียนโรงเรียนพิริยาลัยจังหวัดแพร่ ระดับชั้นมัธยมศึกษาปีที่ 2 ที่มีความชื่นชอบใน เทคโนโลยี</p>
            <p>🎯 เป้าหมายของเว็บนี้คือนำเสนอข้อมูลเกี่ยวกับบอร์ด ESP32 เพื่อมาใช้กับเทคโนโลยี IoT สำหรับคนที่ต้องการจะศึกษาข้อมูลในเรื่องนี้</p>
        `
    };

    return topics[topic] || "No information available for this topic.";
}
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}