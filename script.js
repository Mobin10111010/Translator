export const LANGUAGES = {
    'auto': 'تشخیص خودکار',
    'af': 'آفریکانس',
    'sq': 'آلبانیایی',
    'am': 'آمهاری',
    'ar': 'عربی',
    'hy': 'ارمنی',
    'az': 'آذربایجانی',
    'eu': 'باسکی',
    'be': 'بلاروسی',
    'bn': 'بنگالی',
    'bs': 'بوسنیایی',
    'bg': 'بلغاری',
    'ca': 'کاتالان',
    'ceb': 'سبوانو',
    'zh-CN': 'چینی (ساده‌شده)',
    'zh-TW': 'چینی (سنتی)',
    'co': 'کورسیکایی',
    'hr': 'کرواتی',
    'cs': 'چک',
    'da': 'دانمارکی',
    'nl': 'هلندی',
    'en': 'انگلیسی',
    'eo': 'اسپرانتو',
    'et': 'استونیایی',
    'fi': 'فنلاندی',
    'fr': 'فرانسوی',
    'fy': 'فریزی',
    'gl': 'گالیسی',
    'ka': 'گرجی',
    'de': 'آلمانی',
    'el': 'یونانی',
    'gu': 'گجراتی',
    'ht': 'هائیتی کریول',
    'ha': 'هوسا',
    'haw': 'هاوائی',
    'he': 'عبری',
    'hi': 'هندی',
    'hmn': 'همونگ',
    'hu': 'مجارستانی',
    'is': 'ایسلندی',
    'ig': 'ایگبو',
    'id': 'اندونزی',
    'ga': 'ایرلندی',
    'it': 'ایتالیایی',
    'ja': 'ژاپنی',
    'jw': 'جاوه‌ای',
    'kn': 'کانادا',
    'kk': 'قزاقستانی',
    'km': 'خمر',
    'ko': 'کره‌ای',
    'ku': 'کردی',
    'ky': 'قرقیزستان',
    'lo': 'لائوس',
    'la': 'لاتین',
    'lv': 'لتونی',
    'lt': 'لیتوانی',
    'lb': 'لوکزامبورگی',
    'mk': 'مقدونیه',
    'mg': 'مالاگاسی',
    'ms': 'مالایی',
    'ml': 'مالایالام',
    'mt': 'مالتایی',
    'mi': 'مائوری',
    'mr': 'مراتی',
    'mn': 'مغولی',
    'my': 'میانمار (برمه)',
    'ne': 'نپالی',
    'no': 'نروژی',
    'ny': 'نیانجا',
    'ps': 'پشتو',
    'fa': 'فارسی',
    'pl': 'لهستانی',
    'pt': 'پرتغالی',
    'pa': 'پنجابی',
    'ro': 'رومانیایی',
    'ru': 'روسی',
    'sm': 'سامویی',
    'gd': 'اسکاتلندی گلیک',
    'sr': 'صربی',
    'st': 'سوتو جنوبی',
    'sn': 'شونا',
    'sd': 'سندی',
    'si': 'سینهالا',
    'sk': 'اسلواکی',
    'sl': 'اسلوونیایی',
    'so': 'سومالیایی',
    'es': 'اسپانیایی',
    'su': 'سوندایی',
    'sw': 'سواحیلی',
    'sv': 'سوئدی',
    'tl': 'تاگالوگ',
    'tg': 'تاجیکستان',
    'ta': 'تامیل',
    'tt': 'تاتار',
    'te': 'تلوگو',
    'th': 'تایلندی',
    'tr': 'ترکی',
    'tk': 'ترکمنستان',
    'uk': 'اوکراینی',
    'ur': 'اردو',
    'ug': 'اویغور',
    'uz': 'ازبک',
    'vi': 'ویتنامی',
    'cy': 'ولزی',
    'xh': 'ژوسا',
    'yi': 'ییدیش',
    'yo': 'یوروبا',
    'zu': 'زولو'
};

class Translator {
    constructor() {
        this.sourceText = document.getElementById('source-text');
        this.targetText = document.getElementById('target-text');
        this.sourceLang = document.getElementById('source-lang');
        this.targetLang = document.getElementById('target-lang');
        this.sourceSearch = document.getElementById('source-lang-search');
        this.targetSearch = document.getElementById('target-lang-search');
        this.translateBtn = document.getElementById('translate-btn');
        this.clearBtn = document.getElementById('clear-btn');
        this.copyBtn = document.getElementById('copy-btn');
        this.loadingSpinner = document.getElementById('loading');
        this.speakBtn = document.getElementById('speak-btn');
        this.swapLangsBtn = document.getElementById('swap-langs-btn');
        this.speechToTextBtn = document.getElementById('speech-to-text-btn');
        
        this.enhancedLanguageMap = {
            'fa': ['fa-IR', 'fa'],  // Persian
            'en': ['en-US', 'en-GB', 'en'],  // English variants
            'ar': ['ar-SA', 'ar'],  // Arabic
            'ru': ['ru-RU', 'ru'],  // Russian
            'zh-CN': ['zh-CN', 'zh'],  // Chinese (Simplified)
            'zh-TW': ['zh-TW', 'zh'],  // Chinese (Traditional)
            'fr': ['fr-FR', 'fr-CA', 'fr'],  // French
            'de': ['de-DE', 'de-AT', 'de'],  // German
            'es': ['es-ES', 'es-MX', 'es'],  // Spanish
            'it': ['it-IT', 'it'],  // Italian
            'ja': ['ja-JP', 'ja'],  // Japanese
            'ko': ['ko-KR', 'ko'],  // Korean
            'hi': ['hi-IN', 'hi'],  // Hindi
            'tr': ['tr-TR', 'tr'],  // Turkish
            'pt': ['pt-BR', 'pt-PT', 'pt']  // Portuguese
        };

        // Enhanced voice mapping with more specific regional voices
        this.enhancedVoiceMap = {
            'fa': [
                { 
                    lang: 'fa-IR', 
                    name: 'Persian (Iran)', 
                    voices: [
                        'Zahra',   // Female Persian voice
                        'Maryam',  // Another female Persian voice
                        'Farhad',  // Male Persian voice
                        'Mehrdad'  // Alternative male Persian voice
                    ],
                    qualities: {
                        pitch: 1.1,     // Natural Persian intonation
                        rate: 0.85,     // Slightly slower for clarity
                        pronunciation: 'standard'  // Standard Iranian Persian
                    }
                },
                { 
                    lang: 'fa', 
                    name: 'Generic Persian', 
                    voices: ['Laleh', 'Parsa'],
                    qualities: {
                        pitch: 1.0,
                        rate: 0.9,
                        pronunciation: 'general'
                    }
                }
            ],
            'en': [
                { lang: 'en-US', name: 'US English', voices: ['Karen', 'Michael'] },
                { lang: 'en-GB', name: 'British English', voices: ['Daniel', 'Emily'] },
                { lang: 'en-AU', name: 'Australian English', voices: ['Lee', 'Tanya'] }
            ],
            'ar': [
                { lang: 'ar-SA', name: 'Arabic (Saudi)', voices: ['Maha', 'Ahmed'] }
            ],
            'ru': [
                { lang: 'ru-RU', name: 'Russian', voices: ['Olga', 'Vladimir'] }
            ],
            'zh-CN': [
                { lang: 'zh-CN', name: 'Chinese (Simplified)', voices: ['Li', 'Mei'] }
            ],
            'fr': [
                { lang: 'fr-FR', name: 'French', voices: ['Claire', 'Pierre'] }
            ]
            // Add more regional voices as needed
        };

        this.voiceStyleConfigurations = {
            'default': { 
                pitch: 0.9, 
                rate: 0.95
            }
        };

        this.populateLanguageDropdowns();
        this.addEventListeners();
        this.initSpeechSynthesis();
        this.initSpeechRecognition();
    }

    populateLanguageDropdowns() {
        const sortedLanguages = Object.entries(LANGUAGES)
            .sort((a, b) => a[1].localeCompare(b[1]));

        // Populate source language dropdown
        this.sourceLang.innerHTML = `
            <option value="auto">تشخیص خودکار</option>
            ${sortedLanguages.map(([code, name]) => 
                `<option value="${code}">${name}</option>`
            ).join('')}
        `;

        // Populate target language dropdown
        this.targetLang.innerHTML = sortedLanguages.map(([code, name]) => 
            `<option value="${code}">${name}</option>`
        ).join('');
    }

    addEventListeners() {
        this.translateBtn.addEventListener('click', () => this.translate());
        this.clearBtn.addEventListener('click', () => this.clear());
        this.copyBtn.addEventListener('click', () => this.copyText());
        this.speakBtn.addEventListener('click', () => this.speakTranslatedText());
        this.swapLangsBtn.addEventListener('click', () => this.swapLanguages());
        
        // Add search functionality
        this.sourceSearch.addEventListener('input', () => this.filterLanguages(this.sourceSearch, this.sourceLang));
        this.targetSearch.addEventListener('input', () => this.filterLanguages(this.targetSearch, this.targetLang));

        // Add language change listener to update speech recognition language
        this.sourceLang.addEventListener('change', () => {
            const recognitionLang = this.mapLanguageToRecognitionCode(this.sourceLang.value);
            this.recognition.lang = recognitionLang;
        });
    }

    filterLanguages(searchInput, langSelect) {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // Reset to show all options first
        Array.from(langSelect.options).forEach(option => {
            option.style.display = 'block';
        });

        // Filter languages based on search term
        Array.from(langSelect.options)
            .filter(option => 
                option.value !== 'auto' && 
                option.text.toLowerCase().indexOf(searchTerm) === -1
            )
            .forEach(option => {
                option.style.display = 'none';
            });
    }

    async translate() {
        const text = this.sourceText.value.trim();
        const sourceLang = this.sourceLang.value;
        const targetLang = this.targetLang.value;

        if (!text) {
            alert('لطفاً متنی را برای ترجمه وارد کنید');
            return;
        }

        if (!targetLang) {
            alert('لطفاً زبان مقصد را انتخاب کنید');
            return;
        }

        try {
            this.showLoading(true);
            const translation = await this.fetchTranslation(text, sourceLang, targetLang);
            this.targetText.value = translation;
        } catch (error) {
            console.error('خطا در ترجمه:', error);
            alert('متأسفانه خطایی در ترجمه رخ داده است');
        } finally {
            this.showLoading(false);
        }
    }

    async fetchTranslation(text, sourceLang, targetLang) {
        const apiUrl = 'https://translate.googleapis.com/translate_a/single';
        const params = new URLSearchParams({
            client: 'gtx',
            sl: sourceLang === 'auto' ? 'auto' : sourceLang,
            tl: targetLang,
            dt: 't',
            q: text
        });

        const response = await fetch(`${apiUrl}?${params}`);
        
        if (!response.ok) {
            throw new Error('Translation request failed');
        }

        const data = await response.json();
        
        return data[0][0][0];
    }

    showLoading(show) {
        this.loadingSpinner.classList.toggle('hidden', !show);
    }

    clear() {
        this.sourceText.value = '';
        this.targetText.value = '';
    }

    copyText() {
        const text = this.targetText.value;
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('متن کپی شد');
            }).catch(err => {
                console.error('خطا در کپی متن:', err);
            });
        }
    }

    initSpeechSynthesis() {
        if (!('speechSynthesis' in window)) {
            this.speakBtn.disabled = true;
            this.speakBtn.textContent = 'گفتار پشتیبانی نمی‌شود';
            return;
        }

        window.speechSynthesis.getVoices();
    }

    speakTranslatedText() {
        const translatedText = this.targetText.value.trim();
        
        if (!translatedText) {
            alert('متنی برای خواندن وجود ندارد');
            return;
        }

        const targetLang = this.targetLang.value;
        const voices = window.speechSynthesis.getVoices();
        
        const defaultVoice = voices.find(voice => 
            voice.lang.startsWith(targetLang || 'en')
        );

        const utterance = new SpeechSynthesisUtterance(translatedText);
        
        if (defaultVoice) {
            utterance.voice = defaultVoice;
            utterance.pitch = 0.9;
            utterance.rate = 0.95;
        }

        utterance.lang = targetLang || 'en';
        utterance.volume = 1;

        utterance.onerror = (event) => {
            console.error('Speech synthesis error:', event.error);
            alert('خطا در تبدیل متن به گفتار');
        };

        window.speechSynthesis.speak(utterance);
    }

    findBestMaleVoiceForLanguage(targetLang, voices, defaultVoice) {
        return voices.find(voice => 
            voice.lang.startsWith(targetLang)
        ) || defaultVoice;
    }

    selectPersianMaleVoice(voices, defaultVoice) {
        return voices.find(voice => 
            voice.lang.startsWith('fa')
        ) || defaultVoice;
    }

    initSpeechRecognition() {
        if (!('webkitSpeechRecognition' in window)) {
            this.speechToTextBtn.style.display = 'none';
            console.warn('Speech recognition not supported');
            return;
        }

        this.recognition = new webkitSpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        
        this.recognition.lang = this.mapLanguageToRecognitionCode(this.sourceLang.value || 'fa');

        this.recognition.onstart = () => {
            this.speechToTextBtn.classList.add('active');
        };

        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            
            if (this.sourceLang.value === 'fa') {
                const normalizedTranscript = this.normalizePersianText(transcript);
                this.sourceText.value = normalizedTranscript;
            } else {
                this.sourceText.value = transcript;
            }

            this.speechToTextBtn.classList.remove('active');
            
            if (this.targetLang.value) {
                this.translate();
            }
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            this.speechToTextBtn.classList.remove('active');
            alert('خطا در تشخیص گفتار: ' + this.getErrorMessage(event.error));
        };

        this.recognition.onend = () => {
            this.speechToTextBtn.classList.remove('active');
        };

        this.speechToTextBtn.addEventListener('click', () => this.startSpeechRecognition());
    }

    normalizePersianText(text) {
        const digitMap = {
            '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4', 
            '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9',
            '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4', 
            '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9'
        };

        return text.split('').map(char => digitMap[char] || char).join('');
    }

    getErrorMessage(error) {
        const errorMessages = {
            'no-speech': 'هیچ صدایی شناسایی نشد',
            'audio-capture': 'خطا در ضبط صدا',
            'not-allowed': 'دسترسی به میکروفون رد شد',
            'network': 'خطای شبکه در تشخیص گفتار'
        };

        return errorMessages[error] || 'خطای نامشخص در تشخیص گفتار';
    }

    mapLanguageToRecognitionCode(languageCode) {
        const languageMap = {
            'fa': 'fa-IR',
            'en': 'en-US',
            'ar': 'ar-SA',
            'ru': 'ru-RU',
            'zh-CN': 'zh-CN',
            'zh-TW': 'zh-TW',
            'fr': 'fr-FR',
            'de': 'de-DE',
            'es': 'es-ES',
            'it': 'it-IT',
            'ja': 'ja-JP',
            'ko': 'ko-KR',
            'hi': 'hi-IN',
            'tr': 'tr-TR',
            'pt': 'pt-BR'
        };

        return languageMap[languageCode] || languageCode;
    }

    startSpeechRecognition() {
        try {
            if (this.recognition.running) {
                this.recognition.stop();
                return;
            }

            this.recognition.start();
        } catch (error) {
            console.error('Speech recognition start error:', error);
            alert('خطا در شروع تشخیص گفتار');
        }
    }

    ensureVoicesLoaded() {
        return new Promise(resolve => {
            if (window.speechSynthesis.getVoices().length) {
                resolve();
            } else {
                window.speechSynthesis.onvoiceschanged = resolve;
            }
        });
    }

    swapLanguages() {
        const currentSourceLang = this.sourceLang.value;
        const currentSourceText = this.sourceText.value;
        
        this.sourceLang.value = this.targetLang.value;
        this.targetLang.value = currentSourceLang === 'auto' ? 'en' : currentSourceLang;
        
        this.sourceText.value = this.targetText.value;
        this.targetText.value = currentSourceText;
        
        if (this.sourceText.value && this.sourceLang.value && this.targetLang.value) {
            this.translate();
        }
    }

}

document.addEventListener('DOMContentLoaded', async () => {
    const translator = new Translator();
    await translator.ensureVoicesLoaded();
});

export default Translator;