// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Fynah",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Vonona amzay ve enao ?😹",                                    // First interaction
            yesBtn: "Oui🥰",                                             // Text for "Yes" button
            noBtn: "Non, mbola 😄",                                               // Text for "No" button
            secretAnswer: " Eka, efa vonona 😂"           // Secret hover message
        },
        second: {
            text: "Hatraiza le fitiavana ?",                          // For the love meter
            startText: "Hatreto ",                                   // Text before the percentage
            nextBtn: "Vita ? ❤️"                                         // Text for the next button
        },
        third: {
            text: "Manaiky ve enao raha hiraka amiko am St Valentin ? 🌹", // The big question!
            yesBtn: "Oui! 😉",                                             // Text for "Yes" button
            noBtn: "Non 😅"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "❤",  // Shows when they go past 5000%
        high: "💗",              // Shows when they go past 1000%
        normal: "🤍"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Nanaiky ihany enao no farany!!!",
        message: "kiss! ❤️",
        emojis: "😙"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#fff5e4",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffe3e1",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ffd1d1",     // Button color (should stand out against the background)
        buttonHover: "#ff9494",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "1s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/drlphawbg/video/upload/v1770550070/Tinahime_-_Maybe_Its_Too_Soon_Lyrics_Video_pzuvxx.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
