// التنقل بين الصفحات
function openLesson(subject) {
  localStorage.setItem("subject", subject);
  window.location.href = "lesson.html";
}

function goBack() {
  window.history.back();
}

function openAIHelper() {
  window.location.href = "ai.html";
}

// تحميل بيانات الدرس
if (window.location.pathname.includes("lesson.html")) {
  const subject = localStorage.getItem("subject") || "مادة غير معروفة";
  document.getElementById("lesson-title").textContent = `📘 درس في ${subject}`;
  document.getElementById("lesson-content").textContent = `هذا درس بسيط في ${subject}. قريبًا ستتوفر دروس تفاعلية أكثر!`;
}

// الانتقال للاختبار
function startQuiz() {
  window.location.href = "quiz.html";
}

// عرض الاختبار
if (window.location.pathname.includes("quiz.html")) {
  const subject = localStorage.getItem("subject") || "المادة";
  document.getElementById("quiz-title").textContent = `اختبار ${subject}`;
  document.getElementById("quiz-box").innerHTML = `
    <p>سؤال 1: ما هو تعريف ${subject}؟</p>
    <input type="text" placeholder="إجابتك هنا">
  `;
}

// نتيجة الاختبار
function submitQuiz() {
  alert("تم إرسال الإجابات ✅\nسيتم إضافة النتيجة لاحقًا.");
}

// صفحة المساعد الذكي
function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMsg = input.value.trim();

  if (userMsg === "") return;

  chatBox.innerHTML += `<div class="user-msg">${userMsg}</div>`;
  input.value = "";

  setTimeout(() => {
    chatBox.innerHTML += `<div class="bot-msg">🤖 المساعد: جاري تطوير الردود الذكية قريبًا!</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}
